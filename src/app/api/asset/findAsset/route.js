import { NextResponse } from "next/server";

import { getCurrentUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";	
import prisma from "@libs/prismadb";	

export async function POST(request) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect("/");
	}
	try {
		const body = await request.json();
		const { assetId } = body;

		if (assetId == "") {
			return NextResponse.json(
				{
					message: "assetId is required!",
				},
				{ status: 404 }
			);
		}

		const asset = await prisma.asset.findUnique({
			where: { id: parseInt(assetId) },
			include: {
				assetType: true,
				files: true,
				assignments: {
					include: {
						statecourse: {
							where: {
								userId: currentUser.id,
							},
							include: {
								assignmentresults: {
									orderBy: { created_at: "desc" },
									take: 1,
								},
							},
						},
					},
				},
			},
		});

		return NextResponse.json(asset);
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
