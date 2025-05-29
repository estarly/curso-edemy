import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prismadb";
// Importa tu función de acceso a la base de datos aquí
// import { updateStudentStatus } from "@/lib/db";

// Mapeo de status string a número
const statusMap = {
    "inactive": 0,
    "active": 1,
    "deleted": 2,
};

export async function POST(request) {
    try {
        const { studentId, status } = await request.json();

        // Validación básica
        if (
            !studentId ||
            !["active", "inactive", "deleted"].includes(status)
        ) {
            return NextResponse.json({ success: false, error: "Datos inválidos." }, { status: 400 });
        }

        // Convertir el status string a número
        const statusNumber = statusMap[status];

        // Actualizar el estatus en la base de datos
        await prisma.user.update({
            where: { id: studentId },
            data: { status: statusNumber },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: "Error en el servidor." }, { status: 500 });
    }
}
