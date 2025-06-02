import prisma from "../../libs/prismadb";

export async function getSingleCourse(params) {
	const { courseId } = params;

	try {
		// 1. Enrolments directos al curso
		const directEnrolments = await prisma.enrolment.findMany({
			where: { courseId: parseInt(courseId) },
			select: { userId: true },
		});

		// 2. Buscar módulos de este curso
		const modules = await prisma.courseModule.findMany({
			where: { courseId: parseInt(courseId) },
			select: { moduleId: true },
		});
		const moduleIds = modules.map(m => m.moduleId);


		// 3. Enrolments en módulos de este curso
		let moduleEnrolments = [];
		if (moduleIds.length > 0) {
			moduleEnrolments = await prisma.enrolment.findMany({
				where: { moduleId: { in: moduleIds } },
				select: { userId: true },
			});
		}
		
		// 4. Unir y filtrar IDs únicos
		const allUserIds = [
			...directEnrolments.map(e => e.userId),
			...moduleEnrolments.map(e => e.userId),
		];
		const uniqueUserIds = [...new Set(allUserIds)].map(id => ({ userId: id }));
		
		// 5. Traer el curso como lo hacías antes
		const course = await prisma.course.findUnique({
			where: { id: parseInt(courseId) },
			include: {
				user: {
					include: {
						profile: true,
					},
				},
				category: {
					select: {
						name: true,
						logo: true,
					},
				},
				assets: {
					include: {
						assignments: true,
						assetType: true,
					},
				},
				reviews: {
					orderBy: {
						created_at: "desc",
					},
					include: {
						user: {
							select: {
								name: true,
								image: true,
							},
						},
					},
				},
			},
		});

		// 6. Retornar también los IDs únicos de usuarios inscritos
		course.enrolledUserIds = uniqueUserIds;
		
		return { course };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
