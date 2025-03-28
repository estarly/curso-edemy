import prisma from "../../../libs/prismadb";

export async function getTopCategories() {

	try {
		const categories = await prisma.category.findMany({
			where:{
                status:1
            },
            orderBy: {
				name: 'asc',
			},
            take: 8,
			include: {
				courses: {
					select: {
						id: true,
					}
				}
			},
		});

		const categoriesWithCourseCount = categories.map(category => ({
			...category,
			courseCount: category.courses.length
		}));

		return categoriesWithCourseCount;
	} catch (error) {
		console.error("Error fetching categories:", error);
		return [];
	}
}