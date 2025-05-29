import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "../../../../../libs/prismadb";

export async function POST(request) {
  const currentUser = await getCurrentUser();

  // Verifica si el usuario está autenticado
  if (!currentUser) {
    return NextResponse.error();
  }

  const { courseId } = await request.json();

  // Verifica si el courseId es válido
  if (!courseId) {
    return NextResponse.json(
      { error: "El ID del curso es inválido." },
      { status: 400 }
    );
  }

  try {
    // Verifica si el usuario ya está enrolado en el curso
    const existingEnrolment = await prisma.enrolment.findFirst({
      where: {
        userId: currentUser.id,
        courseId: parseInt(courseId),
      },
    });

    if (existingEnrolment) {
      return NextResponse.json(
        { error: "Ya estás inscrito en este curso." },
        { status: 400 }
      );
    }

    // Crea un nuevo enrolamiento con estado FREE
    const enrolment = await prisma.enrolment.create({
      data: {
        userId: currentUser.id,
        courseId: parseInt(courseId),
        payment_status: "FREE",
        status: "FREE",
		order_number: 'FREE-'+currentUser.id+'-'+courseId+'-'+Date.now(),
		price: 0,
		paymentId: '0',
		payment_via: "EMPI",
      },
    });

    return NextResponse.json(enrolment, { status: 201 });
  } catch (error) {
    console.error("Error al enrolarse en el curso:", error);
    return NextResponse.json(
      { error: "Hubo un problema al enrolarse en el curso." },
      { status: 500 }
    );
  }
}
