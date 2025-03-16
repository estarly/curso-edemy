"use client";

import React from "react";
import Image from "next/image";

const FeesAndScholarshipsContent = () => {
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-12 col-xl-6">
							<div className="cw-accommodation-content">
								<h3 className="playfair-display-font">
									Fees and scholarships
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
									porta. Vivamus suscipit tortor eget felis
									porttitor volutpat. Curabitur aliquet quam
									id dui posuere blandit.
								</p>

								<ul>
									<li>Sed porttitor lectus nibh. </li>
									<li>
										Quisque velit nisi, pretium ut lacinia
										in, elementum id enim.{" "}
									</li>
									<li>Nulla porttitor accumsan tincidunt.</li>
									<li>
										Donec rutrum congue leo eget malesuada.
									</li>
								</ul>
							</div>
						</div>

						<div className="col-lg-12 col-xl-6">
							<div className="cw-scholarships">
								<Image
									src="/images/college-website/scholarships.jpg"
									width={686}
									height={550}
									alt="scholarships"
								/>

								<div className="cw-scholarships-icon d-none d-xl-block">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="189"
										height="199"
										viewBox="0 0 189 199"
										fill="none"
									>
										<path
											d="M0 139C47.5011 139 60 199 60 199C60 199 72.4989 139 120 139C72.4989 139 60 79 60 79C60 79 47.5011 139 0 139Z"
											fill="#FE4A55"
										/>
										<path
											d="M45 40C55.3784 41.8577 64.85 46.736 72.042 53.928C79.234 61.12 83.7726 70.2519 85 80C86.2274 70.2519 90.766 61.12 97.958 53.928C105.15 46.736 114.622 41.8577 125 40C114.622 38.1423 105.15 33.264 97.958 26.072C90.766 18.88 86.2274 9.74809 85 0C83.7726 9.74809 79.234 18.88 72.042 26.072C64.85 33.264 55.3784 38.1423 45 40Z"
											fill="#FE4A55"
										/>
										<path
											d="M129 113C156.93 118.49 159 143 159 143C159 143 161.07 118.49 189 113C161.07 107.51 159 83 159 83C159 83 156.93 107.51 129 113Z"
											fill="#FE4A55"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeesAndScholarshipsContent;
