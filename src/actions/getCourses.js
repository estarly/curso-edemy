import prisma from "../../libs/prismadb";

export async function getCourses(params,stack=10) {
	const { q, sort, id } = params;

	const getOrderByClause = () => {
		switch (sort) {
			case "desc":
				return { created_at: "desc" };
			case "asc":
				return { created_at: "asc" };
			default:
				return { created_at: "desc" }; // Default sorting option
		}
	};

	// Función para obtener los filtros según el id de categoría
	const getFilters = () => {
		let filters = {};
		if (id && id !== "all") {
			filters.category_id = parseInt(id);
		}
		
		return filters;
	};

	try {
		let where = {
			status: "Approved",
			is_module: false,
			...getFilters() // Aplicamos los filtros de categoría
		};
		
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

export async function getCategories() {
	const categories = await prisma.category.findMany({
		where: {
			status: 1,
			courses: {
				some: {},
			},
		},
		orderBy: {
			name: 'asc',
		},
	});
	return categories;
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
