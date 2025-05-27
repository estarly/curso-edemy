import { createStateCourseByAsset } from "@/actions/stateCourse";

export async function POST(req) {
	const { myAsset, courseId } = await req.json();

	try {
		
		const result = await createStateCourseByAsset({ courseId, myAsset});
		return new Response(JSON.stringify({ ok: true, items: result }), { status: 200 });

	} catch (error) {
		console.error("Error fetching counts:", error);
		return new Response(JSON.stringify({ ok: false, error: "Error al obtener las preguntas" }), { status: 500 });

	}
}
