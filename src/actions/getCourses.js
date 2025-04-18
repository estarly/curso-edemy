import prisma from "../../libs/prismadb";

export async function getCourses(params,stack=10) {
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
		where.is_module = false;
		const courses = await prisma.course.findMany({
			where,
			orderBy: getOrderByClause(),
			take: stack,
			include: {
				user: true,
				enrolments: {
					select: {
						id: true,
					},
				},
			},
		});

		return { courses };
	} catch (error) {
		console.error("Error fetching counts:", error);
		return { courses: [] };
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

		return { courses };
	} catch (error) {
		console.error("Error fetching counts:", error);
		return { courses: [] };
	}
}
