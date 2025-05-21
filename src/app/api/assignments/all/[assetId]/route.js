import { getAssignmentsByAssetId } from "@/app/instructor/actions";

export async function GET(request, { params }) {
  const { assetId } = params;

  try {
    const result = await getAssignmentsByAssetId(assetId);
    return new Response(JSON.stringify({ ok: true, items: result }), { status: 200 });
  } catch (error) {
    console.error("Error al obtener las preguntas:", error);
    return new Response(JSON.stringify({ ok: false, error: "Error al obtener las preguntas" }), { status: 500 });
  }
}
