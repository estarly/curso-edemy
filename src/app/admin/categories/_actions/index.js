import { redirect } from "next/navigation";
import prisma from "../../../../../libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function getCategories() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
  }

  try {
    const items = await prisma.category.findMany({
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


export async function getCategoriesStatus(status = undefined ) {
  try {
    let statusIn = [status];
    if (status === undefined) {
      statusIn = [0,1];
    }
    const categories = await prisma.category.findMany({
      where: {
        status: {
          in: statusIn,
        },
      },
      orderBy: {
        id: 'asc',
      },
    });
    return { items: categories };
  } catch (error) {
    console.log(error);
    return { items: [] };
  }
}
