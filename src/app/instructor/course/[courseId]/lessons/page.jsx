import React from "react";
import { getCourseById } from "@/actions/getCourseById";
import Header from "../../Header";
import ContentPage from "./_components/ContentPage";
import { getAssetsByCourseId, getAssignmentTypes } from "@/app/instructor/actions";

const Page = async ({ params }) => {
	const { courseId } = params || {};
	const { course } = await getCourseById(params);
	const { items: assets } = await getAssetsByCourseId(courseId);
	const { items: assignmentsTypes } = await getAssignmentTypes();

	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Curso: {course[0].title}</h2>

					<Header />
					<div className="create-course-form">
						<ContentPage course={course} assets={assets} params={params} assignmentsTypes={assignmentsTypes} />
					</div>
				</div>
			</div>
		
		</>
	);
};

export default Page;
