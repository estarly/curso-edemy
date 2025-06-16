
import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";  

export async function POST(req) {
  const body = await req.json();
  const { courseId, moduleId } = body;

  if (!courseId || !moduleId) {
    return NextResponse.json({ error: "Faltan datos requeridos" }, { status: 400 });
  }

  try {
    // Eliminar la relación entre curso y módulo
    const deleted = await prisma.courseModule.delete({
      where: {
        courseId_moduleId: {
          courseId: Number(courseId),
          moduleId: Number(moduleId),
        },
      },
    });

    return NextResponse.json({ message: "Relación eliminada correctamente", deleted });
  } catch (error) {
    return NextResponse.json({ error: "Error al eliminar la relación" }, { status: 500 });
  }
} 