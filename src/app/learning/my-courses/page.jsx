import Link from "next/link";
import Image from "next/image";
import { myLearning } from "@/actions/myLearning";
import Links from "../Links";
import { getCurrentUser, validateDataUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";
import CourseCard from "@/components/Shared/CourseCard";

const Page = async () => {
	const result = await myLearning();

	const enrolments = result?.enrolments || [];
	const currentUser = await getCurrentUser();
	const validateUser = await validateDataUser();

	// Si el usuario está autenticado y no tiene información de perfil, lo redirigimos a la página de perfil
	if(currentUser && validateUser){
		redirect("/profile/basic-information");
	}
	
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<Links currentUser={currentUser} />
					<div className="row">
						{enrolments.length > 0 ? (
							enrolments.map((enrl) => (

									<CourseCard
										key={enrl.id}
										{...enrl.course}
										currentUser={currentUser}
										urlDefault="/learning/course"
									/>

								/*
									<div
									className="col-lg-4 col-md-6"
									key={enrl.id}
								>
									<div className="single-courses-box style-2">
										<div className="courses-image">
											<Link
												className="d-block image"
												href={`/learning/course/${enrl.course.slug}/${enrl.course.id}`}
											>
												<Image
													src={enrl.course.image}
													alt={enrl.course.title}
													width={750}
													height={500}
												/>
											</Link>
											<div className="video_box">
												<div className="d-table">
													<div className="d-table-cell">
														<Link
															href={`/learning/course/${enrl.course.slug}/${enrl.course.id}`}
														>
															<i className="bx bx-play"></i>
														</Link>
													</div>
												</div>
											</div>
										</div>

										<div className="courses-content">
											<h3>
												<Link
													href={`/learning/course/${enrl.course.slug}/${enrl.course.id}`}
												>
													{enrl.course.title}
												</Link>
											</h3>
											<div className="course-author d-flex align-items-center">
												<span>
													{enrl.course.user.name}
												</span>
											</div>
										</div>
									</div>
								</div>
								*/
							))
						) : (
							<div className="col-lg-12 col-md-12">
								<div className="text-center fs-5 border p-3">
									No tienes cursos inscritos
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
