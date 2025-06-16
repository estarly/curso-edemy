import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { fileUploadService } from "@/services/fileUpload";

export async function DELETE(request, { params }) {
  const { courseId, lessonId, filesAssetId } = params;

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
          message: "No tienes permiso para eliminar archivos de este curso.",
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

    const filesAsset = await prisma.filesAsset.findUnique({
      where: { id: parseInt(filesAssetId) },
    });

    if (!filesAsset) {
      return NextResponse.json(
        {
          message: "Archivo no encontrado.",
        },
        { status: 404 }
      );
    }

    if (filesAsset.assetId !== parseInt(lessonId)) {
      return NextResponse.json(
        {
          message: "El archivo no pertenece a esta lección.",
        },
        { status: 400 }
      );
    }

    try {
      await fileUploadService.deleteFile(filesAsset.url);
    } catch (deleteError) {
      console.error('Error al eliminar el archivo físico:', deleteError);
    }

    await prisma.filesAsset.delete({
      where: { id: parseInt(filesAssetId) },
    });

    return NextResponse.json(
      {
        message: "Archivo eliminado correctamente.",
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