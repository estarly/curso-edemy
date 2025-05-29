import Link from "next/link";
import Image from "next/image";
import LinksModule from "../LinksModule";
import { getCurrentUser, validateDataUser } from "@/actions/getCurrentUser";
import { byModule } from "@/actions/byModule";
import { redirect } from "next/navigation";
import CourseCard from "@/components/Shared/CourseCard";

const Page = async () => {
	const currentUser = await getCurrentUser();
	const validateUser = await validateDataUser();

	// Si el usuario está autenticado y no tiene información de perfil, lo redirigimos a la página de perfil
	if(currentUser && validateUser){
		redirect("/profile/basic-information");
	}
	const result = await byModule();
	//console.log(result?.enrolments[0], "by-module-result");

	const modules = result?.enrolments;

	const uniqueModules = {};
	const moduleArray = modules.reduce((acc, mod) => {
		const moduleId = mod.module.id;
		if (!uniqueModules[moduleId]) {
			uniqueModules[moduleId] = true;
			acc.push({
				id: moduleId,
				title: mod.module.title,
				description: mod.module.description,
				view: 0,
				courses: mod.module.courseModules.map(courseModule => ({...courseModule.course}))
			});
		}
		return acc;
	}, []);

	// Ordenar el array por título en orden ascendente
	moduleArray.sort((a, b) => a.title.localeCompare(b.title));

	// Establecer el primer elemento como view: true y los demás como view: false
	moduleArray.forEach((mod, index) => {
		mod.view = index === 0; // Solo el primer elemento tendrá view en true
	});

	console.log(moduleArray, "Módulos con cursos");

	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<LinksModule currentUser={currentUser} modules={moduleArray} />
					<div className="row">
						{moduleArray.filter(mod => mod.view).length > 0 ? (
							moduleArray.filter(mod => mod.view)[0].courses.map((mod) => (
								<>
								<CourseCard {...mod} currentUser={currentUser} showHeartButton={true}/>
							{/*}	<div
									className="col-lg-4 col-md-6"
									key={mod.id}
								>
									<div className="single-courses-box style-2">
										<div className="courses-image" data-val={JSON.stringify(mod)}>
											<Link
												className="d-block image"
												href={`/learning/course/${mod.slug}/${mod.id}`}
											>
												<Image
													alt={mod.title}
													src={mod.image}
													width={750}
													height={500}
												/>
											</Link>
											<div className="video_box">
												<div className="d-table">
													<div className="d-table-cell">
														<Link
															href={`/learning/course/${mod.slug}/${mod.id}`}
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
													href={`/learning/course/${mod.slug}/${mod.id}`}
												>
													{mod.title}
												</Link>
											</h3>
											<div className="course-author d-flex align-items-center">
												<span>
													{mod.user?.name || 'name.....'}
												</span>
											</div>
										</div>
									</div>
								</div>*/}
								</>
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
