import { getCurrentUser } from "./getCurrentUser";
import prisma from "../../libs/prismadb";

export async function getOrCreateStateCourse({ courseId, assetId, assignmentId = null }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return { error: "Usuario no autenticado" };
	}

	try {
		// 1. Buscar si existe un registro pendiente para este usuario y curso (en cualquier asset)
		const pendiente = await prisma.stateCourse.findFirst({
			where: {
				userId: currentUser.id,
				courseId: courseId,
				state: 0, // pendiente
			},
		});

		if (pendiente && pendiente.assetId !== assetId) {
			// Hay una lección pendiente diferente a la que se está intentando registrar
			return {
				pendiente: true,
				message: "Tienes una lección pendiente por aprobar o completar.",
				assetPendiente: pendiente.assetId,
			};
		}

		// 2. Buscar si ya existe el registro para este curso, asset y assignmentId
		const where = {
			userId: currentUser.id,
			courseId: courseId,
			assetId: assetId,
		};
		if (assignmentId) where.assignmentId = assignmentId;

		let stateCourse = await prisma.stateCourse.findFirst({ where });

		// 3. Si no existe, registrar uno nuevo con state = 0
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

		return {
			pendiente: false,
			stateCourse,
		};
	} catch (error) {
		console.error("Error al obtener o crear el estado del curso:", error);
		return { error: error.message };
	}
}

export async function createStateCourseByAsset({ courseId, myAsset }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return { error: "Usuario no autenticado" };
	}

	try {
		const assetId = myAsset.id;
		// Si hay asignaciones, obtenemos todos los IDs de las asignaciones
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
			// Hay una lección pendiente diferente a la que se está intentando registrar
			return {
				pendiente: true,
				message: "Tienes una lección pendiente por aprobar o completar.",
				assetPendiente: pendiente.assetId,
			};
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
							state: 0, // pendiente
						},
					});
				}
				// Si existe pero tiene assignmentId, NO registrar nada nuevo
			} 
		}

		return {
			pendiente: false,
			stateCourses,
		};
	} catch (error) {
		console.error("Error al obtener o crear el estado del curso:", error);
		return { error: error.message };
	}
}

