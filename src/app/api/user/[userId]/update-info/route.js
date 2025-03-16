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

		const {
			name,
			designation,
			bio,
			gender,
			address,
			phone,
			website,
			twitter,
			facebook,
			linkedin,
			youtube,
		} = body;

		if (!name || !designation) {
			NextResponse.json(
				{
					message: "Name is required!",
				},
				{ status: 404 }
			);
		}

		await prisma.user.update({
			where: { id: parseInt(userId) },
			data: {
				name,
				designation,
			},
		});

		const existingProfile = await prisma.profile.findUnique({
			where: { userId: parseInt(userId) },
		});

		if (existingProfile) {
			// Update existing profile
			await prisma.profile.update({
				where: { userId: parseInt(userId) },
				data: {
					bio,
					gender,
					address,
					phone,
					website,
					twitter,
					facebook,
					linkedin,
					youtube,
				},
			});
		} else {
			// Create a new profile
			await prisma.profile.create({
				data: {
					userId: parseInt(userId),
					bio,
					gender,
					address,
					phone,
					website,
					twitter,
					facebook,
					linkedin,
					youtube,
				},
			});
		}

		return NextResponse.json(
			{
				message: "Profile updated.",
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
