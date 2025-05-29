INSERT INTO `user` (`id`, `name`, `designation`, `email`, `emailVerified`, `image`, `hashedPassword`, `role`, `is_instructor`, `created_at`, `updated_at`, `status`) VALUES
(1, 'Administrador', 'CEO At ImportDesk', 'admin@gmail.com', NULL, 'https://space-share.nyc3.digitaloceanspaces.com/upload_share/profile/profile-1-1747315779408', '$2b$10$LyqBjAOLKSJY.wRImyQ22uytJ785JjdR6WyyQott4i1cxXxfjIWua', 'ADMIN', 0, '2025-03-20 07:17:13.567', '2025-05-15 13:29:39.700', 1),
(2, 'Instructor Apellido', 'CEO At ImportDesk ', 'instructor@gmail.com', NULL, 'https://space-share.nyc3.digitaloceanspaces.com/upload_share/profile/profile-1-1747315779408', '$2a$12$hNf/wPKh6TCQmaWzeQH0/O8RAw8UZFauXGUG.rzNOgwGiH5JBMHja', 'INSTRUCTOR', 0, '2025-03-20 07:17:13.567', '2025-05-15 20:40:34.312', 1),
(3, 'Name Studiant', 'DesignaciDesignaci', 'student@gmail.com', NULL, 'https://space-share.nyc3.digitaloceanspaces.com/upload_course/profile/profile-3-1747856010035', '$2a$12$hNf/wPKh6TCQmaWzeQH0/O8RAw8UZFauXGUG.rzNOgwGiH5JBMHja', 'USER', 0, '2025-03-20 07:17:13.567', '2025-05-21 19:33:33.488', 1);

INSERT INTO `profile` (`id`, `userId`, `bio`, `gender`, `address`, `phone`, `website`, `twitter`, `facebook`, `linkedin`, `youtube`, `countryId`, `whatsapp`) VALUES
(1, 1, 'This page describes how to perform CRUD operations with your generated Prisma Client API. CRUD is an acronym that stands for.', 'masculino', 'Nurani 05, Subid Bazar, Sylhet', '+8801646295918', 'https://themes.gallery/', 'https://twitter.com', 'https://facebook.com', NULL, 'https://youtube.com', 173, '+584245348207'),
(2, 2, 'BiographyBiographyBiography', 'masculino', 'direcio', 'eléfono', 'itio Web', 'witter', 'acebook', 'inkedin', 'https://youtube.com', 188, 'hatsApp');


INSERT INTO `Module` (`id`, `title`, `description`, `logo`,`status`) VALUES
(1, '1 Módulo', 'Descripción 1', 'https://res.cloudinary.com/dev-empty/image/upload/v1709624320/nespuvdu16rvdcdc4xnw.jpg', 1),
(2, 'Módulo 2', 'Descripción 2', 'https://res.cloudinary.com/dev-empty/image/upload/v1709624320/nespuvdu16rvdcdc4xnw.jpg', 0),
(3, '3 Módulo', 'Descripción 3', 'https://res.cloudinary.com/dev-empty/image/upload/v1709624320/nespuvdu16rvdcdc4xnw.jpg', 1);

INSERT INTO `Category` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Web Development', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(2, 'Personalizada', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(3, 'Business', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(4, 'Finance & Accounting', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(5, 'IT & Software', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(6, 'Office Productivity', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(7, 'Personal Development', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(8, 'Design', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(9, 'Marketing', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(10, 'Lifestyle', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(11, 'Photography & Video', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(12, 'Health & Fitness', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(13, 'Music', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(14, 'Teaching & Academics', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652');

