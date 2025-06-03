import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";  


export async function POST(request) {
    try {
        const { userId, moduleId, status } = await request.json();

        if (!userId || !moduleId || typeof status === "undefined") {
            return NextResponse.json({ success: false, error: "Datos incompletos." }, { status: 400 });
        }

        // Verificar si ya existe la inscripción
        const existing = await prisma.enrolment.findFirst({
            where: {
                userId: userId,
                moduleId: moduleId,
            },
        });

        if (status === 1) {
            if (existing) {
                return NextResponse.json({ success: false, error: "El estudiante ya está inscrito en este módulo." }, { status: 409 });
            }
            // Crear la inscripción con status FREE
            await prisma.enrolment.create({
                data: {
                    userId: userId,
                    moduleId: moduleId,
                    payment_status: "FREE",
                    status: "FREE",
                    order_number: `FREE-${userId}-${moduleId}-${Date.now()}`,
                },
            });
            return NextResponse.json({ success: true });
        } else if (status === 0) {
            if (!existing) {
                return NextResponse.json({ success: false, error: "El estudiante no está inscrito en este módulo." }, { status: 404 });
            }
            // Eliminar la inscripción
            await prisma.enrolment.delete({
                where: { id: existing.id },
            });
            return NextResponse.json({ success: true });
        } else {
            return NextResponse.json({ success: false, error: "Status inválido." }, { status: 400 });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: "Error en el servidor." }, { status: 500 });
    }
}
