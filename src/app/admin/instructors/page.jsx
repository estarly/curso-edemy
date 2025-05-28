import React from "react";
import Link from "next/link";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getInstructors } from "./_actions";
import TablePagination from "./_components/TablePagination";

const Page = async ({}) => {
	const { items: instructors } = await getInstructors();
	console.log(instructors,'instructors');
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
								<ul className="nav-style1">
									<li>
										<Link href="/admin/instructors">
											Instructores
										</Link>
									</li>
								</ul>

								<TablePagination />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
