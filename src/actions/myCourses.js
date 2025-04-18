import { getCurrentUser } from "./getCurrentUser";
import prisma from "../../libs/prismadb";
import { redirect } from "next/navigation";

export async function myCourses(category = null) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const courses = await prisma.course.findMany({
			where: {
				userId: currentUser.id,
				...(category ? { category_id: parseInt(category) } : {}),
			},
			include: {
				user: true,
			},
		});

		return { courses };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
