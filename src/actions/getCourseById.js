import { getCurrentUser } from "./getCurrentUser";
import prisma from "@libs/prismadb";
import { redirect } from "next/navigation";

export async function getCourseById(params) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	const { courseId } = params;

	try {
		const course = await prisma.course.findMany({
			where: { id: parseInt(courseId) },
			include: {
				user: true,
			},
		});
		const videos = await prisma.asset.findMany({
			where: { courseId: parseInt(courseId), assetTypeId: 1 },
		});
		const assets = await prisma.asset.findMany({
			where: { courseId: parseInt(courseId), assetTypeId: 2 },
		});

		return { course, videos, assets };
	} catch (error) {
		console.error("Error fetching counts:", error);
		return { course: [], videos: [], assets: [] };
	}
}
