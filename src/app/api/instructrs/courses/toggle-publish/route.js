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

		const { courseId, publish } = await req.json();

		if (!courseId || publish === undefined) {
			return NextResponse.json(
				{ error: "Curso y estado de publicación son requeridos." },
				{ status: 400 }
			);
		}

		const course = await prisma.course.findFirst({
			where: {
				id: parseInt(courseId, 10),
				userId: currentUser.id,
				status: { not: "Deleted" },
			},
		});

		if (!course) {
			return NextResponse.json(
				{ error: "Curso no encontrado." },
				{ status: 404 }
			);
		}

		if (course.status !== "Approved") {
			return NextResponse.json(
				{
					error:
						"Solo puedes publicar cursos que hayan sido aprobados por un administrador.",
				},
				{ status: 403 }
			);
		}

		const updatedCourse = await prisma.course.update({
			where: { id: course.id },
			data: { publish: Boolean(publish) },
		});

		return NextResponse.json({ success: true, course: updatedCourse });
	} catch (error) {
		return NextResponse.json(
			{ error: "Error al actualizar la publicación del curso." },
			{ status: 500 }
		);
	}
}
