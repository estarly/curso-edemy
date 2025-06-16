INSERT INTO `user` (`id`, `name`, `designation`, `email`, `emailVerified`, `image`, `hashedPassword`, `role`, `is_instructor`, `created_at`, `updated_at`, `status`) VALUES
(1, 'Administrador', 'CEO At ImportDesk', 'admin@gmail.com', NULL, 'https://space-share.nyc3.digitaloceanspaces.com/upload_share/profile/profile-1-1747315779408', '$2b$10$LyqBjAOLKSJY.wRImyQ22uytJ785JjdR6WyyQott4i1cxXxfjIWua', 'ADMIN', 0, '2025-03-20 07:17:13.567', '2025-05-15 13:29:39.700', 1),
(2, 'Instructor Apellido', 'CEO At ImportDesk ', 'instructor@gmail.com', NULL, 'https://space-share.nyc3.digitaloceanspaces.com/upload_share/profile/profile-1-1747315779408', '$2a$12$hNf/wPKh6TCQmaWzeQH0/O8RAw8UZFauXGUG.rzNOgwGiH5JBMHja', 'INSTRUCTOR', 0, '2025-03-20 07:17:13.567', '2025-05-15 20:40:34.312', 1);

INSERT INTO `profile` (`id`, `userId`, `bio`, `gender`, `address`, `phone`, `website`, `twitter`, `facebook`, `linkedin`, `youtube`, `countryId`, `whatsapp`) VALUES
(1, 1, 'This page describes how to perform CRUD operations with your generated Prisma Client API. CRUD is an acronym that stands for.', 'masculino', 'Nurani 05, Subid Bazar, Sylhet', '+55555555555', 'https://themes.gallery/', 'https://twitter.com', 'https://facebook.com', NULL, 'https://youtube.com', 173, '+584245348207');

INSERT INTO `Module` (`id`, `title`, `description`, `logo`,`status`) VALUES
(1, '1 Módulo', 'Descripción 1', 'https://space-share.nyc3.digitaloceanspaces.com/upload_share/banners/banner-fgdfgdf-1747279294663', 1);

