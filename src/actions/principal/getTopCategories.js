import prisma from "@libs/prismadb";

export async function getTopCategories() {

	try {
		let arrayCategories = [1,2,3,4,5,6,7,15];
		const categories = await prisma.category.findMany({
			where: {
				id: {
					in: arrayCategories
				},
				status: 1
			},
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

		// Reordenar según arrayCategories
		const orderedCategories = arrayCategories
			.map(id => categoriesWithCourseCount.find(cat => cat.id === id))
			.filter(Boolean); // Elimina posibles undefined si falta alguna categoría

		return orderedCategories;
	} catch (error) {
		console.error("Error fetching categories:", error);
		return [];
	}
}