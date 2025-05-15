import { NextResponse } from "next/server";
import prisma from "../../../../libs/prismadb";
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
          message: "Solo los administradores pueden crear categorías.",
        },
        { status: 403 }
      );
    }

    const { body, file: imageFile } = await processFormDataWithFile(request);

    const {
      name,
      status
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

    let logoUrl = null;

    if (imageFile) {
      try {
        const timestamp = new Date().getTime();
        const sanitizedName = name.toLowerCase().replace(/\s+/g, '-');
        const fileName = `category-${sanitizedName}-${timestamp}`;

        const uploadResult = await imageUploadService.uploadImage(imageFile, {
          path: 'upload_course/categories',
          fileName: fileName
        });

        if (!uploadResult.success) {
          throw new Error(uploadResult.error || 'Error al subir la imagen');
        }

        logoUrl = uploadResult.url;
      } catch (uploadError) {
        console.error('Error al subir la imagen:', uploadError);
        return NextResponse.json(
          { message: 'Error al subir la imagen: ' + uploadError.message },
          { status: 500 }
        );
      }
    }

    const category = await prisma.category.create({
      data: {
        name,
        status: status === undefined ? 1 : parseInt(status),
        logo: logoUrl,
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
        message: "Ocurrió un error al crear la categoría: " + error.message,
      },
      { status: 500 }
    );
  }
}