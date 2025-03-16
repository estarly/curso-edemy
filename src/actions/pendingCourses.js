import { getCurrentUser } from "./getCurrentUser";
import prisma from "../../libs/prismadb";
import { redirect } from "next/navigation";

export async function pendingCourses() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const courses = await prisma.course.findMany({
			where: { status: "Pending" },
			include: {
				user: true,
				assets: {
					select: {
						id: true,
					},
				},
			},
		});

		return { courses };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
