import { NextResponse } from "next/server";
import prisma from "../../../../libs/prismadb";

export async function POST(req) {
  const body = await req.json();
  const { title, description, status, logo } = body;
  try {
    const module = await prisma.module.create({
      data: { title, description, status, logo },
    });
    return NextResponse.json(module);
  } catch (error) {
    return NextResponse.json({ error: "Error al crear módulo" }, { status: 500 });
  }
}

export async function PUT(req) {
  const body = await req.json();
  const { id, title, description, status, logo } = body;
  try {
    const module = await prisma.module.update({
      where: { id },
      data: { title, description, status, logo },
    });
    return NextResponse.json(module);
  } catch (error) {
    return NextResponse.json({ error: "Error al actualizar módulo" }, { status: 500 });
  }
}

export async function ASSIGN(req) {
  const body = await req.json();
  const { courseId, moduleId } = body;
  try {
    const exists = await prisma.courseModule.findFirst({
      where: { courseId, moduleId },
    });
    if (exists) {
      return NextResponse.json({ error: "Ya está asignado" }, { status: 400 });
    }
    const result = await prisma.courseModule.create({
      data: { courseId, moduleId },
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: "Error al asignar" }, { status: 500 });
  }
}