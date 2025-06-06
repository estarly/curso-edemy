import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { fileUploadService } from "@/services/fileUpload";
import { processFormDataWithFile } from "@/utils/fileProcessing";

export async function GET(request, { params }) {
  const { courseId, lessonId } = params;

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

    const course = await prisma.course.findUnique({
      where: { id: parseInt(courseId) },
    });

    if (!course) {
      return NextResponse.json(
        {
          message: "Curso no encontrado.",
        },
        { status: 404 }
      );
    }

    if (course.userId !== currentUser.id && currentUser.role !== "ADMIN") {
      return NextResponse.json(
        {
          message: "No tienes permiso para acceder a este curso.",
        },
        { status: 403 }
      );
    }

    const asset = await prisma.asset.findUnique({
      where: { id: parseInt(lessonId) },
    });

    if (!asset) {
      return NextResponse.json(
        {
          message: "Lección no encontrada.",
        },
        { status: 404 }
      );
    }

    if (asset.courseId !== parseInt(courseId)) {
      return NextResponse.json(
        {
          message: "La lección no pertenece a este curso.",
        },
        { status: 400 }
      );
    }

    const filesAsset = await prisma.filesAsset.findMany({
      where: { assetId: parseInt(lessonId) },
      orderBy: { id: 'asc' }
    });

    return NextResponse.json(
      {
        message: "Archivos obtenidos correctamente.",
        items: filesAsset
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error: " + error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request, { params }) {
  const { courseId, lessonId } = params;

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

    const course = await prisma.course.findUnique({
      where: { id: parseInt(courseId) },
    });

    if (!course) {
      return NextResponse.json(
        {
          message: "Curso no encontrado.",
        },
        { status: 404 }
      );
    }

    if (course.userId !== currentUser.id && currentUser.role !== "ADMIN") {
      return NextResponse.json(
        {
          message: "No tienes permiso para agregar archivos a este curso.",
        },
        { status: 403 }
      );
    }

    const asset = await prisma.asset.findUnique({
      where: { id: parseInt(lessonId) },
    });

    if (!asset) {
      return NextResponse.json(
        {
          message: "Lección no encontrada.",
        },
        { status: 404 }
      );
    }

    if (asset.courseId !== parseInt(courseId)) {
      return NextResponse.json(
        {
          message: "La lección no pertenece a este curso.",
        },
        { status: 400 }
      );
    }

    const { body, file: uploadedFile } = await processFormDataWithFile(request, 'file');

    if (!uploadedFile || uploadedFile.size === 0) {
      return NextResponse.json(
        {
          message: "El archivo es obligatorio.",
        },
        { status: 400 }
      );
    }

    try {
      const timestamp = new Date().getTime();
      const fileName = `asset-${lessonId}-file-${timestamp}`;

      const uploadResult = await fileUploadService.uploadFile(uploadedFile, {
        fileName: fileName
      });

      if (!uploadResult.success) {
        throw new Error(uploadResult.error || 'Error al subir el archivo');
      }

      const filesAsset = await prisma.filesAsset.create({
        data: {
          url: uploadResult.url,
          assetId: parseInt(lessonId)
        }
      });
      console.log('filesAsset', filesAsset)

      return NextResponse.json(
        {
          message: "Archivo agregado correctamente.",
          fileAsset: filesAsset
        },
        { status: 201 }
      );

    } catch (uploadError) {
      console.error('Error al subir el archivo:', uploadError);
      return NextResponse.json(
        { message: 'Error al subir el archivo: ' + uploadError.message },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error: " + error.message,
      },
      { status: 500 }
    );
  }
}