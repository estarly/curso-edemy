import { redirect } from "next/navigation";
import prisma from "../../../../../libs/prismadb";
import { getCurrentUser } from "../../../../actions/getCurrentUser";

export async function getCategories() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const items = await prisma.category.findMany();
    return { items };
  } catch (error) {
    return { items: [] };
  }
}