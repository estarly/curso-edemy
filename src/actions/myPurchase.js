import { getCurrentUser } from "./getCurrentUser";
import prisma from "../../libs/prismadb";
import { redirect } from "next/navigation";

export async function myPurchase() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const enrolments = await prisma.enrolment.findMany({
			where: { userId: currentUser.id },
			include: {
				course: {
					include: {
						user: true,
					},
				},
			},
		});

		return { enrolments };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
