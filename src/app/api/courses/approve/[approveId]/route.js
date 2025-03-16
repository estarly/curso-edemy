import { NextResponse } from "next/server";
import prisma from "../../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request, { params }) {
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

		const { approveId } = params;
		await prisma.course.update({
			where: { id: parseInt(approveId) },
			data: {
				status: "Approved",
			},
		});

		return NextResponse.json(
			{
				message: "Approved!",
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
