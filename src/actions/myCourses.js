import { getCurrentUser } from "./getCurrentUser";
import prisma from "../../libs/prismadb";
import { redirect } from "next/navigation";

export async function myCourses(category = null) {
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
				...(category ? 
					{ categoryId: parseInt(category) } : 
					{ 
						categoryId: {
							not: 0
						} 
					}
				),
			},
			include: {
				user: true,
				assets: true,
				// Usamos courseModules en lugar de modules directamente
				courseModules: {
					select: {
						moduleId: true,
						module: {
							select: {
								id: true
							}
						}
					}
				}
			},
		});

		console.log(`Encontrados ${courses.length} cursos`);
		
		if (courses.length === 0) {
			return { courses: [] };
		}

		// Procesar cada curso para contar estudiantes
		const coursesWithStudentCounts = [];
		
		for (const course of courses) {
			try {
				// Recopilar todos los IDs de módulos para este curso desde courseModules
				const moduleIds = course.courseModules?.map(cm => cm.moduleId) || [];
				
				// Obtener estudiantes únicos inscritos
				let uniqueStudents = [];
				
				// Solo consultar enrollments si hay módulos o el curso mismo puede tener enrollments
				if (moduleIds.length > 0 || course.id) {
					uniqueStudents = await prisma.enrollment.findMany({
						where: {
							OR: [
								{ courseId: course.id },
								...(moduleIds.length > 0 ? [{ 
									moduleId: {
										in: moduleIds
									} 
								}] : [])
							]
						},
						select: {
							userId: true
						},
						distinct: ['userId']
					});
				}
				
				// Contar estudiantes únicos
				const studentCount = uniqueStudents.length;
				
				// Crear una copia limpia del curso sin los courseModules
				const { courseModules, ...courseWithoutModules } = course;
				
				// Agregar el curso con el recuento de estudiantes
				coursesWithStudentCounts.push({
					...courseWithoutModules,
					studentCount
				});
			} catch (error) {
				console.error(`Error procesando curso ${course.id}:`, error);
				// Si falla un curso individual, aún incluirlo pero sin conteo de estudiantes
				const { courseModules, ...courseWithoutModules } = course;
				coursesWithStudentCounts.push({
					...courseWithoutModules,
					studentCount: 0,
					processError: true
				});
			}
		}

		console.log(`Procesados ${coursesWithStudentCounts.length} cursos con conteos`);
		return { courses: coursesWithStudentCounts };
		
	} catch (error) {
		console.error("Error completo:", error);
		// Si ya se obtuvieron los cursos pero hubo un error en el procesamiento
		if (typeof courses !== 'undefined' && Array.isArray(courses) && courses.length > 0) {
			// Devolver los cursos sin contar estudiantes
			return { 
				courses: courses.map(course => {
					const { courseModules, ...courseWithoutModules } = course;
					return {
						...courseWithoutModules,
						studentCount: 0
					};
				}),
				error: "Error al contar estudiantes"
			};
		}
		
		// Error fatal, no se pudieron obtener cursos
		return { courses: [], error: error.message };
	}
}
