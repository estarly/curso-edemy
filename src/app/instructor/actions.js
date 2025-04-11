import prisma from "../../../libs/prismadb";
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