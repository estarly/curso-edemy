import prisma from "../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";


export async function POST(req) {
	const { myAsset, courseId } = await req.json();

	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return new Response(JSON.stringify({ ok: false, error: "Usuario no autenticado" }), { status: 401 });
	}

	try {
		const assetId = myAsset.id;
		const assignmentIds = Array.isArray(myAsset.assignments)
			? myAsset.assignments.map(a => a.id)
			: [];

		// 1. Buscar si ya existe un registro pendiente para este usuario y curso (en cualquier asset)
		const pendiente = await prisma.stateCourse.findFirst({
			where: {
				userId: currentUser.id,
				courseId: courseId,
				state: 0, // pendiente
			},
		});

		if (pendiente && pendiente.assetId !== assetId) {
			// Buscar todas las tareas (stateCourse) de ese asset para este usuario y curso
			const assignmentsPendientes = await prisma.stateCourse.findMany({
				where: {
					userId: currentUser.id,
					courseId: courseId,
					assetId: pendiente.assetId,
				},
			});

			// Si alguna tarea no está completada (state !== 1), no dejar avanzar
			const allAssignmentsCompleted = assignmentsPendientes.length > 0
				? assignmentsPendientes.every(sc => sc.state === 1)
				: false; // Si no hay registros, no dejar avanzar

			if (!allAssignmentsCompleted) {
				return new Response(JSON.stringify({
					ok: true,
					items: {
						pendiente: true,
						message: "Tienes una lección pendiente por aprobar o completar.",
						assetPendiente: pendiente.assetId,
					}
				}), { status: 200 });
			}
			// Si todas están completadas, dejar avanzar (continúa el flujo)
		}

		let stateCourses = [];

		// 2. Si hay assignmentIds, procesar cada uno
		if (assignmentIds.length > 0) {
			for (const assignmentId of assignmentIds) {
				const where = {
					userId: currentUser.id,
					courseId: courseId,
					assetId: assetId,
					assignmentId: assignmentId,
				};
				let stateCourse = await prisma.stateCourse.findFirst({ where });

				if (!stateCourse) {
					stateCourse = await prisma.stateCourse.create({
						data: {
							userId: currentUser.id,
							courseId: courseId,
							assetId: assetId,
							assignmentId: assignmentId,
							state: 0, // pendiente
						},
					});
				}
				stateCourses.push(stateCourse);
			}
		} else {
			// Si no hay assignmentIds, solo por asset
			const where = {
				userId: currentUser.id,
				courseId: courseId,
				assetId: assetId,
			};
			let stateCourse = await prisma.stateCourse.findFirst({ where });

			// Verifica si existe y si tiene assignmentId (no registrar si tiene assignmentId)
			if (!stateCourse || stateCourse.assignmentId) {
				// Solo registrar si NO existe o si el existente NO tiene assignmentId
				if (!stateCourse) {
					stateCourse = await prisma.stateCourse.create({
						data: {
							userId: currentUser.id,
							courseId: courseId,
							assetId: assetId,
							state: 1,
						},
					});
				}
				// Si existe pero tiene assignmentId, NO registrar nada nuevo
			}
		}

		return new Response(JSON.stringify({ ok: true, items: { pendiente: false, stateCourses } }), { status: 200 });

	} catch (error) {
		console.error("Error al obtener o crear el estado del curso:", error);
		return new Response(JSON.stringify({ ok: false, error: "Error al obtener las preguntas" }), { status: 500 });
	}
}
