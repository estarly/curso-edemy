const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
	console.log("Sembrando datos iniciales...");

	await prisma.user.createMany({
		data: [
			{
				id: 1,
				name: "Administrador",
				designation: "CEO At ImportDesk",
				email: "admin@gmail.com",
				image:
					"https://space-share.nyc3.digitaloceanspaces.com/upload_share/profile/profile-1-1747315779408",
				hashedPassword:
					"$2b$10$LyqBjAOLKSJY.wRImyQ22uytJ785JjdR6WyyQott4i1cxXxfjIWua",
				role: "ADMIN",
				is_instructor: false,
				status: 1,
				created_at: new Date("2025-03-20T07:17:13.567Z"),
				updated_at: new Date("2025-05-15T13:29:39.700Z"),
			},
			{
				id: 2,
				name: "Instructor Apellido",
				designation: "CEO At ImportDesk ",
				email: "instructor@gmail.com",
				image:
					"https://space-share.nyc3.digitaloceanspaces.com/upload_share/profile/profile-1-1747315779408",
				hashedPassword:
					"$2a$12$hNf/wPKh6TCQmaWzeQH0/O8RAw8UZFauXGUG.rzNOgwGiH5JBMHja",
				role: "INSTRUCTOR",
				is_instructor: false,
				requires_course_review: false,
				status: 1,
				created_at: new Date("2025-03-20T07:17:13.567Z"),
				updated_at: new Date("2025-05-15T20:40:34.312Z"),
			},
		],
		skipDuplicates: true,
	});

	await prisma.profile.createMany({
		data: [
			{
				id: 1,
				userId: 1,
				bio: "This page describes how to perform CRUD operations with your generated Prisma Client API. CRUD is an acronym that stands for.",
				gender: "masculino",
				address: "Nurani 05, Subid Bazar, Sylhet",
				phone: "+55555555555",
				website: "https://themes.gallery/",
				twitter: "https://twitter.com",
				facebook: "https://facebook.com",
				youtube: "https://youtube.com",
				countryId: 173,
				whatsapp: "+584245348207",
			},
		],
		skipDuplicates: true,
	});

	await prisma.module.createMany({
		data: [
			{
				id: 1,
				title: "1 Módulo",
				description: "Descripción 1",
				logo: "https://space-share.nyc3.digitaloceanspaces.com/upload_share/banners/banner-fgdfgdf-1747279294663",
				status: 1,
			},
		],
		skipDuplicates: true,
	});

	await prisma.category.createMany({
		data: [
			{
				id: 1,
				name: "Educacion y Formación",
				status: 1,
				logo: "https://space-share.nyc3.digitaloceanspaces.com/upload_course/categories/category-1-1750014646754",
				created_at: new Date("2024-02-12T05:55:29.652Z"),
				updated_at: new Date("2024-02-12T05:55:29.652Z"),
			},
			{
				id: 2,
				name: "Recursos y Apoyo",
				status: 1,
				logo: "https://space-share.nyc3.digitaloceanspaces.com/upload_course/categories/category-2-1750014702326",
				created_at: new Date("2024-02-12T05:55:29.652Z"),
				updated_at: new Date("2024-02-12T05:55:29.652Z"),
			},
			{
				id: 3,
				name: "Diseño y Multimedia",
				status: 1,
				logo: "https://space-share.nyc3.digitaloceanspaces.com/upload_course/categories/category-3-1750014735725",
				created_at: new Date("2024-02-12T05:55:29.652Z"),
				updated_at: new Date("2024-02-12T05:55:29.652Z"),
			},
		],
		skipDuplicates: true,
	});

	await prisma.assetType.createMany({
		data: [
			{
				id: 1,
				name: "Video",
				config: { val: "", type: "video" },
				status: 1,
				created_at: new Date("2024-02-12T05:55:29.652Z"),
				updated_at: new Date("2024-02-12T05:55:29.652Z"),
			},
			{
				id: 2,
				name: "Audio",
				config: { val: "", type: "audio" },
				status: 1,
				created_at: new Date("2024-02-12T05:55:29.652Z"),
				updated_at: new Date("2024-02-12T05:55:29.652Z"),
			},
			{
				id: 3,
				name: "Document",
				config: { val: "", type: "document" },
				status: 1,
				created_at: new Date("2024-02-12T05:55:29.652Z"),
				updated_at: new Date("2024-02-12T05:55:29.652Z"),
			},
			{
				id: 4,
				name: "Link",
				config: { val: "", type: "link" },
				status: 1,
				created_at: new Date("2024-02-12T05:55:29.652Z"),
				updated_at: new Date("2024-02-12T05:55:29.652Z"),
			},
			{
				id: 5,
				name: "Youtube",
				config: { val: "", type: "youtube" },
				status: 1,
				created_at: new Date("2024-02-12T05:55:29.652Z"),
				updated_at: new Date("2024-02-12T05:55:29.652Z"),
			},
			{
				id: 6,
				name: "Online",
				config: {
					val: "",
					type: "online",
					platform: "",
					meeting_id: "",
					password: "",
					credits: { host: "", duration: "", participants: "" },
				},
				status: 1,
				created_at: new Date("2024-02-12T05:55:29.652Z"),
				updated_at: new Date("2024-02-12T05:55:29.652Z"),
			},
		],
		skipDuplicates: true,
	});

	await prisma.assignmentType.createMany({
		data: [
			{
				id: 1,
				name: "Verdadero o Falso",
				description:
					"Contiene una pregunta y dos opciones: Verdadero y Falso. El usuario debe seleccionar la opción correcta.",
				config_type: {
					options: ["Verdadero", "Falso"],
					correct_option: "Verdadero",
				},
				status: 1,
			},
			{
				id: 2,
				name: "Selección simple",
				description:
					"Contiene una pregunta y varias opciones de respuesta. El usuario debe seleccionar la opción correcta.",
				config_type: { options: ["A", "B", "C"], correct_option: "C" },
				status: 1,
			},		
			{
				id: 3,
				name: "Selección múltiple",
				description:
					"Contiene una pregunta y varias opciones. El usuario debe seleccionar todas las respuestas correctas.",
				config_type: { options: ["A", "B", "C", "D", "E"], correct_options: ["A", "C"] },
				status: 1,
			},
			{
				id: 4,
				name: "Completar",
				description:
					"Contiene una pregunta y una respuesta. El usuario debe completar la respuesta.",
				config_type: { correct_answer: "Respuesta correcta" },
				status: 1,
			},
		],
		skipDuplicates: true,
	});

	await prisma.course.createMany({
		data: [
			{
				id: 1,
				userId: 2,
				categoryId: 1,
				title: "Complete JavaScript Course 2024",
				slug: "complete-javascript-course-2024",
				description:
					"<p><em>Well-made course. Super in-depth, with great challenges and projects that will solidify your Javascript understanding.</em></p>",
				regular_price: 99,
				before_price: 149,
				lessons: "21",
				image:
					"https://res.cloudinary.com/dev-empty/image/upload/v1707203985/mwg8hiewqc1cfl7k3dvt.jpg",
				access_time: "Lifetime",
				requirements: "NULL",
				what_you_will_learn: "NULL",
				who_is_this_course_for: "NULL",
				status: "Approved",
				publish: true,
				is_module: false,
				in_home_page: false,
				in_home_page_set_at: new Date("2024-02-06T07:21:35.780Z"),
				created_at: new Date("2024-02-06T07:21:35.780Z"),
				updated_at: new Date("2024-02-06T07:21:35.780Z"),
			},
			{
				id: 2,
				userId: 2,
				categoryId: 2,
				title: "The Complete Flutter Development Course",
				slug: "dart-flutter-the-complete-flutter-development-course",
				description:
					"<p>Welcome to <strong>The Complete Flutter 2.0 Development Course</strong>.</p>",
				regular_price: 149,
				before_price: 199,
				lessons: "20",
				image:
					"https://res.cloudinary.com/dev-empty/image/upload/v1707204269/pmyhthvg0xixlirzpmbk.jpg",
				access_time: "Lifetime",
				requirements: "NULL",
				what_you_will_learn: "NULL",
				who_is_this_course_for: "NULL",
				status: "Approved",
				publish: true,
				is_module: false,
				in_home_page: false,
				in_home_page_set_at: new Date("2024-02-06T07:21:35.780Z"),
				created_at: new Date("2024-02-06T07:25:23.890Z"),
				updated_at: new Date("2024-02-06T07:25:23.890Z"),
			},
			{
				id: 3,
				userId: 1,
				categoryId: 2,
				title: "Build an E-commerce and Admin App",
				slug: "build-an-e-commerce-and-admin-app",
				description:
					"<p>Learn to design, build, and debug fully functional shopping applications with Flutter and Firebase.</p>",
				regular_price: 99,
				before_price: 199,
				lessons: "20",
				image:
					"https://res.cloudinary.com/dev-empty/image/upload/v1707716814/ahooraqaikeoou3tqp7a.jpg",
				access_time: "Lifetime",
				requirements: "NULL",
				what_you_will_learn: "NULL",
				who_is_this_course_for: "NULL",
				status: "Approved",
				publish: true,
				is_module: false,
				in_home_page: false,
				in_home_page_set_at: new Date("2024-02-06T07:21:35.780Z"),
				created_at: new Date("2024-02-12T05:47:45.728Z"),
				updated_at: new Date("2024-02-12T05:47:45.728Z"),
			},
		],
		skipDuplicates: true,
	});

	await prisma.asset.createMany({
		data: [
			{
				id: 1,
				courseId: 1,
				assetTypeId: 1,
				title: "Introduction",
				video_url:
					"https://res.cloudinary.com/dev-empty/video/upload/v1707204118/ysmbjh5xxrddowskbrb4.mp4",
				config_asset: {
					val: "https://space-share.nyc3.digitaloceanspaces.com/videos/video-1-1749228547566",
					type: "video",
				},
				is_preview: false,
				created_at: new Date("2024-02-06T07:22:03.383Z"),
				updated_at: new Date("2024-02-06T07:22:03.383Z"),
			},
			{
				id: 2,
				courseId: 2,
				assetTypeId: 1,
				title: "Intro",
				video_url:
					"https://res.cloudinary.com/dev-empty/video/upload/v1707204363/ljg3ntdjjguqxiku2xpe.mp4",
				config_asset: {
					val: "https://space-share.nyc3.digitaloceanspaces.com/videos/video-1-1749228547566",
					type: "video",
				},
				is_preview: false,
				created_at: new Date("2024-02-06T07:26:11.414Z"),
				updated_at: new Date("2024-02-06T07:26:11.414Z"),
			},
		],
		skipDuplicates: true,
	});

	await prisma.courseModule.createMany({
		data: [{ courseId: 1, moduleId: 1 }],
		skipDuplicates: true,
	});

	await prisma.review.createMany({
		data: [
			{
				id: 1,
				rating: 5,
				comment: "I learned a lot!!!",
				userId: 1,
				courseId: 1,
				created_at: new Date("2024-03-04T07:16:57.966Z"),
				updated_at: new Date("2024-03-04T07:16:57.966Z"),
			},
			{
				id: 2,
				rating: 4,
				comment: "Average :)",
				userId: 2,
				courseId: 1,
				created_at: new Date("2024-03-04T07:17:39.887Z"),
				updated_at: new Date("2024-03-04T07:17:39.887Z"),
			},
		],
		skipDuplicates: true,
	});

	await prisma.banner.deleteMany();

	await prisma.banner.createMany({
		data: [
			{
				id: 1,
				url: "https://www.ganaencasa24.com",
				status: 1,
				image:
					"https://www.ganaencasa24.com/cms/img/banners/1084/416x228.mp4",
				order: 0,
				date_start: null,
				date_end: null,
				created_at: new Date("2024-03-27T07:21:35.780Z"),
				updated_at: new Date("2024-03-27T07:21:35.780Z"),
			},
			{
				id: 2,
				url: "",
				status: 1,
				image:
					"https://www.ganaencasa24.com/cms/img/banners/747/sliderweb-tiendarecomp-mobile-mar.webp",
				order: 1,
				date_start: null,
				date_end: null,
				created_at: new Date("2024-03-27T07:21:35.780Z"),
				updated_at: new Date("2024-03-27T07:21:35.780Z"),
			},
			{
				id: 3,
				url: "https://www.ganaencasa24.com",
				status: 1,
				image:
					"https://www.ganaencasa24.com/cms/img/banners/677/416x228-casino-envivo.webp",
				order: 2,
				date_start: null,
				date_end: null,
				created_at: new Date("2024-03-27T07:21:35.780Z"),
				updated_at: new Date("2024-03-27T07:21:35.780Z"),
			},
			{
				id: 4,
				url: "",
				status: 1,
				image:
					"https://www.ganaencasa24.com/cms/img/banners/695/sliderweb-eFutbol-mobile-mar.webp",
				order: 3,
				date_start: null,
				date_end: null,
				created_at: new Date("2024-03-27T07:21:35.780Z"),
				updated_at: new Date("2024-03-27T07:21:35.780Z"),
			},
		],
		skipDuplicates: true,
	});

	console.log("Seed completado.");
}

main()
	.catch((error) => {
		console.error("Error en seed:", error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
