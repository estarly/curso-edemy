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

export async function saveBanners() {
	
	try {
		
		const banner = await prisma.banner.create({
			data: {
				name: "Banner 1",
				description: "Descripción del banner 1",
				url: "https://res.cloudinary.com/dev-empty/image/upload/v1707718696/daky6dsbqz17jo9pvo9.jpg",
				status: 1,
				image: "https://res.cloudinary.com/dev-empty/image/upload/v1707718696/daky6dsbqz17jo9pvo9.jpg",
				order: 0,
			},
		});

		return { banner };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
