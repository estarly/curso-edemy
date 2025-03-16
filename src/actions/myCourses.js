import { getCurrentUser } from "./getCurrentUser";
import prisma from "../../libs/prismadb";
import { redirect } from "next/navigation";

export async function myCourses() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const courses = await prisma.course.findMany({
			where: { userId: currentUser.id },
			include: {
				user: true,
			},
		});

		return { courses };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
