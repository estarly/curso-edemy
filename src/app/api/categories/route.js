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
          message: "Solo los administradores pueden crear categorías.",
        },
        { status: 403 }
      );
    }

    const body = await request.json();

    const {
      name,
      status,
      logo
    } = body;

    if (!name) {
      return NextResponse.json(
        {
          message: "El nombre de la categoría es obligatorio.",
        },
        { status: 400 }
      );
    }

    const categoryExists = await prisma.category.findFirst({
      where: {
        name: name,
      },
    });

    if (categoryExists) {
      return NextResponse.json(
        {
          message: "Ya existe una categoría con este nombre.",
        },
        { status: 409 }
      );
    }

    const category = await prisma.category.create({
      data: {
        name,
        status: status === undefined ? 1 : status,
        logo: logo || null,
      },
    });

    return NextResponse.json(
      {
        message: "Categoría creada exitosamente.",
        category,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error al crear la categoría.",
      },
      { status: 500 }
    );
  }
}