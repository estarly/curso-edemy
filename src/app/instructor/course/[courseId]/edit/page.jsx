import React from "react";
import Link from "next/link";
import EditCourseForm from "@/components/Instructor/EditCourseForm";
import { getCourseById } from "@/actions/getCourseById";
import Header from "../../Header";
import { getCategories } from "@/app/admin/categories/_actions";
const Page = async ({ params }) => {
	const { items: categories } = await getCategories();
	const { course } = await getCourseById(params);

	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Editar: {course[0].title}</h2>
					<Header />

					<div className="create-course-form">
						<EditCourseForm course={course} params={params} categories={categories}/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
