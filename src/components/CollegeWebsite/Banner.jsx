"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import PartnerSlider from "./PartnerSlider";

const Banner = () => {
	return (
		<>
			<div className="cw-hero-banner overflow-hidden">
				<div className="container-fluid p-0">
					<div className="row align-items-end">
						<div className="col-lg-12 col-xl-12 col-xxl-5 p-0">
							<div className="hero-img">
								<Image
									src="/images/college-website/hero-img1.jpg"
									width={1254}
									height={1425}
									alt="hero"
								/>
							</div>
						</div>

						<div className="col-lg-12 col-xl-12 col-xxl-7 p-0">
							<div className="pb-70">
								<div className="row align-items-center">
									<div className="col-lg-7">
										<div className="cw-banner-box">
											<div className="cw-banner-content">
												<h1 className="playfair-display-font">
													Start your journey with our
													college
												</h1>

												<p>
													Flexible easy to access
													learning opportunities can
													bring a significant change
													in how individuals prefer to
													learn! The eDemy can offer
													you to enjoy the beauty of
													eLearning!
												</p>

												<div>
													<Link
														href="/apply-now"
														className="default-btn cw-btn me-3"
													>
														Apply Now <span></span>
													</Link>

													<Link
														href="#"
														className="default-btn cw-btn active"
													>
														Find Out More{" "}
														<span></span>
													</Link>
												</div>
											</div>

											<div className="cw-banner-list">
												<div className="row align-items-center">
													<div className="col-sm-6 col-xxl-7">
														<ul>
															<li>
																<Link href="#">
																	<div className="d-flex align-items-center">
																		<i className="bx bx-check-double check me-1"></i>{" "}
																		About
																		our
																		college
																	</div>
																	<i className="bx bx-chevron-right chevron"></i>
																</Link>
															</li>
															<li>
																<Link href="#">
																	<div className="d-flex align-items-center">
																		<i className="bx bx-check-double check me-1"></i>{" "}
																		Accommodation
																	</div>
																	<i className="bx bx-chevron-right chevron"></i>
																</Link>
															</li>
															<li>
																<Link href="#">
																	<div className="d-flex align-items-center">
																		<i className="bx bx-check-double check me-1"></i>{" "}
																		Fees and
																		scholarships
																	</div>
																	<i className="bx bx-chevron-right chevron"></i>
																</Link>
															</li>
														</ul>
													</div>

													<div className="col-sm-6 col-xxl-5">
														<div className="cw-shape">
															<Image
																src="/images/college-website/shape1.png"
																width={160}
																height={160}
																alt="shape"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="col-lg-5">
										<div className="hero-img2">
											<Image
												src="/images/college-website/hero-img2.jpg"
												width={618}
												height={900}
												alt="hero"
											/>

											<div className="icon">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="64"
													height="64"
													viewBox="0 0 64 64"
													fill="none"
												>
													<g clipPath="url(#clip0_55_97)">
														<path
															d="M40.58 37.18C45.02 34.13 52.03 33.03 63.69 31.84C51.88 30.63 44.83 29.52 40.4 26.38C41.63 23.8 43.7 20.87 46.6 17.13C46.82 16.85 46.45 16.49 46.17 16.71C42.55 19.67 39.7 21.8 37.17 23.1C34.13 18.67 33.03 11.66 31.84 0C30.63 11.81 29.52 18.86 26.38 23.29C23.8 22.06 20.87 19.99 17.13 17.09C16.85 16.87 16.49 17.24 16.71 17.52C19.67 21.14 21.8 23.99 23.1 26.52C18.67 29.56 11.66 30.65 0 31.84C11.81 33.05 18.86 34.16 23.29 37.3C22.06 39.88 19.99 42.81 17.09 46.55C16.87 46.83 17.24 47.19 17.52 46.97C21.14 44.01 23.99 41.88 26.52 40.58C29.57 45.02 30.67 52.03 31.86 63.69C33.07 51.88 34.18 44.83 37.32 40.4C39.9 41.63 42.83 43.7 46.57 46.6C46.85 46.82 47.21 46.45 46.99 46.17C44 42.56 41.88 39.71 40.58 37.18Z"
															fill="#FE4A55"
														/>
													</g>
													<defs>
														<clipPath id="clip0_55_97">
															<rect
																width="63.69"
																height="63.69"
																fill="white"
															/>
														</clipPath>
													</defs>
												</svg>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* PartnerSlider */}
							<PartnerSlider />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
