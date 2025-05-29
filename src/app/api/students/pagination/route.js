import { NextResponse } from "next/server";
import prisma from "../../../../../libs/prismadb";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const PAGE_SIZE = 5;
    const name = searchParams.get("name") || "";
    const moduleId = searchParams.get("moduleId") || null;
    const moduleIdInt = moduleId ? parseInt(moduleId, 10) : null;

    const where = {
        role: "USER",
        ...(name && {
            name: {
                contains: name
            }
        })
    };
    try {

        const [items, total] = await Promise.all([
            prisma.user.findMany({
                where,
                skip: (page - 1) * PAGE_SIZE,
                take: PAGE_SIZE,
                include: {
                    profile: true,
                    enrolments: {
                        select: {
                            moduleId: true,
                            userId: true,
                        },
                    },
                },
                orderBy: { id: "desc" },
            }),
            prisma.user.count({ where }),
        ]);

        const itemsWithModuleActive = items.map(user => {
            const moduleIds = user.enrolments.map(e => e.moduleId);
            const moduleActive = moduleIdInt ? moduleIds.includes(moduleIdInt) : false;
            return {
                ...user,
                moduleIds,
                moduleActive,
                enrolments: undefined,
            };
        });

        return NextResponse.json({
            items: itemsWithModuleActive,
            total,
            page,
            pageSize: PAGE_SIZE,
            totalPages: Math.ceil(total / PAGE_SIZE),
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error: "Error al obtener los estudiantes",
        }, { status: 500 });
    }

}
