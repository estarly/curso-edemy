"use client";

import React from "react";
import Image from "next/image";

const DownloadCoursesSyllabus = () => {
	return (
		<div className="download-syllabus-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="download-syllabus-image">
							<Image
								src="/images/download.png"
								width={574}
								height={608}
								alt="image"
							/>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="download-syllabus-form">
							<h2 className="playfair-display-font">
								Download Courses Syllabus
							</h2>
							<p>
								Your email address will not be published.
								Required fields are marked *
							</p>

							<form>
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Your Name *"
									/>
								</div>

								<div className="form-group">
									<input
										type="email"
										className="form-control"
										placeholder="Your Email *"
									/>
								</div>

								<div className="form-group">
									<input
										type="text"
										className="form-control"
										placeholder="Your Phone *"
									/>
								</div>

								<div className="form-group">
									<select className="form-control">
										<option>200 Hour YTT Course *</option>
										<option>300 Hour YTT Course *</option>
										<option>400 Hour YTT Course *</option>
									</select>
								</div>

								<div className="form-group">
									<select className="form-control">
										<option>
											How Did You Hear About Us? *
										</option>
										<option>
											How Did You Hear About Us? *
										</option>
										<option>
											How Did You Hear About Us? *
										</option>
									</select>
								</div>

								<button className="default-btn">
									<i className="flaticon-tick"></i>Submit Now{" "}
									<span></span>
								</button>
							</form>

							<div className="syllabus-shape1">
								<Image
									src="/images/syllabus-shape1.png"
									width={100}
									height={95}
									alt="image"
								/>
							</div>
							<div className="syllabus-shape2">
								<Image
									src="/images/syllabus-shape2.png"
									width={181}
									height={190}
									alt="image"
								/>
							</div>
							<div className="syllabus-shape3">
								<Image
									src="/images/syllabus-shape3.png"
									width={182}
									height={140}
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DownloadCoursesSyllabus;
