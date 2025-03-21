import React from "react";
import CourseCreateForm from "@/components/Instructor/CourseCreateForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Header from "../Header";

const Page = async () => {
	const currentUser = await getCurrentUser();
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Crear Curso</h2>

					<Header />

					<div className="create-course-form">
						<CourseCreateForm currentUser={currentUser} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
