import React from "react";
import Link from "next/link";
import Image from "next/image";
import { myCourses } from "@/actions/myCourses";
import InstructorHeaderMini from "@/components/Instructor/InstructorHeaderMini";
import ProgressBarCourse from "@/components/Instructor/ProgressBarCourse";
import CategorySelect from "@/components/FormHelpers/CategorySelect";
import { getCategories } from "@/app/admin/categories/_actions";
import { Content } from "./_components/Content";
import { getCurrentUser, validateDataUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";

const Page = async ({ searchParams }) => {
	const { items: categories } = await getCategories();
	const currentUser = await getCurrentUser();
	const validateUser = await validateDataUser();
	
	if(currentUser && validateUser){
		redirect("/profile/basic-information");
	}

	return (
		<>
			<InstructorHeaderMini />
			<div className="pb-1 pt-5">
				<div className="container">
					<Content categories={categories} />									
				</div>
			</div>
		</>
	);
};

export default Page;
