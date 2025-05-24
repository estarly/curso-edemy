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
					message: "Usuario no autorizado.",
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
			whatsapp,
			countryId,
		} = body;

		//tablas user
		if (!name || !designation) {
			return NextResponse.json(
				{
					message: !name ? "Nombre es requerido!" : !designation ? "Designación es requerida!" : "Nombre y designación son requeridos!",
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

		//tablas profile
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
					whatsapp,
					countryId: parseInt(countryId),
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
					whatsapp,
					countryId: parseInt(countryId),
				},
			});
		}

		return NextResponse.json(
			{
				message: "Perfil actualizado.",
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
