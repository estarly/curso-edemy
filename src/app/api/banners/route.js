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
          message: "Solo los administradores pueden crear banners.",
        },
        { status: 403 }
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

    if (!image) {
      return NextResponse.json(
        {
          message: "La imagen del banner es obligatoria.",
        },
        { status: 400 }
      );
    }

    if (!url) {
      return NextResponse.json(
        {
          message: "La URL del banner es obligatoria.",
        },
        { status: 400 }
      );
    }

    const bannerExists = await prisma.banner.findFirst({
      where: {
        name: name,
      },
    });

    if (bannerExists) {
      return NextResponse.json(
        {
          message: "Ya existe un banner con este nombre.",
        },
        { status: 409 }
      );
    }

    const banner = await prisma.banner.create({
      data: {
        name,
        description: description || "",
        url,
        image,
        status: status === undefined ? 1 : status,
        order: order || 0,
      },
    });

    return NextResponse.json(
      {
        message: "Banner creado exitosamente.",
        banner,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error al crear el banner.",
      },
      { status: 500 }
    );
  }
}