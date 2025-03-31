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
          message: "Solo los administradores pueden editar banners.",
        },
        { status: 403 }
      );
    }

    const { bannerId } = params;

    if (!bannerId || isNaN(parseInt(bannerId))) {
      return NextResponse.json(
        {
          message: "ID de banner inválido.",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const {
      name,
      description,
      url,
      image,
      status,
      order
    } = body;

    if (!name) {
      return NextResponse.json(
        {
          message: "El nombre del banner es obligatorio.",
        },
        { status: 400 }
      );
    }

    const bannerExists = await prisma.banner.findUnique({
      where: {
        id: parseInt(bannerId),
      },
    });

    if (!bannerExists) {
      return NextResponse.json(
        {
          message: "Banner no encontrado.",
        },
        { status: 404 }
      );
    }

    const nameExists = await prisma.banner.findFirst({
      where: {
        name: name,
        id: {
          not: parseInt(bannerId)
        }
      },
    });

    if (nameExists) {
      return NextResponse.json(
        {
          message: "Ya existe otro banner con este nombre.",
        },
        { status: 409 }
      );
    }

    const updatedBanner = await prisma.banner.update({
      where: {
        id: parseInt(bannerId),
      },
      data: {
        name,
        description: description === undefined ? bannerExists.description : description,
        url: url === undefined ? bannerExists.url : url,
        image: image === undefined ? bannerExists.image : image,
        status: status === undefined ? bannerExists.status : status,
        order: order === undefined ? bannerExists.order : order
      },
    });

    return NextResponse.json(
      {
        message: "Banner actualizado exitosamente.",
        banner: updatedBanner,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error al actualizar el banner.",
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
          message: "Solo los administradores pueden eliminar banners.",
        },
        { status: 403 }
      );
    }

    const { bannerId } = params;

    if (!bannerId || isNaN(parseInt(bannerId))) {
      return NextResponse.json(
        {
          message: "ID de banner inválido.",
        },
        { status: 400 }
      );
    }

    const banner = await prisma.banner.findUnique({
      where: {
        id: parseInt(bannerId),
      },
    });

    if (!banner) {
      return NextResponse.json(
        {
          message: "Banner no encontrado.",
        },
        { status: 404 }
      );
    }
     await prisma.banner.update({
      where: {
        id: parseInt(bannerId),
      },
      data: {
        status: 2,
      },
    });

   /* await prisma.banner.delete({
      where: {
        id: parseInt(bannerId),
      },
    });*/

    return NextResponse.json(
      {
        message: "Banner eliminado exitosamente.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error al eliminar el banner.",
      },
      { status: 500 }
    );
  }
}