INSERT INTO `AssetType` (`id`, `name`, `config`, `status`, `created_at`, `updated_at`) VALUES
(1, 'video', '{"val": "", "type": "video"}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(2, 'audio', '{"val": "", "type": "audio"}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(3, 'document', '{"val": "", "type": "document"}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(4, 'link', '{"val": "", "type": "link"}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(5, 'youtube', '{"val": "", "type": "youtube"}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(6, 'online', '{"val": "", "type": "online", "platform": "", "meeting_id": "", "password": "", "credits": {"host": "", "duration": "", "participants": ""}}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652');

INSERT INTO `AssignmentType` (`id`, `name`, `description`, `config_type`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Verdadero o Falso', 'Contiene una pregunta y dos opciones: Verdadero y Falso. El usuario debe seleccionar la opción correcta.', '{"options": ["Verdadero", "Falso"], "correct_option": "Verdadero"}', 1, NOW(), NOW()),
(2, 'Selección múltiple', 'Contiene una pregunta y varias opciones de respuesta. El usuario debe seleccionar la opción correcta.', '{"options": ["A", "B", "C"], "correct_option": "C"}', 1, NOW(), NOW()),
(3, 'Completar', 'Contiene una pregunta y una respuesta. El usuario debe completar la respuesta.', '{"correct_answer": "Respuesta correcta"}', 1, NOW(), NOW());

INSERT INTO `Course` (`id`, `userId`, `categoryId`, `title`, `slug`, `description`, `regular_price`, `before_price`, `lessons`, `image`, `access_time`, `requirements`, `what_you_will_learn`, `who_is_this_course_for`, `status`, `is_module`, `in_home_page`, `in_home_page_set_at`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'Complete JavaScript Course 2024', 'complete-javascript-course-2024', '<p><em>Well-made course. Super in-depth, with great challenges and projects that will solidify your Javascript understanding.</em></p>', 99, 149, '21', 'https://res.cloudinary.com/dev-empty/image/upload/v1707203985/mwg8hiewqc1cfl7k3dvt.jpg', 'Lifetime', 'NULL', 'NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-06 07:21:35.780', '2024-02-06 07:21:35.780'),
(2, 2, 2, 'The Complete Flutter Development Course', 'dart-flutter-the-complete-flutter-development-course', '<p>Welcome to <strong>The Complete Flutter 2.0 Development Course</strong>.</p>', 149, 199, '20', 'https://res.cloudinary.com/dev-empty/image/upload/v1707204269/pmyhthvg0xixlirzpmbk.jpg', 'Lifetime', 'NULL', 'NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-06 07:25:23.890', '2024-02-06 07:25:23.890'),
(3, 2, 2, 'Build an E-commerce and Admin App', 'build-an-e-commerce-and-admin-app', '<p>Learn to design, build, and debug fully functional shopping applications with Flutter and Firebase.</p>', 99, 199, '20', 'https://res.cloudinary.com/dev-empty/image/upload/v1707716814/ahooraqaikeoou3tqp7a.jpg', 'Lifetime', 'NULL', 'NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-12 05:47:45.728', '2024-02-12 05:47:45.728'),
(4, 2, 3, 'Introduction to Finance and Accounting', 'introduction-to-finance-and-accounting', '<p>By the end of this course, you will also know how to value companies using several different valuation methodologies.</p>', 199, 249, '15', 'https://res.cloudinary.com/dev-empty/image/upload/v1707717191/vwbqavr8tyzitktghuuo.jpg', 'Lifetime', 'NULL', 'NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-12 05:54:14.226', '2024-02-12 05:54:14.226'),
(5, 2, 4, 'An Entire MBA in 1 Course - Complete', 'an-entire-mba-in-1-course', '<p>This course will focus on business concepts that you need to know.</p>', 200, 300, '80', 'https://res.cloudinary.com/dev-empty/image/upload/v1707717581/znronmo1rj2gexfrmnmy.jpg', 'Lifetime', 'NULL', 'NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-12 06:00:56.394', '2024-02-12 06:00:56.394'),
(6, 2, 5, 'Apple Mac Basics Complete Course', 'apple-mac-basics-complete-course', '<p>The Apple Mac OS for beginners course is designed with Apple Mac OS beginners in mind.</p>', 9, 99, '20', 'https://res.cloudinary.com/dev-empty/image/upload/v1707717815/kuz7crwi6y9rsrlrms5k.jpg', 'Lifetime', 'NULL','NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-12 06:04:19.017', '2024-02-12 06:04:19.017'),
(7, 2, 6, 'Graphic Design Masterclass - Learn GREAT Design', 'graphic-design-masterclass', '<p>We also learn the basics of Adobe Photoshop, illustrator and InDesign.</p>', 99, 149, '20', 'https://res.cloudinary.com/dev-empty/image/upload/v1707718012/kfqgp5giv1iyjlqdoaz1.jpg', 'Lifetime', 'NULL', 'NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-12 06:07:37.343', '2024-02-12 06:07:37.343'),
(8, 2, 7, 'Complete Listing Optimization Training', 'complete-listing-optimization-training', '<p>Are you looking for a Google My Business (GMB) course that shows you how to rank Google My Business listings?</p>', 19, 29, '10', 'https://res.cloudinary.com/dev-empty/image/upload/v1707718314/nlvyu6eejci1nuri8olx.jpg', 'Lifetime', 'NULL', 'NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-12 06:13:22.117', '2024-02-12 06:13:22.117'),
(9, 2, 8, 'Spa Relaxation Massage Certificate Course', 'spa-relaxation-massage-certificate-course', '<p>Wouldnt you just love to know how to do this incredible form of massage?</p>', 199, 399, '20', 'https://res.cloudinary.com/dev-empty/image/upload/v1707718696/daky6dsbqz17jo9pvo9.jpg', 'Lifetime', 'NULL', 'NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-12 06:20:01.046', '2024-02-12 06:20:01.046');

INSERT INTO `Asset` (`id`, `courseId`, `assetTypeId`, `title`, `file_url`, `video_url`, `video_length`, `is_preview`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Introduction', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707204118/ysmbjh5xxrddowskbrb4.mp4', NULL, 0, '2024-02-06 07:22:03.383', '2024-02-06 07:22:03.383'),
(2, 2, 1, 'Intro', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707204363/ljg3ntdjjguqxiku2xpe.mp4', NULL, 0, '2024-02-06 07:26:11.414', '2024-02-06 07:26:11.414'),
(3, 1, 1, 'Get Image', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707204363/ljg3ntdjjguqxiku2xpe.mp4', NULL, 0, '2024-02-06 07:22:03.383', '2024-02-06 07:22:03.383'),
(4, 3, 1, 'How to install', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707716909/wf1onjz4sueikdajzjqp.mp4', NULL, 0, '2024-02-12 05:48:34.982', '2024-02-12 05:48:34.982'),
(5, 3, 1, 'Course assets', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707716937/rasvyayznzdwvbkofouf.mp4', NULL, 0, '2024-02-12 05:49:03.010', '2024-02-12 05:49:03.010'),
(6, 3, 1, 'Admin API management', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707716970/ay1ofotnqf7wglgthbey.mp4', NULL, 0, '2024-02-12 05:49:34.158', '2024-02-12 05:49:34.158'),
(8, 4, 1, 'Income Statement Analysis', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(9, 4, 1, 'Cash Flow Statement Analysis', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(10, 4, 1, 'Balance Sheet Analysis', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(11, 5, 1, 'How to Start a Successful Company', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(12, 5, 1, 'How to Legally Protect Your Company', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(13, 5, 1, 'How to Ask me Questions', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(14, 6, 1, 'Introduction', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(15, 6, 1, 'Welcome Lecture', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(16, 6, 1, 'The Desktop - Menu Bar', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(17, 7, 1, 'Graphic Design Facebook Group', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(18, 7, 1, 'The Step-by-Step Process of Becoming a Graphic Designer', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(19, 7, 1, 'The Anatomy of Typography', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(20, 7, 1, 'Detailed Review and History of Serif Fonts', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(21, 8, 1, 'Start Here: Read Me Before You Start', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(22, 8, 1, 'What To Expect + Proof This Works', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(23, 8, 1, 'How To Check If You Already Have A GMB listing', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(24, 8, 1, 'How To Set Up A GMB Listing', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(25, 8, 1, 'How To Navigate Around The GMB Dashboard', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(26, 8, 1, 'What We Are Going To Cover In This Section', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(27, 8, 1, 'GMB Ranking Factors', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(28, 8, 1, 'The 9 Elements To Optimize On A GMB Listing', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(29, 8, 1, 'How To Optimise Your GMB Listing', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(30, 8, 1, 'How To Find Out What GMB Categories Your Competitors Have Selected', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(31, 8, 1, 'How To Handle Multiple Locations For GMBs', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(32, 9, 1, 'You can join our Facebook group if you want. It is a great resource', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(33, 9, 1, 'The Table-The 4 most Important things about your Table', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(34, 9, 1, 'Creams and Oils-Whats Great and whats not', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(35, 9, 1, 'The Set-up of the table', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(36, 9, 1, 'Some things that make the massage experience even more amazing.', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(37, 9, 1, 'Its all in the Timing!', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(38, 9, 1, 'Why I Dont include these things in my massages', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707717325/naqqf7oy5awhy2xwzy8k.mp4', NULL, 0, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(39, 1, 2, 'Project catalog', 'https://res.cloudinary.com/dev-empty/image/upload/v1709709677/hl3uhhhpibsr5lhmm8xe.png', NULL, NULL, 0, '2024-03-06 07:21:20.610', '2024-03-06 07:21:20.610');


INSERT INTO `favourite` (`id`, `userId`, `courseId`, `created_at`) VALUES
(1, 3, 8, '2025-04-26 19:37:04.130');

INSERT INTO `CourseModule` (`courseId`, `moduleId`) VALUES
(3, 1),
(4, 1),
(5, 1);


INSERT INTO `review` (`id`, `rating`, `comment`, `userId`, `courseId`, `created_at`, `updated_at`) VALUES
(1, 5, 'I learned a lot!!!', 1, 1, '2024-03-04 07:16:57.966', '2024-03-04 07:16:57.966'),
(2, 4, 'Average :)', 2, 1, '2024-03-04 07:17:39.887', '2024-03-04 07:17:39.887'),
(3, 3, 'Was easy to implement and they quickly answered my additional questions!', 3, 1, '2024-03-04 07:18:02.910', '2024-03-04 07:18:02.910'),
(4, 1, 'Crazy !!', 1, 9, '2024-03-04 07:38:31.367', '2024-03-04 07:38:31.367'),
(5, 5, 'Nice', 1, 9, '2024-03-04 09:56:15.274', '2024-03-04 09:56:15.274'),
(6, 5, 'Nice course', 1, 1, '2024-03-06 07:11:19.357', '2024-03-06 07:11:19.357');


INSERT INTO `Banner` (`id`, `name`, `description`, `url`, `status`, `image`, `order`, `created_at`, `updated_at`) VALUES
(1, 'Titulo de Banner', 'loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.', 'http://localhost:3000/', 1, 'https://res.cloudinary.com/dev-empty/image/upload/v1707718696/daky6dsbqz17jo9pvo9.jpg', 0, '2024-03-27 07:21:35.780', '2024-03-27 07:21:35.780'),
(2, 'Otro Titulo de Banner', 'loren ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.', 'http://localhost:3000/', 1, 'https://res.cloudinary.com/dev-empty/image/upload/v1707718696/daky6dsbqz17jo9pvo9.jpg', 1, '2024-03-27 07:21:35.780', '2024-03-27 07:21:35.780');
