import { deleteAssignmentById } from "@/app/instructor/actions";

export async function DELETE(request, { params }) {
  const { assetId } = params;
  const result = await deleteAssignmentById(assetId);
  console.log(result);
  if (result.items) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ ok: false }), { status: 500 });
  }
}
