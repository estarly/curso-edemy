import { getCurrentUser } from "./getCurrentUser";
import prisma from "@libs/prismadb";
import { redirect } from "next/navigation";

export async function getAdminStats() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const [students, instructors, courses, enrolments] =
			await Promise.all([
				prisma.user.count({
					where: { role: "USER" },
				}),
				prisma.user.count({
					where: { role: "INSTRUCTOR" },
				}),
				prisma.course.count({
					where: { status: "Approved" },
				}),
				prisma.enrolment.count({
					where: { status: { in: ["PAID", "FREE"] } },
				}),
			]);

		return { students, courses, instructors, enrolments };
	} catch (error) {
		console.error("Error fetching counts:", error);
		return { students: 0, instructors: 0, courses: 0, enrolments: 0 }; 

	}
}
