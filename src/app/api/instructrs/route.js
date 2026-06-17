import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

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
        { message: "Solo los administradores pueden registrar instructores." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { name, email, password, designation, status } = body;

    if (!name?.trim()) {
      return NextResponse.json(
        { message: "El nombre es obligatorio." },
        { status: 400 }
      );
    }

    if (!email?.trim()) {
      return NextResponse.json(
        { message: "El correo electrónico es obligatorio." },
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

    const instructor = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        hashedPassword,
        designation: designation?.trim() || null,
        role: "INSTRUCTOR",
        status: status === undefined ? 1 : parseInt(status),
      },
    });

    return NextResponse.json(
      {
        message: "Instructor registrado exitosamente.",
        instructor,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Ocurrió un error al registrar el instructor." },
      { status: 500 }
    );
  }
}
