import { getCurrentUser } from "./getCurrentUser";
import prisma from "@libs/prismadb"; 
import { redirect } from "next/navigation";

export async function myLearning() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const enrolments = await prisma.enrolment.findMany({
			where: { 
				userId: currentUser.id,
				courseId: { not: null }
			},
			include: {
				course: {
					include: {
						user: true,
					},
				},
			},
		});

		// Agregar progress a cada curso
		const enrolmentsWithProgress = await Promise.all(enrolments.map(async (enrolment) => {
			const courseId = enrolment.course.id;
			// Buscar si hay algún stateCourse pendiente para este usuario y curso
			const pendientes = await prisma.stateCourse.findMany({
				where: {
					userId: currentUser.id,
					courseId: courseId,
					OR: [
						{ state: 0 },
						{ stateAsset: false },
					],
				},
			});
			const progress = pendientes.length > 0 ? 1 : 2;
			return {
				...enrolment,
				course: {
					...enrolment.course,
					progress,
				},
			};
		}));

		return { enrolments: enrolmentsWithProgress };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}

export async function myLearningPlay(params) {
	const { courseId } = params;
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const course = await prisma.course.findUnique({
			where: { id: parseInt(courseId) },
			include: {
				assets: {
					where: {
						assetTypeId: { in: [0, 1, 2, 3] },
					},
					include: {
						assetType: true,
						files: true,
						assignments: {
							include: {
								statecourse: {
									where: {
										userId: currentUser.id,
									},
									include: {
										assignmentresults: {
											orderBy: { created_at: "desc" },
											take: 1,
										},
									},
								},
							},
						},
					},
				},
				reviews: {
					orderBy: {
						created_at: "desc",
					},
					include: {
						user: {
							select: {
								name: true,
								image: true,
							},
						},
					},
				},
			},
		});

		return { course };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}

export async function saveAssignment(params) {
	const { courseId } = params;
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
}

export async function courseReviewsAndAssets(params) {
	const { courseId } = params;
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const reviewsAndAssets = await prisma.course.findUnique({
			where: { id: parseInt(courseId) },
			include: {
				assets: {
					where: {
						assetTypeId: { in: [0, 1, 2, 3] },
					},
				},
				reviews: {
					orderBy: {
						created_at: "desc",
					},
					include: {
						user: {
							select: {
								name: true,
								image: true,
							},
						},
					},
				},
			},
		});

		return { reviewsAndAssets };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
