import React from "react";
import InstructorHeaderMini from "@/components/Instructor/InstructorHeaderMini";
import InstructorSideNav from "@/components/Instructor/InstructorSideNav";
import { getCategories } from "@/app/admin/categories/_actions";
import { Content } from "./_components/Content";
import { getCurrentUser, validateDataUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";

const Page = async () => {
	const { items: categories } = await getCategories();
	const currentUser = await getCurrentUser();
	const validateUser = await validateDataUser();
	const isInstructor = currentUser?.role === "INSTRUCTOR";

	if (!currentUser || !isInstructor) {
		redirect("/");
	}

	if (validateUser) {
		redirect("/profile/basic-information");
	}

	return (
		<div className="main-content">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 col-md-4">
						<InstructorSideNav isInstructor={isInstructor} />
					</div>

					<div className="col-lg-9 col-md-8">
						<InstructorHeaderMini />
						<div className="pb-1 pt-5">
							<div className="container">
								<Content categories={categories} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
