import React from "react";
import Link from "next/link";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getInstructors } from "./_actions";
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

								<div className="table-responsive">
									<table className="table align-middle table-hover fs-14">
										<thead>
											<tr>
												<th scope="col">Id</th>
												<th scope="col">Nombre / Descripción</th>
												<th scope="col">Correo Electrónico / Teléfono</th>
												<th scope="col">Bibliografía</th>
												<th scope="col">Make Admin</th>
											</tr>
										</thead>
										<tbody>
											{instructors.length > 0 ? (
												instructors.map((instructor) => (
													<tr key={instructor.id}>
														<td>{instructor.id}</td>
														<td>
															<img src={instructor.image || "/images/default-user.png"} alt={instructor.name || "N/A"} className="img-fluid rounded-circle" style={{width: "50px"}}/>
															{" "} {instructor.name || "N/A"}<br /> {instructor.designation || "N/A"}
														</td>
														<td>{instructor.email || "N/A"} <br /> {instructor.phone || "N/A"}</td>
														<td>
															<div className="max-300px max-height-60">
																{instructor.bio || "N/A"}
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
																	disabled={instructor.isAdmin}
																>
																	Make An Admin
																</button>
															</div>
														</td>
													</tr>
												))
											) : (
												<tr>
													<td colSpan="6">
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