INSERT INTO `Category` (`id`, `name`, `status`, `logo`, `created_at`, `updated_at`) VALUES
(1, 'Educacion y Formación', 1, 'https://space-share.nyc3.digitaloceanspaces.com/upload_course/categories/category-1-1750014646754', '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(2, 'Recursos y Apoyo', 1, 'https://space-share.nyc3.digitaloceanspaces.com/upload_course/categories/category-2-1750014702326', '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(3, 'Diseño y Multimedia', 1, 'https://space-share.nyc3.digitaloceanspaces.com/upload_course/categories/category-3-1750014735725', '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652');

INSERT INTO `AssetType` (`id`, `name`, `config`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Video', '{"val": "", "type": "video"}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(2, 'Audio', '{"val": "", "type": "audio"}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(3, 'Document', '{"val": "", "type": "document"}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(4, 'Link', '{"val": "", "type": "link"}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(5, 'Youtube', '{"val": "", "type": "youtube"}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652'),
(6, 'Online', '{"val": "", "type": "online", "platform": "", "meeting_id": "", "password": "", "credits": {"host": "", "duration": "", "participants": ""}}', 1, '2024-02-12 05:55:29.652', '2024-02-12 05:55:29.652');

INSERT INTO `AssignmentType` (`id`, `name`, `description`, `config_type`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Verdadero o Falso', 'Contiene una pregunta y dos opciones: Verdadero y Falso. El usuario debe seleccionar la opción correcta.', '{"options": ["Verdadero", "Falso"], "correct_option": "Verdadero"}', 1, NOW(), NOW()),
(2, 'Selección simple', 'Contiene una pregunta y varias opciones de respuesta. El usuario debe seleccionar la opción correcta.', '{"options": ["A", "B", "C"], "correct_option": "C"}', 1, NOW(), NOW()),
(3, 'Completar', 'Contiene una pregunta y una respuesta. El usuario debe completar la respuesta.', '{"correct_answer": "Respuesta correcta"}', 1, NOW(), NOW());

INSERT INTO `Course` (`id`, `userId`, `categoryId`, `title`, `slug`, `description`, `regular_price`, `before_price`, `lessons`, `image`, `access_time`, `requirements`, `what_you_will_learn`, `who_is_this_course_for`, `status`, `is_module`, `in_home_page`, `in_home_page_set_at`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'Complete JavaScript Course 2024', 'complete-javascript-course-2024', '<p><em>Well-made course. Super in-depth, with great challenges and projects that will solidify your Javascript understanding.</em></p>', 99, 149, '21', 'https://res.cloudinary.com/dev-empty/image/upload/v1707203985/mwg8hiewqc1cfl7k3dvt.jpg', 'Lifetime', 'NULL', 'NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-06 07:21:35.780', '2024-02-06 07:21:35.780'),
(2, 2, 2, 'The Complete Flutter Development Course', 'dart-flutter-the-complete-flutter-development-course', '<p>Welcome to <strong>The Complete Flutter 2.0 Development Course</strong>.</p>', 149, 199, '20', 'https://res.cloudinary.com/dev-empty/image/upload/v1707204269/pmyhthvg0xixlirzpmbk.jpg', 'Lifetime', 'NULL', 'NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-06 07:25:23.890', '2024-02-06 07:25:23.890'),
(3, 1, 2, 'Build an E-commerce and Admin App', 'build-an-e-commerce-and-admin-app', '<p>Learn to design, build, and debug fully functional shopping applications with Flutter and Firebase.</p>', 99, 199, '20', 'https://res.cloudinary.com/dev-empty/image/upload/v1707716814/ahooraqaikeoou3tqp7a.jpg', 'Lifetime', 'NULL', 'NULL', 'NULL', 'Approved', 0,0,'2024-02-06 07:21:35.780', '2024-02-12 05:47:45.728', '2024-02-12 05:47:45.728');

INSERT INTO `Asset` (`id`, `courseId`, `assetTypeId`, `title`, `file_url`, `video_url`, `video_length`, `config_asset`, `is_preview`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Introduction', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707204118/ysmbjh5xxrddowskbrb4.mp4', NULL, '{"val": "https://space-share.nyc3.digitaloceanspaces.com/videos/video-1-1749228547566", "type": "video"}', 0, '2024-02-06 07:22:03.383', '2024-02-06 07:22:03.383'),
(2, 2, 1, 'Intro', NULL, 'https://res.cloudinary.com/dev-empty/video/upload/v1707204363/ljg3ntdjjguqxiku2xpe.mp4', NULL, '{"val": "https://space-share.nyc3.digitaloceanspaces.com/videos/video-1-1749228547566", "type": "video"}', 0, '2024-02-06 07:26:11.414', '2024-02-06 07:26:11.414');

INSERT INTO `CourseModule` (`courseId`, `moduleId`) VALUES
(1, 1);

INSERT INTO `review` (`id`, `rating`, `comment`, `userId`, `courseId`, `created_at`, `updated_at`) VALUES
(1, 5, 'I learned a lot!!!', 1, 1, '2024-03-04 07:16:57.966', '2024-03-04 07:16:57.966'),
(2, 4, 'Average :)', 2, 1, '2024-03-04 07:17:39.887', '2024-03-04 07:17:39.887');

INSERT INTO `Banner` (`id`, `name`, `description`, `url`, `status`, `image`, `order`, `created_at`, `updated_at`) VALUES
(1, 'Formación Bíblica con Propósito.',
 'Un espacio de enseñanza fiel a las Escrituras, con acceso gratuito y recursos prácticos pensados para tu crecimiento espiritual. Materiales de apoyo que conectan la Palabra con la vida diaria, en un entorno accesible, claro y lleno de propósito.', 
 '', 1, 'https://space-share.nyc3.digitaloceanspaces.com/upload_course/banners/banner-1-1750017640693', 0, '2024-03-27 07:21:35.780', '2024-03-27 07:21:35.780'),
(2, 'Creciendo Juntos en la Palabra.',
 'Una representación del crecimiento espiritual de estudiantes y líderes comprometidos con la verdad de las Escrituras. En comunidad y con propósito, descubren cómo la Palabra transforma vidas, guía decisiones y forma el carácter.', 
 '', 1, 'https://space-share.nyc3.digitaloceanspaces.com/upload_course/banners/banner-2-1750028231613', 1, '2024-03-27 07:21:35.780', '2024-03-27 07:21:35.780');
