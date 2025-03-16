import CoursesContent from "@/components/Courses/CoursesContent";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import { getCourses } from "@/actions/getCourses";
import { getCurrentUser } from "@/actions/getCurrentUser";

export const metadata = {
	title: "Courses | eDemy - React Next.js Education LMS Template",
};

const page = async ({ searchParams }) => {
	const { courses } = await getCourses(searchParams);
	const currentUser = await getCurrentUser();
	return (
		<>
			<PageBanner
				pageTitle="Courses"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Courses"
			/>
			<CoursesContent courses={courses} currentUser={currentUser} />
		</>
	);
};

export default page;
