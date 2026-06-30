import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { normalizeEmail } from "@libs/normalizeEmail";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function PUT(request, { params }) {
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
        { message: "Solo los administradores pueden editar estudiantes." },
        { status: 403 }
      );
    }

    const { studentId } = params;
    const id = parseInt(studentId, 10);

    if (!id || Number.isNaN(id)) {
      return NextResponse.json(
        { message: "ID de estudiante inválido." },
        { status: 400 }
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

    const student = await prisma.user.findUnique({
      where: { id },
    });

    if (!student || student.role !== "USER") {
      return NextResponse.json(
        { message: "Estudiante no encontrado." },
        { status: 404 }
      );
    }

    const currentEmail = normalizeEmail(student.email);

    if (email !== currentEmail) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email,
          NOT: { id },
        },
      });

      if (existingUser) {
        return NextResponse.json(
          { message: "Ya existe un usuario con este correo electrónico." },
          { status: 409 }
        );
      }
    }

    const updateData = {
      name: name.trim(),
      email,
      status: status === undefined ? student.status : parseInt(status),
    };

    if (password?.trim()) {
      updateData.hashedPassword = await bcrypt.hash(password, 12);
    }

    const updated = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(
      {
        message: "Estudiante actualizado exitosamente.",
        student: updated,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Ocurrió un error al actualizar el estudiante." },
      { status: 500 }
    );
  }
}
