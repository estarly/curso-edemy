import { redirect } from "next/navigation";
import prisma from "@libs/prismadb"; 
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function getCourses() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const items = await prisma.course.findMany({
      orderBy: {
        id: 'asc',
      },
      include: {
        category: true,
        user: true,
        assets: true,
      },
    });
    return { items };
  } catch (error) {
    console.log(error);
    return { items: [] };
  }
}

export async function getCourseById(id) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }
  try {
    const course = await prisma.course.findUnique({
      where: { id },
    });
    return { course };
  } catch (error) {
    return { course: null };
  }
}
