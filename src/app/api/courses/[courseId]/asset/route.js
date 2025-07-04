import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";	
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request, { params }) {
	const { courseId } = params;
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{
					message: "Usuario no autorizado.",
				},
				{ status: 401 }
			);
		}

		const body = await request.json();

		const { title, file_url, config_asset, assetTypeId } = body;

		Object.keys(body).forEach((value) => {
			if (!body[value]) {
				NextResponse.json(
					{
						message: "Uno o más campos están vacíos!",
					},
					{ status: 404 }
				);
			}
		});

		await prisma.asset.create({
			data: {
				title,
				file_url,
				courseId: parseInt(courseId),
				assetTypeId: parseInt(assetTypeId),
				config_asset: config_asset ?? null
			},
		});

		return NextResponse.json(
			{
				message: "Lección subida.",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "Ocurrió un error.",
			},
			{ status: 500 }
		);
	}
}

// export async function DELETE(request, { params }) {
// 	const { courseId: assetId } = params;
// 	try {
// 		const currentUser = await getCurrentUser();
// 		if (!currentUser) {
// 			return NextResponse.json(
// 				{
// 					message: "Unauthorized user.",
// 				},
// 				{ status: 401 }
// 			);
// 		}

// 		await prisma.asset.delete({
// 			where: {
// 				id: parseInt(assetId),
// 			},
// 		});

// 		return NextResponse.json(
// 			{
// 				message: "Video deleted.",
// 			},
// 			{ status: 200 }
// 		);
// 	} catch (error) {
// 		console.error("Error:", error);
// 		return NextResponse.json(
// 			{
// 				message: "An error occurred.",
// 			},
// 			{ status: 500 }
// 		);
// 	}
// }
