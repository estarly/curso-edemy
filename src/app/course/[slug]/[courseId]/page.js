import { getSingleCourse } from "@/actions/getSingleCourse";
import DetailsContent from "@/components/Courses/Course/DetailsContent";
import PageBanner from "@/components/Shared/PageBanner";
import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getTotalCourses } from "@/actions/getCourses";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
	const { course } = await getSingleCourse(params);
	return {
		title: course.title,
		description: course.description,
		openGraph: {
			images: [course.image],
		},
	};
}

const page = async ({ params }) => {
	const { course } = await getSingleCourse(params);
	const currentUser = await getCurrentUser();	
	const totalCourses = await getTotalCourses();
	return (
		<>
			{/*<PageBanner
				pageTitle={course.title}
				homePageUrl="/"
				homePageText="Home"
				activePageText={course.title}
			/>*/}
			<DetailsContent currentUser={currentUser} course={course} totalCourses={totalCourses} />
		</>
	);
};

export default page;
