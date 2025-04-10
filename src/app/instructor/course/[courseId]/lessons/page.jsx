import React from "react";
import { getCourseById } from "@/actions/getCourseById";
import Header from "../../Header";
import CourseLessons from "@/components/Instructor/CourseLessons";
import DeleteButton from "./DeleteButton";
import EditButton from "./_components/EditButton";
import { getAssetsByCourseId } from "@/app/instructor/actions";

const Page = async ({ params }) => {
	const { courseId } = params || {};
	const { course, videos } = await getCourseById(params);
	const { items: assets } = await getAssetsByCourseId(courseId);

	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Course: {course[0].title}</h2>

					<Header />

					<div className="create-course-form">
						<CourseLessons course={course} params={params} />
						<hr />
						<div className="row row-gap-4">
							{assets.map((asset) => (
								<div className="col-md-3" key={asset.id}>
									<div className="card h-100">
										{asset.assetTypeId === 1 && asset.video_url && (
											<div className="video-container" style={{ height: "160px", overflow: "hidden" }}>
												<video width="100%" height="100%" style={{ objectFit: "cover" }} controls>
													<source
														src={asset.video_url}
														type="video/mp4"
													/>
													Tu navegador no soporta
													videos HTML.
												</video>
											</div>
										)}
										
										{asset.assetTypeId === 2 && asset.file_url && (
											<div className="file-container" style={{ height: "160px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
												<a href={asset.file_url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
													Ver archivo
												</a>
											</div>
										)}

										{asset.assetTypeId === 3 && asset.config_asset && (
											<div className="session-container" style={{ height: "160px", overflow: "auto", padding: "15px" }}>
												<div className="d-flex align-items-center mb-2">
													<strong className="me-2">Plataforma:</strong> {asset.config_asset.platform}
												</div>
												<div className="d-flex align-items-center mb-2">
													<strong className="me-2">URL:</strong>
													<a href={asset.config_asset.url} className="text-truncate">Acceder</a>
												</div>
												<div className="d-flex align-items-center mb-2">
													<strong className="me-2">ID:</strong> {asset.config_asset.meeting_id}
												</div>
											</div>
										)}

										<div className="card-body d-flex flex-column justify-content-between">
											<h6 className="card-title text-truncate">
												{asset.title}
											</h6>
											<div>
												<EditButton videoId={asset.id} />
												<DeleteButton videoId={asset.id} />
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
