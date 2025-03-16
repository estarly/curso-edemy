import React from "react";
import Link from "next/link";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { pendingCourses } from "@/actions/pendingCourses";
import ApproveNowBtn from "./ApproveNowBtn";
import Header from "../Header";
import { getCurrentUser } from "@/actions/getCurrentUser";

const Page = async () => {
	const { courses } = await pendingCourses();
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

								<div className="table-responsive">
									<table className="table align-middle table-hover fs-14">
										<thead>
											<tr>
												<th scope="col">Title</th>
												<th scope="col">Price</th>
												<th scope="col">Category</th>
												<th scope="col">Instructor</th>
												<th scope="col">Videos</th>
												<th scope="col">Status</th>
												<th scope="col">Action</th>
											</tr>
										</thead>
										<tbody>
											{courses.length > 0 ? (
												courses.map((course) => (
													<tr key={course.id}>
														<td>
															<Link
																href={`/course/${course.slug}/${course.id}`}
															>
																{course.title}
															</Link>
														</td>
														<td>
															$
															{
																course.regular_price
															}
														</td>
														<td>
															{course.category}
														</td>
														<td>
															{course.user.name}
														</td>
														<td>
															{course.assets
																? course.assets
																		.length
																: 0}
														</td>
														<td>
															<div
																className="css-bbq5bh"
																style={{
																	fontSize:
																		"12px",
																}}
															>
																<button
																	type="button"
																	className="btn btn-warning btn-sm fs-12"
																	disabled=""
																>
																	{
																		course.status
																	}
																</button>
															</div>
														</td>
														<td>
															<ApproveNowBtn
																courseId={
																	course.id
																}
															/>
															{/* <div
																className="css-bbq5bh"
																style={{
																	fontSize:
																		"12px",
																}}
															>
																<button
																	type="button"
																	className="btn btn-danger btn-sm fs-12 ms-2"
																	disabled=""
																>
																	Delete
																</button>
															</div> */}
														</td>
													</tr>
												))
											) : (
												<tr>
													<td colSpan="7">
														<div className="text-center">
															Empty
														</div>
													</td>
												</tr>
											)}
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
