import React from "react";
import Link from "next/link";
import EditCourseForm from "@/components/Instructor/EditCourseForm";
import { getCourseById } from "@/actions/getCourseById";
import Header from "../../Header";

const Page = async ({ params }) => {
	console.log(params, "params");
	const { course } = await getCourseById(params);

	console.log(course, "edit course");
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Edit: {course[0].title}</h2>
					<Header />

					<div className="create-course-form">
						<EditCourseForm course={course} params={params} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
