import React from "react";
import Link from "next/link";
import Image from "next/image";
import { myCourses } from "@/actions/myCourses";
import InstructorHeaderMini from "@/components/Instructor/InstructorHeaderMini";
import ProgressBarCourse from "@/components/Instructor/ProgressBarCourse";
import CategorySelect from "@/components/FormHelpers/CategorySelect";
import { getCategories } from "@/app/admin/categories/_actions";

const Page = async ({ searchParams }) => {
	const { items: categories } = await getCategories();
	const category = searchParams?.category ? parseInt(searchParams?.category) : undefined;
	
	const coursesResult = await myCourses(category);
	console.log(coursesResult, "coursesResult")
	const courses = coursesResult?.courses || [];

	return (
		<>
			<InstructorHeaderMini />
			<div className="pb-1 pt-5">
				<div className="container">
					
					<div className="row justify-content-center">
						<div className="d-flex justify-content-between align-items-center mb-5" style={{zIndex: 1000}}>
							<h3 className="text-left">Mis Cursos</h3>
							<div className="align-items-center">
								<CategorySelect label="Filtrar por categoria" data={categories} valueId={category} />
							</div>
						</div>
						
						{courses.length > 0 ? (
							courses.map((course) => (
								<div key={course.id} className="col-lg-4 col-md-6">
									<div className="single-courses-box">
										<div className="courses-image">
											<Link
												className="d-block image"
												href={`/course/${course.slug}/${course.id}`}
											>
												<Image
													src={course.image}
													alt="image"
													width={750}
													height={500}
												/>
											</Link>

											<div className="dropdown action-dropdown">
												<div className="icon">
													<i className="bx bx-dots-vertical-rounded"></i>
												</div>
												<ul className="dropdown-menu">
													<li>
														<Link
															className="dropdown-item"
															href={`/instructor/course/${course.id}/edit`}
														>
															{" "}
															<i className="bx bx-edit"></i>{" "}
															Editar Curso
														</Link>
													</li>
													<li>
														<Link
															className="dropdown-item"
															href={`/instructor/course/${course.id}/videos`}
														>
															<i className="bx bx-cloud-upload"></i>{" "}
															Subir Video
														</Link>
													</li>

													<li>
														<Link
															className="dropdown-item"
															href={`/instructor/course/${course.id}/assets`}
														>
															<i className="bx bxs-file-plus"></i>{" "}
															Subir Assets
														</Link>
													</li>
													{/* <li>
														<div
															className="css-bbq5bh"
															style={{
																fontSize: "12px",
															}}
														>
															<button
																type="button"
																className="dropdown-item"
																disabled=""
															>
																<i className="bx bxs-trash"></i>{" "}
																Eliminar{" "}
																<i
																	className="bx bx-info-circle"
																	style={{
																		left: "5px",
																		position:
																			"relative",
																		top: "2px",
																	}}
																></i>
															</button>
														</div>
													</li> */}
												</ul>
											</div>
											{/*

											<div className="price shadow discount-price">
												<del>${course.before_price}</del>
											</div>
											<div className="price shadow">
												${course.regular_price}
											</div>
											*/}
										</div>

										<div className="courses-content" style={{padding: 20}}>
											
											<div className="course-author d-flex align-items-center">
												<Image
													src={course.user.image}
													className="rounded-circle"
													alt="Instructor1"
													width={45}
													height={45}
												/>
												<span><strong>{course.user.name} </strong><br /> {course.user.designation}</span>
											</div>
											<h3>
												<Link
													href={`/course/${course.slug}/${course.id}`}
												>
													{course.title}
												</Link>
											</h3>

											<ul className="courses-box-footer d-flex pb-1 justify-content-between align-items-center">
												<li>
													<i className="flaticon-agenda"></i>{" "}
													{course.assets.length} Partes
												</li>
												<li>
													<i className="flaticon-people"></i>{" "}
													{course.studentCount} Estudiantes
												</li>
											</ul>
											{/*Progreso de un curso*/}
											<ProgressBarCourse completedLessons={10} totalLessons={course.lessons} />
										</div>
									</div>
								</div>
							))
						) : (
							<div className="col-12 text-center py-5">
								<div className="empty-courses">
									<i className="bx bx-info-circle fs-1 text-muted mb-3"></i>
									<h4>No tienes cursos creados</h4>
									<p className="text-muted">Comienza a crear tu primer curso ahora</p>
									<Link 
										href="/instructor/course/create" 
										className="btn default-btn mt-3"
									>
										<i className="flaticon-add"></i> Crear Curso <span></span>
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
