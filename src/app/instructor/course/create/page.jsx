import React from "react";
import CourseCreateForm from "@/components/Instructor/CourseCreateForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Header from "../Header";
import { getCategories } from "@/app/admin/categories/_actions";
const Page = async () => {
	const { items: categories } = await getCategories();
	const currentUser = await getCurrentUser();
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Crear Curso</h2>

					<Header />

					<div className="create-course-form">
						<CourseCreateForm currentUser={currentUser} categories={categories} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
