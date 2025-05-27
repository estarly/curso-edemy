import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prismadb";

export  async function GET(req, res) {
  if (req.method === "POST") {
    const { courseId, moduleId } = req.body;
    try {
      const exists = await prisma.courseModule.findFirst({
        where: { courseId, moduleId },
      });
      if (exists) {
        return NextResponse.json({ error: "Ya está asignado" });
      }
      const result = await prisma.courseModule.create({
        data: { courseId, moduleId },
      });
      return NextResponse.json({ result });
    } catch (error) {
      return NextResponse.json({ error: "Error al asignar" });
    }
  }
  return NextResponse.json({ error: "Método no permitido" }, { status: 405 });
} 