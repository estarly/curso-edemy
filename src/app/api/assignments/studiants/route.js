import { getAssignmentsByCourse } from "@/app/instructor/assignments/_actions";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const courseId = searchParams.get("courseId");
  const lessonId = searchParams.get("lessonId");
  const assignmentId = searchParams.get("assignmentId");

  try {
    const result = await getAssignmentsByCourse(courseId, lessonId, assignmentId);
    return new Response(JSON.stringify({ ok: true, items: result }), { status: 200 });
  } catch (error) {
    console.error("Error al obtener las preguntas:", error);
    return new Response(JSON.stringify({ ok: false, error: "Error al obtener las preguntas" }), { status: 500 });
  }
}