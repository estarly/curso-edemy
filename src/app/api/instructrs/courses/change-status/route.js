import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(req) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{ error: "Usuario no autorizado." },
				{ status: 401 }
			);
		}

		const { courseId, status } = await req.json();

		if (!courseId || !status) {
			return NextResponse.json(
				{ error: "Curso y estatus son requeridos" },
				{ status: 400 }
			);
		}

		const validStatuses = ["Pending", "Approved", "Deleted"];
		if (!validStatuses.includes(status)) {
			return NextResponse.json(
				{ error: "Estatus inválido" },
				{ status: 400 }
			);
		}

		const course = await prisma.course.findFirst({
			where: {
				id: parseInt(courseId, 10),
				userId: currentUser.id,
			},
		});

		if (!course) {
			return NextResponse.json(
				{ error: "Curso no encontrado." },
				{ status: 404 }
			);
		}

		if (status === "Approved" || status === "Pending") {
			return NextResponse.json(
				{
					error:
						"Solo un administrador puede aprobar o enviar un curso a revisión.",
				},
				{ status: 403 }
			);
		}

		const updateData = { status };

		if (status === "Deleted") {
			updateData.publish = false;
		}

		const updatedCourse = await prisma.course.update({
			where: { id: course.id },
			data: updateData,
		});

		return NextResponse.json({ success: true, course: updatedCourse });
	} catch (error) {
		return NextResponse.json(
			{ error: "Error al actualizar el estatus del curso" },
			{ status: 500 }
		);
	}
}
