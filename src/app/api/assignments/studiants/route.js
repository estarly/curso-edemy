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
    const result = estudiantes.length
      ? estudiantes
      : [
          {
            id: 1,
            name: "Juan Pérez",
            email: "juan@email.com",
            StateCourse: [
              {
                id: 10,
                state: 1,
                assignmentresults: [
                  {
                    id: 100,
                    response: { respuesta: "Ejemplo de respuesta" },
                    complete: 1,
                    created_at: new Date(),
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            name: "María García",
            email: "maria@email.com",
            StateCourse: [
              {
                id: 11,
                state: 1,
                assignmentresults: [
                  {
                    id: 101,
                    response: { respuesta: "Respuesta de María" },
                    complete: 1,
                    created_at: new Date(),
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            name: "Carlos López",
            email: "carlos@email.com",
            StateCourse: [
              {
                id: 12,
                state: 0,
                assignmentresults: [
                  {
                    id: 102,
                    response: { respuesta: "Respuesta de Carlos" },
                    complete: 0,
                    created_at: new Date(),
                  },
                ],
              },
            ],
          },
          {
            id: 4,
            name: "Ana Torres",
            email: "ana@email.com",
            StateCourse: [
              {
                id: 13,
                state: 1,
                assignmentresults: [
                  {
                    id: 103,
                    response: { respuesta: "Respuesta de Ana" },
                    complete: 1,
                    created_at: new Date(),
                  },
                ],
              },
            ],
          },
        ];

    return new Response(JSON.stringify({ ok: true, items: result }), { status: 200 });
  } catch (error) {
    console.error("Error al obtener las preguntas:", error);
    return new Response(JSON.stringify({ ok: false, error: "Error al obtener las preguntas" }), { status: 500 });
  }
}