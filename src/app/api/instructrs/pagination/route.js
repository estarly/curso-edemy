import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prismadb";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const PAGE_SIZE = 5;
    const name = searchParams.get("name") || "";

    // Filtrar solo usuarios con rol INSTRUCTOR y por nombre si se provee
    const where = {
        role: "INSTRUCTOR",
        ...(name && {
            name: {
                contains: name
            }
        })
    };

    const [items, total] = await Promise.all([
        prisma.user.findMany({
            where,
            skip: (page - 1) * PAGE_SIZE,
            take: PAGE_SIZE,
            include: {
                profile: true,
                courses: true,
            },
            orderBy: { id: "desc" },
        }),
        prisma.user.count({ where }),
    ]);

    return NextResponse.json({
        items,
        total,
        page,
        pageSize: PAGE_SIZE,
        totalPages: Math.ceil(total / PAGE_SIZE),
    });
}
