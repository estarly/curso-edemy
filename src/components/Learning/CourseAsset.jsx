"use client";

import DownloadButton from "@/app/instructor/course/[courseId]/assets/DownloadButton";
import React from "react";

const CourseAsset = ({ assets }) => {
	return (
		<>
			<div className="courses-details-desc-style-two">
				<div className="row justify-content-center">
					{assets.length ? (
						assets.map((asst) => (
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
											</div>
										</div>
									</div>
								</div>
							</>
						))
					) : (
						<div className="col-lg-12 col-md-12">
							<div className="text-center border p-3 fs-6">
								Empty
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default CourseAsset;
