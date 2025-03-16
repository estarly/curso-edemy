import React from "react";
import Link from "next/link";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Page = async ({}) => {
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
										<Link href="/admin/students/">
											Students
										</Link>
									</li>
									<li>
										<Link href="/admin/students/site-admins/">
											Admins
										</Link>
									</li>
								</ul>

								<div className="table-responsive">
									<table className="table align-middle table-hover fs-14">
										<thead>
											<tr>
												<th scope="col">Name</th>
												<th scope="col">Email</th>
												<th scope="col">Phone</th>
												<th scope="col">
													Email Confirmed
												</th>
												<th scope="col">Text</th>
												<th scope="col">Admin</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Admin User</td>
												<td>admin@elearniv.com</td>
												<td>03190290005</td>
												<td>Yes</td>
												<td>
													<div className="max-300px max-height-60">
														Admin started his career
														as a Unix and Linux
														System Engineer in 1999.
														Since that time he has
														utilized his Linux
														skills at companies such
														as Xerox, UPS,
														Hewlett-Packard, and
														Amazon.com.
														Additionally, he has
														acted as a technical
														consultant and
														independent contractor
														for small businesses and
														Fortune 500 companies.
													</div>
												</td>
												<td>
													<div
														className="css-bbq5bh"
														style={{
															fontSize: "12px",
														}}
													>
														<button
															type="button"
															className="btn btn-success btn-sm fs-12 ms-2"
															disabled=""
														>
															Remove from admin
														</button>
													</div>
												</td>
											</tr>

											<tr>
												<td colSpan="6">
													<div className="text-center">
														Empty
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
