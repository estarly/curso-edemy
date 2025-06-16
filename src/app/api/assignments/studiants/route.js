import prisma from "@libs/prismadb"; 

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const courseId = Number(searchParams.get("courseId"));
  const lessonId = Number(searchParams.get("lessonId"));
  const assignmentId = Number(searchParams.get("assignmentId"));

  try {
    // Consulta de ejemplo con Prisma
    const estudiantes = await prisma.user.findMany({
      where: {
        role: "USER",
        StateCourse: {
          some: {
            courseId: courseId,
            assetId: lessonId,
            assignmentId: assignmentId,
          },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        StateCourse: {
          where: {
            courseId: courseId,
            assetId: lessonId,
            assignmentId: assignmentId,
          },
          select: {
            id: true,
            state: true,
            assignmentresults: {
              select: {
                id: true,
                response: true,
                complete: true,
                created_at: true,
              },
            },
          },
        },
      },
    });

    // Si no hay datos, puedes devolver una respuesta estática de ejemplo
    const result = estudiantes;

    return new Response(JSON.stringify({ ok: true, items: result }), { status: 200 });
  } catch (error) {
    console.error("Error al obtener las preguntas:", error);
    return new Response(JSON.stringify({ ok: false, error: "Error al obtener las preguntas" }), { status: 500 });
  }
}