"use client";

import React from "react";
import Image from "next/image";

const CourseOverview = () => {
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-xl-6">
							<div className="cw-college-admission-system-content cw-undergraduate-studay">
								<h3 className="playfair-display-font">
									Course overview
								</h3>

								<p>
									Vestibulum ac diam sit amet quam vehicula
									elementum sed sit amet dui. Quisque velit
									nisi, pretium ut lacinia in, elementum id
									enim.
								</p>

								<p>
									Proin eget tortor risus. Donec rutrum congue
									leo eget malesuada. Vivamus magna justo,
									lacinia eget consectetur sed, convallis at
									tellus. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.{" "}
								</p>

								<ul>
									<li>
										Vivamus suscipit tortor eget felis
										porttitor volutpat.
									</li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.
									</li>
									<li>
										Curabitur aliquet quam id dui posuere
										blandit.
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-6 col-xl-6">
							<div className="cw-college-admission-system m-0">
								<Image
									src="/images/college-website/scholarships2.jpg"
									width={672}
									height={449}
									alt="scholarships"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseOverview;
