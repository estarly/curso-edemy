import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

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
        { message: "Solo los administradores pueden editar instructores." },
        { status: 403 }
      );
    }

    const { instructorId } = params;
    const id = parseInt(instructorId, 10);

    if (!id || Number.isNaN(id)) {
      return NextResponse.json(
        { message: "ID de instructor inválido." },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { name, password, designation, status, requires_course_review } = body;
    const email = body.email?.trim().toLowerCase();

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

    const instructor = await prisma.user.findUnique({
      where: { id },
    });

    if (!instructor || instructor.role !== "INSTRUCTOR") {
      return NextResponse.json(
        { message: "Instructor no encontrado." },
        { status: 404 }
      );
    }

    if (email !== instructor.email) {
      const existingUser = await prisma.user.findUnique({
        where: { email },
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
      designation: designation?.trim() || null,
      status: status === undefined ? instructor.status : parseInt(status),
    };

    if (requires_course_review !== undefined) {
      updateData.requires_course_review = Boolean(requires_course_review);
    }

    if (password?.trim()) {
      updateData.hashedPassword = await bcrypt.hash(password, 12);
    }

    const updated = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(
      {
        message: "Instructor actualizado exitosamente.",
        instructor: updated,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Ocurrió un error al actualizar el instructor." },
      { status: 500 }
    );
  }
}
