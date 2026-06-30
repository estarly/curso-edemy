import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";   
import { getCurrentUser } from "@/actions/getCurrentUser";
import bcrypt from "bcrypt";
import { normalizeEmail } from "@libs/normalizeEmail";

export async function PUT(request, { params }) {
    const { userId } = params;

    try {
        const currentUser = await getCurrentUser();
        
        // Verificar si el usuario está autenticado
        if (!currentUser || currentUser.id !== parseInt(userId)) {
            return NextResponse.json(
                { message: "Usuario no autorizado." },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { password } = body;
        const email = normalizeEmail(body.email);

        // Validar que se proporcionen datos
        if (!email && !password) {
            return NextResponse.json(
                { message: "Se requiere correo electrónico o contraseña para actualizar." },
                { status: 400 }
            );
        }

        // Preparar los datos a actualizar
        const updateData = {};
        if (email) {
            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return NextResponse.json(
                    { message: "Formato de correo electrónico inválido." },
                    { status: 400 }
                );
            }

            const currentEmail = normalizeEmail(currentUser.email);

            // Verificar si el email es diferente al actual
            if (email !== currentEmail) {
                const existingUser = await prisma.user.findFirst({
                    where: {
                        email,
                        NOT: { id: parseInt(userId) },
                    },
                });

                if (existingUser) {
                    return NextResponse.json(
                        { message: "El correo electrónico ya está en uso." },
                        { status: 400 }
                    );
                }

                updateData.email = email;
            }
        }

        if (password) {
            // Hashear la nueva contraseña
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.hashedPassword = hashedPassword;
        }

        // Actualizar el usuario en la base de datos
        await prisma.user.update({
            where: { id: parseInt(userId) },
            data: updateData,
        });

        return NextResponse.json(
            { message: "Datos de sesión actualizados correctamente." },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            { message: "Ocurrió un error al actualizar los datos de sesión." },
            { status: 500 }
        );
    }
}