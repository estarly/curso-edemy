import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function PUT(request, { params }) {
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
          message: "Solo los administradores pueden editar categorías.",
        },
        { status: 403 }
      );
    }

    const { categoryId } = params;

    if (!categoryId || isNaN(parseInt(categoryId))) {
      return NextResponse.json(
        {
          message: "ID de categoría inválido.",
        },
        { status: 400 }
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

    const categoryExists = await prisma.category.findUnique({
      where: {
        id: parseInt(categoryId),
      },
    });

    if (!categoryExists) {
      return NextResponse.json(
        {
          message: "Categoría no encontrada.",
        },
        { status: 404 }
      );
    }

    const nameExists = await prisma.category.findFirst({
      where: {
        name: name,
        id: {
          not: parseInt(categoryId)
        }
      },
    });

    if (nameExists) {
      return NextResponse.json(
        {
          message: "Ya existe otra categoría con este nombre.",
        },
        { status: 409 }
      );
    }

    const updatedCategory = await prisma.category.update({
      where: {
        id: parseInt(categoryId),
      },
      data: {
        name,
        status: status === undefined ? categoryExists.status : status,
        logo: logo === undefined ? categoryExists.logo : logo,
        updated_at: new Date(),
      },
    });

    return NextResponse.json(
      {
        message: "Categoría actualizada exitosamente.",
        category: updatedCategory,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error al actualizar la categoría.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
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
          message: "Solo los administradores pueden eliminar categorías.",
        },
        { status: 403 }
      );
    }

    const { categoryId } = params;

    if (!categoryId || isNaN(parseInt(categoryId))) {
      return NextResponse.json(
        {
          message: "ID de categoría inválido.",
        },
        { status: 400 }
      );
    }

    const category = await prisma.category.findUnique({
      where: {
        id: parseInt(categoryId),
      },
      include: {
        courses: true,
      },
    });

    if (!category) {
      return NextResponse.json(
        {
          message: "Categoría no encontrada.",
        },
        { status: 404 }
      );
    }

    if (category.courses && category.courses.length > 0) {
      return NextResponse.json(
        {
          message: "No se puede eliminar la categoría porque tiene cursos asociados.",
        },
        { status: 400 }
      );
    }

    await prisma.category.delete({
      where: {
        id: parseInt(categoryId),
      },
    });

    return NextResponse.json(
      {
        message: "Categoría eliminada exitosamente.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error al eliminar la categoría.",
      },
      { status: 500 }
    );
  }
}