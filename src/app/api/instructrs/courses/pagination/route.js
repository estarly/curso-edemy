import { NextResponse } from "next/server";
import prisma from "../../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function GET(req) {
    try {
        const currentUser = await getCurrentUser();
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const categoryId = parseInt(searchParams.get("categoryId"));//searchParams.get("categoryId")
        const PAGE_SIZE = 9;

        const where = {
            userId: currentUser.id,
            status: { not: "Deleted" },
            ...(categoryId && { categoryId }),
        };

        const [items, total] = await Promise.all([
            prisma.course.findMany({
                where,
                skip: (page - 1) * PAGE_SIZE,
                take: PAGE_SIZE,
                include: {
                    category: true,
                    user: true,
                    assets: true,
                    courseModules: {
                        select: {
                            moduleId: true,
                        },
                    },
                },
                orderBy: { id: "desc" },
            }),
            prisma.course.count({ where }),
        ]);

        const itemsWithStudentCount = await Promise.all(
            items.map(async (course) => {
                try {
                    const moduleIds = course.courseModules?.map(cm => cm.moduleId) || [];
                    let uniqueStudents = [];
                    if (moduleIds.length > 0 || course.id) {
                        uniqueStudents = await prisma.enrolment.findMany({
                            where: {
                                OR: [
                                    { courseId: course.id },
                                    ...(moduleIds.length > 0 ? [{ moduleId: { in: moduleIds } }] : [])
                                ]
                            },
                            select: { userId: true },
                            distinct: ['userId']
                        });
                    }
                    const { courseModules, ...courseWithoutModules } = course;
                    return {
                        ...courseWithoutModules,
                        studentCount: uniqueStudents.length
                    };
                } catch (error) {
                    const { courseModules, ...courseWithoutModules } = course;
                    return {
                        ...courseWithoutModules,
                        studentCount: 0,
                        processError: true
                    };
                }
            })
        );

        return NextResponse.json({
            success: true,
            message: "Cursos paginados obtenidos correctamente.",
            data: {
                items: itemsWithStudentCount,
                total,
                page,
                pageSize: PAGE_SIZE,
                totalPages: Math.ceil(total / PAGE_SIZE),
            }
        });
    } catch (error) {
        console.error("Error al obtener cursos paginados:", error);
        return NextResponse.json({
            success: false,
            message: "Error al obtener los cursos paginados.",
            data: null,
            error: error.message
        }, { status: 500 });
    }
}
