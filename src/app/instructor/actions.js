import prisma from "@libs/prismadb";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function getAssetsByCourseId(courseId) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const items = await prisma.asset.findMany({
      where: { courseId: parseInt(courseId) },
    });

    return { items };
  } catch (error) {
    return { items: [] };
  }
}

export async function getAssignmentTypes() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const items = await prisma.assignmentType.findMany();

    return { items };
  } catch (error) {
    return { items: [] };
  }
}

export async function saveAssignment(assetId, data) {
  try {
    let config_assignment = {};
    if (data.tipoId === 1 || data.tipoId === 2) {
      config_assignment = {
        options: data.opciones || [],
        correct_options: Array.isArray(data.respuesta) ? data.respuesta : [data.respuesta],
      };
    } else if (data.tipoId === 3) {
      config_assignment = {
        correct_answer: "",
      };
    }

    const assignment = await prisma.assignment.create({
      data: {
        assetId: parseInt(assetId),
        assignmentTypeId: data.tipoId,
        title: data.pregunta,
        description: data.descripcion,
        config_assignment: config_assignment,
      },
    });
    return assignment;
  } catch (error) {
    console.error("Error al guardar la pregunta:", error);
    throw error;
  }
}

export async function getAssignmentsByAssetId(assetId) {
  try {
    const assignments = await prisma.assignment.findMany({
      where: { assetId: parseInt(assetId) },
    });
    return assignments;
  } catch (error) {
    console.error("Error al obtener las preguntas:", error);
    throw error;
  }
}

export async function deleteAssignmentById(id) {
  try {
    const items = await prisma.assignment.delete({
      where: { id: parseInt(id) },
    });
    return { items };
  } catch (error) {
    console.error("Error al eliminar la asignación:", error);
    return { items: null };
  }
}
