import prisma from "../../libs/prismadb";

export async function getCourses(params) {
	const { q, sort } = params;

	const getOrderByClause = () => {
		switch (sort) {
			case "desc":
				return { created_at: "desc" };
			case "asc":
				return { created_at: "asc" };
			case "price_low":
				return { regular_price: "asc" };
			case "price_high":
				return { regular_price: "desc" };
			default:
				return { created_at: "desc" }; // Default sorting option
		}
	};

	try {
		let where = {};
		if (q) {
			where.OR = [
				{
					title: {
						contains: q,
					},
				},
				{
					category: {
						contains: q,
					},
				},
				{
					description: {
						contains: q,
					},
				},
			];
		}

		where.status = "Approved";
		const courses = await prisma.course.findMany({
			where,
			orderBy: getOrderByClause(),
			include: {
				user: true,
				enrolments: {
					select: {
						id: true,
					},
				},
			},
		});

		// console.log(courses);

		return { courses };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}

export async function getHomepageCourses() {
	try {
		const courses = await prisma.course.findMany({
			where: { status: "Approved" },
			take: 3,
			orderBy: {
				id: "desc",
			},
			include: {
				user: true,
				enrolments: {
					select: {
						id: true,
					},
				},
			},
		});

		// console.log(courses);

		return { courses };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
