import { NextResponse } from "next/server";
import prisma from "../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        {
          message: "Usuario no autorizado.",
        },
        { status: 401 }
      );
    }

    if (currentUser.role !== "ADMIN") {
      return NextResponse.json(
        {
          message: "Solo los administradores pueden crear módulos.",
        },
        { status: 403 }
      );
    }

    const body = await request.json();

    const {
      title,
      description,
      status,
      logo
    } = body;

    if (!title) {
      return NextResponse.json(
        {
          message: "El título del módulo es obligatorio.",
        },
        { status: 400 }
      );
    }

    const moduleExists = await prisma.module.findFirst({
      where: {
        title: title,
      },
    });

    if (moduleExists) {
      return NextResponse.json(
        {
          message: "Ya existe un módulo con este título.",
        },
        { status: 409 }
      );
    }

    const module = await prisma.module.create({
      data: {
        title,
        description: description || "",
        status: status === undefined ? 1 : status,
        logo: logo || null,
      },
    });

    return NextResponse.json(
      {
        message: "Módulo creado exitosamente.",
        module,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error al crear el módulo.",
      },
      { status: 500 }
    );
  }
}