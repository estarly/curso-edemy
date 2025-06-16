import { redirect } from "next/navigation";
import prisma from "@libs/prismadb"; 
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function getBanners() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const items = await prisma.banner.findMany({
      where: {
        status: {
          in: [0, 1],
        },
      },
      orderBy: {
        order: 'asc',
      },
    });
    return { items };
  } catch (error) {
    return { items: [] };
  }
}