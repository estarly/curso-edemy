import React from "react";
import Link from "next/link";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import Header from "./Header";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getCourses } from "./_actions";

const Page = async () => {
	const { items: courses } = await getCourses();
	console.log(courses);
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
												<th scope="col">Assets</th>
												<th scope="col">Status</th>
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
															{course.category.name}
														</td>
														<td>
															{course.user.name}
														</td>
														<td>
															{course.assets
																? course.assets
																		.length
																: 0}
																5555
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
																	className="btn btn-success btn-sm fs-12 ms-2"
																	disabled=""
																>
																	{
																		course.status
																	}
																</button>
															</div>
														</td>
													</tr>
												))
											) : (
												<tr>
													<td colSpan="7">
														<div className="text-center">
															No hay cursos
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
