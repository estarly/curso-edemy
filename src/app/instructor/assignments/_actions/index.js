import { redirect } from "next/navigation";

import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "../../../../../libs/prismadb";


export async function myAssignmentsCourse() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		console.log("Buscando cursos para el usuario:", currentUser.id);
		
		// Obtener los cursos (corrigiendo la relación con módulos)
		const courses = await prisma.course.findMany({
			where: {
				userId: currentUser.id,
				status: "Approved"
			},
			orderBy: {
				title: "asc"
			},
			include: {
				assets: {
					include: {
						assignments: true
					}
				}
			}
		});

		return { courses: courses };
		
	} catch (error) {
		console.error("Error completo:", error);
		
		// Error fatal, no se pudieron obtener cursos
		return { courses: [], error: error.message };
	}
}

export async function getAssignmentsByCourse(courseId,lessonId,assignmentId) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	} 

	try {
	console.log("Buscando asignaciones para el curso:", courseId, lessonId, assignmentId);

		return { assignments: [] };
	} catch (error) {
		console.error("Error al obtener asignaciones:", error);
		return { assignments: [], error: error.message };
	}
}


