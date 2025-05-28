import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prismadb";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const categoryId = parseInt(searchParams.get("categoryId"));//searchParams.get("categoryId")
    const PAGE_SIZE = 5;

    const where = categoryId
        ? { categoryId }
        : {};

    const [items, total] = await Promise.all([
        prisma.course.findMany({
            where,
            skip: (page - 1) * PAGE_SIZE,
            take: PAGE_SIZE,
            include: {
                category: true,
                user: true,
                assets: true,
            },
            orderBy: { id: "desc" },
        }),
        prisma.course.count({ where }),
    ]);

    return NextResponse.json({
        items,
        total,
        page,
        pageSize: PAGE_SIZE,
        totalPages: Math.ceil(total / PAGE_SIZE),
    });
}
