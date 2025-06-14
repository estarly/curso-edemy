import React from "react";
import Link from "next/link";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import Header from "./Header";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getCourses } from "./_actions";
import { getCategoriesStatus } from "@/app/admin/categories/_actions";
import TablePagination from "./_components/TablePagination";

export const metadata = {
	title: "Admin Cursos",
	description: "Cursos de course",
};

const Page = async () => {
	
	const { items: categories } = await getCategoriesStatus();
	
	const currentUser = await getCurrentUser();
	const isAdmin = currentUser?.role === "ADMIN";
	return (
		<>
			<div className="main-content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-3 col-md-4">
							<AdminSideNav isAdmin={isAdmin} />
						</div>

						<div className="col-lg-9 col-md-8">
							<div className="main-content-box">
								<Header />
								<TablePagination categories={categories} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
