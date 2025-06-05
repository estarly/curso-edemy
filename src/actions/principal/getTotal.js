 import prisma from "@libs/prismadb";

export async function getTotal() {

	try {
		const [courses, instructors, students] =
			await Promise.all([
				prisma.course.count({
					where: {
						status: "Approved"
					}
				}),
				prisma.user.count({
					where: { role: "INSTRUCTOR", status: 1 },
				}),
				prisma.user.count({
					where: { role: "USER", status: 1 },
				}),
			]);

		return { courses, instructors, students };
	} catch (error) {
		console.error("Error fetching counts:", error);
		return { courses: 0, instructors: 0, students: 0, }; 

	}
}

const getUniqueEnrolmentsCount = async () => {
	const enrolments = await prisma.enrolment.findMany({
		where: { status: "PAID" },
		select: {
			courseId: true,
		},
	});

	// Filtrar los enrolments únicos por courseId, asegurando que no sean nulos
	const uniqueCourses = Array.from(new Set(
		enrolments
			.map(enrolment => enrolment.courseId)
			.filter(courseId => courseId !== null) // Filtra los courseId que son distintos de null
	));

	return uniqueCourses.length;
};
