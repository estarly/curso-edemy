import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function GET(req) {
  try {

    const items = await prisma.module.findMany({
      where: {
        status: {
          in: [0, 1],
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json({ error: "Error al obtener los módulos" }, { status: 500 });
  }
}