import React from "react";
import InstructorSideNav from "@/components/Instructor/InstructorSideNav";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";
import { myAssignmentsCourse } from "./_actions";
import { Content } from "./_components/Content";

const Page = async () => {
	const currentUser = await getCurrentUser();
	const isInstructor = currentUser?.role === "INSTRUCTOR";
	const result = await myAssignmentsCourse();

	if (!currentUser || !isInstructor) {
		redirect("/");
	}

	return (
		<div className="main-content">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 col-md-4">
						<InstructorSideNav isInstructor={isInstructor} />
					</div>

					<div className="col-lg-9 col-md-8">
						<div className="main-content-box">
							<h2 className="fw-bold mb-4">Asignaciones</h2>
							<Content items={result} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
