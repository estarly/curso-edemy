import { getCurrentUser } from "./getCurrentUser";
import prisma from "@libs/prismadb";
import { redirect } from "next/navigation";

export async function byModule() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		
		const enrolments = await prisma.enrolment.findMany({
			where: { userId: currentUser.id, moduleId: { not: null } },
			include: {
				module: {
					include: {
						courseModules: {
							include: {
								course: {
									include: {
										user: true,
										assets:true,
										enrolments:true,
									},
								},
							},
						},
					},
				},
			},
		});

		return { enrolments };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
