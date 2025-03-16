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
												<th scope="col">Make Admin</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Oliver Jake</td>
												<td>oliverjake@gmail.com</td>
												<td>N/A</td>
												<td>Yes</td>
												<td>
													<div className="max-300px max-height-60">
														N/A
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
															Make An Admin
														</button>
													</div>
												</td>
											</tr>

											<tr>
												<td>Student Profile</td>
												<td>student@elearniv.com</td>
												<td>0923445853</td>
												<td>Yes</td>
												<td>
													<div className="max-300px max-height-60">
														N/A
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
															Make An Admin
														</button>
													</div>
												</td>
											</tr>

											<tr>
												<td>Harry Mason</td>
												<td>harrymason@gmail.com</td>
												<td>N/A</td>
												<td>No</td>
												<td>
													<div className="max-300px max-height-60">
														N/A
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
															Make An Admin
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
