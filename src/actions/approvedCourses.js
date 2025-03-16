import { getCurrentUser } from "./getCurrentUser";
import prisma from "../../libs/prismadb";
import { redirect } from "next/navigation";

export async function approvedCourses() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const courses = await prisma.course.findMany({
			where: { status: "Approved" },
			include: {
				user: true,
				assets: true,
			},
		});

		return { courses };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
