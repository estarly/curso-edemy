import { getCurrentUser } from "./getCurrentUser";
import prisma from "../../libs/prismadb";
import { redirect } from "next/navigation";

export async function getBanners() {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}

	try {
		
		const banners = await prisma.banner.findMany({
			orderBy: {
				id: "desc",
			},
		});

		return { banners };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
