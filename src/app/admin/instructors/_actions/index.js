import { redirect } from "next/navigation";
import prisma from "@libs/prismadb"; 
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function getInstructors() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const items = await prisma.user.findMany({
      where: {
        role: "INSTRUCTOR",
      },
    });
    return { items };
  } catch (error) {
    return { items: [] };
  }
}