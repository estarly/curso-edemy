import prisma from "@libs/prismadb";
import { getCurrentUser } from "./getCurrentUser";

export async function getMyFavorites() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	try {
		const favourites = await prisma.favourite.findMany({
			where: { userId: currentUser.id },
			orderBy: {
				id: "desc",
			},
			include: {
				course: {
					include: {
						user: true,
						assets: true,
						enrolments: {
							select: {
								id: true,
							},
						},
					},
				},
			},
		});

		// Agregar progress a cada curso
		const favouritesWithProgress = await Promise.all(favourites.map(async (favourite) => {
			const courseId = favourite.course.id;
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
				...favourite,
				course: {
					...favourite.course,
					progress,
				},
			};
		}));

		return { favourites: favouritesWithProgress };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
