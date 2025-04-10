import React from "react";
import { getCourseById } from "@/actions/getCourseById";
import Header from "../../Header";
import CourseLessons from "@/components/Instructor/CourseLessons";
import DeleteButton from "./DeleteButton";
import EditButton from "./_components/EditButton";

const Page = async ({ params }) => {
	const { course, videos } = await getCourseById(params);

	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Course: {course[0].title}</h2>

					<Header />

					<div className="create-course-form">
						<CourseLessons course={course} params={params} />
						<hr />
						<div className="row">
							{videos.map((vdo) => (
								<div className="col-md-3" key={vdo.id}>
									<div className="card h-100">
										<div className="video-container" style={{ height: "160px", overflow: "hidden" }}>
											<video width="100%" height="100%" style={{ objectFit: "cover" }} controls>
												<source
													src={vdo.video_url}
													type="video/mp4"
												/>
												Tu navegador no soporta
												videos HTML.
											</video>
										</div>

										<div className="card-body d-flex flex-column justify-content-between">
											<h6 className="card-title text-truncate">
												{vdo.title}
											</h6>
											<div>
												<EditButton videoId={vdo.id} />
												<DeleteButton videoId={vdo.id} />
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
