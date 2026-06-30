import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { normalizeEmail } from "@libs/normalizeEmail";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { message: "Usuario no autorizado." },
        { status: 401 }
      );
    }

    if (currentUser.role !== "ADMIN") {
      return NextResponse.json(
        { message: "Solo los administradores pueden registrar estudiantes." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { name, password, status } = body;
    const email = normalizeEmail(body.email);

    if (!name?.trim()) {
      return NextResponse.json(
        { message: "El nombre es obligatorio." },
        { status: 400 }
      );
    }

    if (!email) {
      return NextResponse.json(
        { message: "El correo electrónico es obligatorio." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Ingresa un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (!password?.trim()) {
      return NextResponse.json(
        { message: "La contraseña es obligatoria." },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Ya existe un usuario con este correo electrónico." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const student = await prisma.user.create({
      data: {
        name: name.trim(),
        email,
        hashedPassword,
        role: "USER",
        status: status === undefined ? 1 : parseInt(status),
      },
    });

    return NextResponse.json(
      {
        message: "Estudiante registrado exitosamente.",
        student,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Ocurrió un error al registrar el estudiante." },
      { status: 500 }
    );
  }
}
