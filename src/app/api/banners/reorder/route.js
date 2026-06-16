import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function PATCH(request) {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return NextResponse.json({ message: "Usuario no autorizado." }, { status: 401 });
		}

		if (currentUser.role !== "ADMIN") {
			return NextResponse.json(
				{ message: "Solo los administradores pueden reordenar banners." },
				{ status: 403 }
			);
		}

		const body = await request.json();
		const orders = body?.orders;

		if (!Array.isArray(orders) || orders.length === 0) {
			return NextResponse.json(
				{ message: "Se requiere un arreglo de órdenes válido." },
				{ status: 400 }
			);
		}

		for (const entry of orders) {
			if (!entry?.id || entry.order === undefined || isNaN(parseInt(entry.id, 10))) {
				return NextResponse.json(
					{ message: "Cada elemento debe incluir id y order." },
					{ status: 400 }
				);
			}
		}

		await prisma.$transaction(
			orders.map(({ id, order }) =>
				prisma.banner.update({
					where: { id: parseInt(id, 10) },
					data: { order: parseInt(order, 10) },
				})
			)
		);

		return NextResponse.json({ message: "Orden actualizado correctamente." });
	} catch (error) {
		console.error("Error al reordenar banners:", error);
		return NextResponse.json(
			{ message: "Ocurrió un error al actualizar el orden." },
			{ status: 500 }
		);
	}
}
