import CoursesContent from "@/components/Courses/CoursesContent";
import React from "react";
import { getCourses, getCategories } from "@/actions/getCourses";
import { getCurrentUser } from "@/actions/getCurrentUser";

export const metadata = {
	title: "Cursos | eDemy - React Next.js Education LMS Template",
};

const page = async ({ searchParams }) => {
	const { courses } = await getCourses(searchParams);
	const categories = await getCategories();
	const currentUser = await getCurrentUser();
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
