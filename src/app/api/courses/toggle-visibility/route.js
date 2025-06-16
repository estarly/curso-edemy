import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";  

export async function POST(req) {
    try {
        const { courseId, isVisible } = await req.json();

        if (!courseId || isVisible === undefined) {
            return NextResponse.json(
                { error: "Curso y estado de visibilidad son requeridos" },
                { status: 400 }
            );
        }

        const updatedCourse = await prisma.course.update({
            where: { id: courseId },
            data: { hide: !isVisible }, // Si isVisible es true, hide será false y viceversa
        });

        return NextResponse.json({ 
            success: true, 
            course: updatedCourse,
            message: updatedCourse.hide ? "Curso ocultado exitosamente" : "Curso mostrado exitosamente"
        });
    } catch (error) {
        console.error("Error al actualizar la visibilidad del curso:", error);
        return NextResponse.json(
            { error: "Error al actualizar la visibilidad del curso" },
            { status: 500 }
        );
    }
}
