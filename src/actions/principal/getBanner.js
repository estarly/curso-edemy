import prisma from "../../../libs/prismadb";

export async function getBanner() {

	try {
		const banners = await prisma.banner.findMany({});

		return banners;
	} catch (error) {
		console.error("Error fetching counts:", error);
		return [];
	}
}