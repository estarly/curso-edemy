import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function GET(request, { params }) {
	const { videoId } = params;

	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.json(
			{
				message: "Unauthorized user.",
			},
			{ status: 401 }
		);
	}

	const video = await prisma.asset.findUnique({
		where: { id: parseInt(videoId) },
	});

	return NextResponse.json(video);
}
