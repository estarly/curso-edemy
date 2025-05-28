import CoursesContent from "@/components/Courses/CoursesContent";
import React from "react";
import { getCourses, getCategories } from "@/actions/getCourses";
import { getCurrentUser, validateDataUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";

export const metadata = {
	title: "Cursos | eDemy",
};

const page = async ({ searchParams }) => {
	const { courses } = await getCourses(searchParams);
	const categories = await getCategories();
	const currentUser = await getCurrentUser();
	const validateUser = await validateDataUser();

	// Si el usuario está autenticado y no tiene información de perfil, lo redirigimos a la página de perfil
	if(currentUser && validateUser){
		redirect("/profile/basic-information");
	}
	return (
		<>
			{/*<PageBanner
				pageTitle="Cursos sdf "
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses"
			/>*/}
			<CoursesContent courses={courses} currentUser={currentUser} categories={categories} />
		</>
	);
};

export default page;
