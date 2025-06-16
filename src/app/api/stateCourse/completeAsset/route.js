import prisma from "@libs/prismadb";	
import { getCurrentUser } from "@/actions/getCurrentUser";


export async function POST(req) {
	const { assetId, courseId, answer } = await req.json();

	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return new Response(JSON.stringify({ ok: false, error: "Usuario no autenticado" }), { status: 401 });
	}

	try {
		if(answer === "no_assignments"){
			// Cambiar el state a 1 (completado) para este asset
			await prisma.stateCourse.updateMany({
				where: {
					userId: currentUser.id,
					courseId: courseId,
					assetId: assetId,
				},
				data: {
					stateAsset: true,
				}
			});
		}

		return new Response(JSON.stringify({ ok: true }), { status: 200 });

	} catch (error) {
		console.error("Error al obtener o crear el estado del curso:", error);
		return new Response(JSON.stringify({ ok: false, error: "Error al obtener las preguntas" }), { status: 500 });
	}
}
