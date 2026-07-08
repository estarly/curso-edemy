import prisma from "@libs/prismadb";	
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(req) {
	const { selectedOption, questionId } = await req.json();
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return new Response(JSON.stringify({ ok: false, error: "Usuario no autenticado" }), { status: 401 });
	}

	try {
		// 1. Buscar la asignación (assignment) por questionId
		const assignment = await prisma.assignment.findUnique({
			where: { id: questionId },
			include: { asset: true },
		});
		if (!assignment) {
			return new Response(JSON.stringify({ ok: false, error: "Asignación no encontrada" }), { status: 404 });
		}
		
		// 2. Buscar el registro de stateCourse
		const stateCourse = await prisma.stateCourse.findFirst({
			where: {
				userId: currentUser.id,
				courseId: assignment.asset.courseId,
				assetId: assignment.asset.id,
				assignmentId: assignment.id,
			},
		});
		
		// 3. Verificar si ya existe una respuesta para este usuario y asignación
		const previousResult = await prisma.assignmentResults.findFirst({
			where: {
				stateCourseId: stateCourse.id,
			},
			orderBy: { created_at: "desc" },
		});
		
		// Si ya existe una respuesta, no permitir modificarla
		if (previousResult) {
			return new Response(JSON.stringify({
				ok: false,
				error: "Ya has respondido esta pregunta. No puedes modificar tu respuesta.",
			}), { status: 200 });
		}
		
		// 4. Guardar la nueva respuesta en assignmentResults (merge config + respuesta)
		const config = assignment.config_assignment || {};
		const mergedResponse = {
			...config,
			correct_answer: selectedOption,
			title: assignment.title,
			description: assignment.description || "",
		};

		const assignmentResult = await prisma.assignmentResults.create({
			data: {
				stateCourseId: stateCourse.id,
				response: JSON.parse(JSON.stringify(mergedResponse)),
				complete: 1,
			},
		});

		// 5. Actualizar el stateCourse a completado (state = 1)
		if (stateCourse) {
			await prisma.stateCourse.update({
				where: { id: stateCourse.id },
				data: { state: 1,stateAsset: true, },
			});
		}

		return new Response(JSON.stringify({ ok: true, items: assignmentResult }), { status: 200 });
	} catch (error) {
		console.error("Error al guardar la respuesta de la pregunta:", error);
		return new Response(JSON.stringify({ ok: false, error: "Error al guardar la respuesta de la pregunta" }), { status: 500 });
	}
}
