import { getCurrentUser } from "./getCurrentUser";
import prisma from "@libs/prismadb";
import { redirect } from "next/navigation";

export async function getBanners() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		const banners = await prisma.banner.findMany({
			orderBy: {
				order: "asc",
			},
		});

		return { banners };
	} catch (error) {
		console.error("Error fetching banners:", error);
		return { banners: [] };
	}
}

export async function saveBanners(newBanner) {
	try {
		const banner = await prisma.banner.create({
			data: {
				url: newBanner.url,
				status: 1,
				image: newBanner.image,
				order: newBanner.order || 0,
				date_start: newBanner.date_start || null,
				date_end: newBanner.date_end || null,
			},
		});

		return { banner };
	} catch (error) {
		console.error("Error saving banner:", error);
	}
}
