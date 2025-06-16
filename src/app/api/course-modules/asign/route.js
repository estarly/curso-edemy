import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";  

export async function POST(req) {
  const body = await req.json();
  const { courseId, moduleId } = body;

  if (!courseId || !moduleId) {
    return NextResponse.json({ error: "Faltan datos requeridos" }, { status: 400 });
  }

  try {
    // Verificar si ya existe la relación
    const exists = await prisma.courseModule.findFirst({
      where: { courseId: Number(courseId), moduleId: Number(moduleId) },
    });

    if (exists) {
      return NextResponse.json({ error: "El curso ya está asignado a este módulo" }, { status: 400 });
    }

    // Crear la relación
    const result = await prisma.courseModule.create({
      data: {
        courseId: Number(courseId),
        moduleId: Number(moduleId),
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Error al asignar el curso al módulo" }, { status: 500 });
  }
} 

