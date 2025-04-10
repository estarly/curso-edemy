import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { imageUploadService } from "@/services/imageUpload";

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
        { message: "Solo los administradores pueden editar banners." },
        { status: 403 }
      );
    }

    const { bannerId } = params;

    if (!bannerId || isNaN(parseInt(bannerId))) {
      return NextResponse.json(
        { message: "ID de banner inválido." },
        { status: 400 }
      );
    }

    const contentType = request.headers.get('content-type') || '';
    let body;
    let imageFile = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      body = {};

      for (const [key, value] of formData.entries()) {
        if (key === 'imageFile' && value instanceof Blob) {
          imageFile = {
            buffer: Buffer.from(await value.arrayBuffer()),
            originalname: value.name || 'image.jpg',
            mimetype: value.type || 'image/jpeg',
            size: value.size
          };
        } else {
          body[key] = value;
        }
      }
    } else {
      body = await request.json();
    }

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
        { message: "El nombre del banner es obligatorio." },
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
        { message: "Banner no encontrado." },
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
        { message: "Ya existe otro banner con este nombre." },
        { status: 409 }
      );
    }

    let imageUrl = image;

    if (imageFile) {
      try {
        const timestamp = new Date().getTime();
        const fileName = `banner-${bannerId}-${timestamp}`;

        const uploadResult = await imageUploadService.uploadImage(imageFile, {
          path: 'banners',
          fileName: fileName
        });

        if (!uploadResult.success) {
          throw new Error(uploadResult.error || 'Error al subir la imagen');
        }

        imageUrl = uploadResult.url;

        if (bannerExists.image) {
          try {
            await imageUploadService.deleteImage(bannerExists.image);
          } catch (deleteError) {
            console.error('Error al eliminar la imagen anterior:', deleteError);
          }
        }
      } catch (uploadError) {
        console.error('Error al subir la imagen:', uploadError);
        return NextResponse.json(
          { message: 'Error al subir la imagen: ' + uploadError.message },
          { status: 500 }
        );
      }
    }

    const updatedBanner = await prisma.banner.update({
      where: {
        id: parseInt(bannerId),
      },
      data: {
        name,
        description: description === undefined ? bannerExists.description : description,
        url: url === undefined ? bannerExists.url : url,
        image: imageUrl === undefined ? bannerExists.image : imageUrl,
        status: status === undefined ? parseInt(bannerExists.status) : parseInt(status),
        order: order === undefined ? parseInt(bannerExists.order) : parseInt(order),
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
        message: "Ocurrió un error al actualizar el banner: " + error.message,
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