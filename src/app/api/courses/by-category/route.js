import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";  

export async function POST(req) {
  const body = await req.json();
  const { categoryId, moduleId } = body;

  if (!categoryId || !moduleId) {
    return NextResponse.json({ error: "Faltan datos requeridos" }, { status: 400 });
  }

  try {
    // Trae todos los cursos de la categoría
    const courses = await prisma.course.findMany({
      where: {
        categoryId: Number(categoryId),
        status: "Approved",
      },
      orderBy: { title: "asc" },
    });

    // Trae todas las asignaciones de ese módulo
    const assigned = await prisma.courseModule.findMany({
      where: { moduleId: Number(moduleId) },
      select: { courseId: true },
    });
    const assignedIds = assigned.map(a => a.courseId);

    // Marca cada curso si está asignado o no
    const items = courses.map(course => ({
      ...course,
      isAssigned: assignedIds.includes(course.id),
    }));

    return NextResponse.json({ items });
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener cursos" }, { status: 500 });
  }
}
