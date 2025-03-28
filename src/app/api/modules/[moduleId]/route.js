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
          message: "Solo los administradores pueden editar módulos.",
        },
        { status: 403 }
      );
    }

    const { moduleId } = params;

    if (!moduleId || isNaN(parseInt(moduleId))) {
      return NextResponse.json(
        {
          message: "ID de módulo inválido.",
        },
        { status: 400 }
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

    const moduleExists = await prisma.module.findUnique({
      where: {
        id: parseInt(moduleId),
      },
    });

    if (!moduleExists) {
      return NextResponse.json(
        {
          message: "Módulo no encontrado.",
        },
        { status: 404 }
      );
    }

    const titleExists = await prisma.module.findFirst({
      where: {
        title: title,
        id: {
          not: parseInt(moduleId)
        }
      },
    });

    if (titleExists) {
      return NextResponse.json(
        {
          message: "Ya existe otro módulo con este título.",
        },
        { status: 409 }
      );
    }

    const updatedModule = await prisma.module.update({
      where: {
        id: parseInt(moduleId),
      },
      data: {
        title,
        description: description === undefined ? moduleExists.description : description,
        status: status === undefined ? moduleExists.status : status,
        logo: logo === undefined ? moduleExists.logo : logo,
      },
    });

    return NextResponse.json(
      {
        message: "Módulo actualizado exitosamente.",
        module: updatedModule,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error al actualizar el módulo.",
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
          message: "Solo los administradores pueden eliminar módulos.",
        },
        { status: 403 }
      );
    }

    const { moduleId } = params;

    if (!moduleId || isNaN(parseInt(moduleId))) {
      return NextResponse.json(
        {
          message: "ID de módulo inválido.",
        },
        { status: 400 }
      );
    }

    const moduleExists = await prisma.module.findUnique({
      where: {
        id: parseInt(moduleId),
      },
    });

    if (!moduleExists) {
      return NextResponse.json(
        {
          message: "Módulo no encontrado.",
        },
        { status: 404 }
      );
    }

    await prisma.module.delete({
      where: {
        id: parseInt(moduleId),
      },
    });

    return NextResponse.json(
      {
        message: "Módulo eliminado exitosamente.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error al eliminar el módulo.",
      },
      { status: 500 }
    );
  }
}