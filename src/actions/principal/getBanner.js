import prisma from "@libs/prismadb";
import { getActiveBannerWhere } from "@/utils/bannerUtils";

export async function getBanner() {
	try {
		const banners = await prisma.banner.findMany({
			where: getActiveBannerWhere(),
			orderBy: {
				order: "asc",
			},
		});

		return banners;
	} catch (error) {
		console.error("Error fetching banners:", error);
		return [];
	}
}
