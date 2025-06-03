import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";   
import { getCurrentUser } from "@/actions/getCurrentUser";
import { imageUploadService } from "@/services/imageUpload";
import { processFormDataWithFile } from "@/utils/fileProcessing";

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

    const { body, file: imageFile } = await processFormDataWithFile(request);

    const {
      name,
      description,
      url,
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

    if (!imageFile) {
      return NextResponse.json(
        {
          message: "La imagen del banner es obligatoria.",
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

    let imageUrl;

    if (imageFile) {
      try {
        const timestamp = new Date().getTime();
        const sanitizedName = name.toLowerCase().replace(/\s+/g, '-');
        const fileName = `banner-${sanitizedName}-${timestamp}`;

        const uploadResult = await imageUploadService.uploadImage(imageFile, {
          path: 'upload_course/banners',
          fileName: fileName
        });

        if (!uploadResult.success) {
          throw new Error(uploadResult.error || 'Error al subir la imagen');
        }

        imageUrl = uploadResult.url;
      } catch (uploadError) {
        console.error('Error al subir la imagen:', uploadError);
        return NextResponse.json(
          { message: 'Error al subir la imagen: ' + uploadError.message },
          { status: 500 }
        );
      }
    }

    const banner = await prisma.banner.create({
      data: {
        name,
        description: description || "",
        url,
        image: imageUrl,
        status: status === undefined ? 1 : parseInt(status),
        order: order === undefined ? 0 : parseInt(order),
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
        message: "Ocurrió un error al crear el banner: " + error.message,
      },
      { status: 500 }
    );
  }
}