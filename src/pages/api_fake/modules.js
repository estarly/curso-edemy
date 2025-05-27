import prisma from "@/libs/prismadb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Crear módulo
    const { title, description, status, logo } = req.body;
    try {
      const module = await prisma.module.create({
        data: { title, description, status, logo },
      });
      return res.status(200).json(module);
    } catch (error) {
      return res.status(500).json({ error: "Error al crear módulo" });
    }
  }
  if (req.method === "PUT") {
    // Actualizar módulo
    const { id, title, description, status, logo } = req.body;
    try {
      const module = await prisma.module.update({
        where: { id },
        data: { title, description, status, logo },
      });
      return res.status(200).json(module);
    } catch (error) {
      return res.status(500).json({ error: "Error al actualizar módulo" });
    }
  }
  res.status(405).end();
} 