import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";

export async function POST(req) {
  const body = await req.json();
  const { categoryId } = body;

  // Si no se envía categoryId, no consultar y devolver error
  if (!categoryId) {
    return NextResponse.json({ error: "No se proporcionó una categoría" }, { status: 400 });
  }

  try {
    const items = await prisma.course.findMany({
      where: {
        categoryId: Number(categoryId),
        status: "Approved",
      },
      orderBy: { title: "asc" },
    });
    return NextResponse.json({ items });
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener cursos" }, { status: 500 });
  }
}
