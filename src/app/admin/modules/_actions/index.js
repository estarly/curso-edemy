import { redirect } from "next/navigation";
import prisma from "../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function getModules() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const items = await prisma.module.findMany({
      where: {
        status: {
          in: [0, 1],
        },
      },
    });
    return { items };
  } catch (error) {
    return { items: [] };
  }
}