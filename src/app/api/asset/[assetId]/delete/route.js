import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function DELETE(request, { params }) {
	const { assetId } = params;
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{
					message: "Debe estar autenticado.",
				},
				{ status: 401 }
			);
		}

		// 1. Obtener los IDs de las assignments de este asset
		const assignments = await prisma.assignment.findMany({
			where: { assetId: parseInt(assetId) },
			select: { id: true }
		});
		const assignmentIds = assignments.map(a => a.id);

		// 2. Eliminar assignmentresults relacionados
		if (assignmentIds.length > 0) {
			await prisma.assignmentresults.deleteMany({
				where: {
					assignmentId: { in: assignmentIds }
				}
			});
		}

		// Eliminar stateCourse relacionados a este asset
		await prisma.stateCourse.deleteMany({
			where: {
				assetId: parseInt(assetId)
			}
		});

		// Eliminar assignments relacionados a este asset
		await prisma.assignment.deleteMany({
			where: {
				assetId: parseInt(assetId)
			}
		});

		// Finalmente, eliminar el asset
		await prisma.asset.delete({
			where: {
				id: parseInt(assetId)
			}
		});

		return NextResponse.json(
			{
				message: "Lección eliminada.",
			},
			{ status: 200 }
		);

	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "Ocurrió un error, el asset no pudo ser eliminado.",
			},
			{ status: 500 }
		);
	}
}
