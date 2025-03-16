import React from "react";
import { getCourseById } from "@/actions/getCourseById";
import Header from "../../Header";
import DeleteButton from "../videos/DeleteButton";
import CourseAsset from "@/components/Instructor/CourseAsset";
import DownloadButton from "./DownloadButton";

const Page = async ({ params }) => {
	const { course, assets } = await getCourseById(params);

	console.log(assets);
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Course: {course[0].title}</h2>

					<Header />

					<div className="create-course-form">
						<CourseAsset course={course} params={params} />
						<hr />
						<div className="row">
							{assets.map((asst) => (
								<>
									<div className="col-md-3">
										<div className="card">
											<i
												className="bx bxs-file"
												style={{
													fontSize: "100px",
													textAlign: "center",
												}}
											></i>

											<div className="card-body">
												<h6 className="card-title d-flex justify-content-center align-items-center">
													{asst.title}
												</h6>
												<div className="d-flex justify-content-center align-items-center">
													<DownloadButton
														file_url={asst.file_url}
													/>
													<span
														style={{
															margin: "0 8px",
														}}
													></span>
													<DeleteButton
														videoId={asst.id}
													/>
												</div>
											</div>
										</div>
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page;
