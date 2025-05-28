import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prismadb";

export async function POST(req) {
    try {
        const { courseId, status } = await req.json();

        if (!courseId || !status) {
            return NextResponse.json(
                { error: "Curso y estatus son requeridos" },
                { status: 400 }
            );
        }

        // Validar que el status sea uno de los permitidos
        const validStatuses = ["Pending", "Approved", "Deleted"];
        if (!validStatuses.includes(status)) {
            return NextResponse.json(
                { error: "Estatus inválido" },
                { status: 400 }
            );
        }

        const updatedCourse = await prisma.course.update({
            where: { id: courseId },
            data: { status },
        });

        return NextResponse.json({ success: true, course: updatedCourse });
    } catch (error) {
        return NextResponse.json(
            { error: "Error al actualizar el estatus del curso" },
            { status: 500 }
        );
    }
}
