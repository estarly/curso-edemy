import { saveAssignment } from "@/app/instructor/actions";

export async function POST(request, { params }) {
  const { assetId } = params;
  const body = await request.json(); // Obtén los datos del cuerpo de la solicitud

  try {
    const result = await saveAssignment(assetId, body);
    return new Response(JSON.stringify({ ok: true, data: result }), { status: 200 });
  } catch (error) {
    console.error("Error al guardar la pregunta:", error);
    return new Response(JSON.stringify({ ok: false, error: "Error al guardar la pregunta" }), { status: 500 });
  }
}
