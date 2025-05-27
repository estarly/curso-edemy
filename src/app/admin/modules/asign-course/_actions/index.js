import { redirect } from "next/navigation";
import prisma from "../../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function getCoursesByModule(moduleId) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const coursesData = await prisma.courseModule.findMany({
			where: { moduleId: moduleId },
			include: {
				course: true,
			},
		});
		// Extraer solo los cursos del arreglo de objetos
		const items = coursesData.map(courseModule => courseModule.course);

		return {items};
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}

export async function getCategories() {
	const categories = await prisma.category.findMany({
		where: { status: 1 },
		orderBy: { id: "asc" },
	});
	return { items: categories };
}

export async function getCoursesByCategory(categoryId) {
	const courses = await prisma.course.findMany({
		where: { categoryId: Number(categoryId), status: "Approved" },
		orderBy: { title: "asc" },
	});
	return { items: courses };
}
