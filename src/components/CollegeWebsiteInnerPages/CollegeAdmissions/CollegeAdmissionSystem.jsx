"use client";

import React from "react";
import Image from "next/image";

const CollegeAdmissionSystem = () => {
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-xl-6">
							<div className="cw-college-admission-system">
								<Image
									src="/images/college-website/college-admission.jpg"
									width={1065}
									height={825}
									alt="scholarships"
								/>

								<div className="cw-cas-icon d-none d-xl-block">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="121"
										height="121"
										viewBox="0 0 121 121"
										fill="none"
									>
										<g clipPath="url(#clip0_242_49)">
											<path
												d="M77.095 70.6356C85.5302 64.8411 98.848 62.7513 121 60.4905C98.563 58.1917 85.1693 56.0829 76.753 50.1174C79.0898 45.2159 83.0225 39.6494 88.532 32.544C88.9499 32.0121 88.247 31.3282 87.715 31.7461C80.8377 37.3696 75.4231 41.4162 70.6166 43.886C64.8411 35.4698 62.7513 22.152 60.4905 0C58.1917 22.437 56.0829 35.8307 50.1174 44.247C45.2159 41.9102 39.6494 37.9776 32.544 32.468C32.0121 32.0501 31.3282 32.753 31.7461 33.285C37.3696 40.1623 41.4162 45.5769 43.886 50.3834C35.4698 56.1589 22.152 58.2297 0 60.4905C22.437 62.7893 35.8307 64.8981 44.247 70.8636C41.9102 75.7651 37.9776 81.3316 32.468 88.437C32.0501 88.9689 32.753 89.6529 33.285 89.2349C40.1623 83.6114 45.5769 79.5648 50.3834 77.095C56.1779 85.5302 58.2677 98.848 60.5285 121C62.8273 98.563 64.9361 85.1693 70.9016 76.753C75.8031 79.0898 81.3696 83.0225 88.475 88.532C89.0069 88.9499 89.6908 88.247 89.2729 87.715C83.5924 80.8567 79.5648 75.4421 77.095 70.6356Z"
												fill="#FE4A55"
											/>
										</g>
										<defs>
											<clipPath id="clip0_242_49">
												<rect
													width="121"
													height="121"
													fill="white"
												/>
											</clipPath>
										</defs>
									</svg>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-xl-6">
							<div className="cw-college-admission-system-content">
								<h3 className="playfair-display-font">
									College admission system 2024-2025
								</h3>

								<p>
									Vestibulum ac diam sit amet quam vehicula
									elementum sed sit amet dui. Quisque velit
									nisi, pretium ut lacinia in, elementum id
									enim. Curabitur aliquet quam id dui posuere
									blandit. Curabitur aliquet quam id dui
									posuere blandit.{" "}
								</p>

								<p>
									Proin eget tortor risus. Donec rutrum congue
									leo eget malesuada. Vivamus magna justo,
									lacinia eget consectetur sed, convallis at
									tellus. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit. Mauris blandit
									aliquet elit, eget tincidunt nibh pulvinar
									a. Cras ultricies ligula sed magna dictum
									porta.
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

								<div className="mt-4">
									<p className="m-0">Have any questions?</p>
									<h4 className="cw-number">
										<i className="bx bx-phone-call"></i>{" "}
										+1-485-456-0102
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CollegeAdmissionSystem;
