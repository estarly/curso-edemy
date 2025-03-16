import { NextResponse } from "next/server";
import prisma from "../../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request, { params }) {
	const { userId } = params;
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{
					message: "Unauthorized user.",
				},
				{ status: 401 }
			);
		}

		const body = await request.json();

		const { image } = body;

		if (!image) {
			NextResponse.json(
				{
					message: "Image is required!",
				},
				{ status: 404 }
			);
		}

		await prisma.user.update({
			where: { id: parseInt(userId) },
			data: {
				image,
			},
		});

		return NextResponse.json(
			{
				message: "Profile picture uploaded.",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
