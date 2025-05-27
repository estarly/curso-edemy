import prisma from "@/libs/prismadb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { categoryId } = req.query;
    try {
      const items = await prisma.course.findMany({
        where: {
          categoryId: Number(categoryId),
          status: "Approved",
        },
        orderBy: { title: "asc" },
      });
      return res.status(200).json({ items });
    } catch (error) {
      return res.status(500).json({ error: "Error al obtener cursos" });
    }
  }
  res.status(405).end();
} 