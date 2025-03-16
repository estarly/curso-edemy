"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const CollegeStaff = () => {
	return (
		<>
			<div className="pb-100">
				<div className="container">
					<div className="section-title">
						<h2 className="playfair-display-font">
							eDemy college staff
						</h2>
					</div>

					<Swiper
						spaceBetween={24}
						loop={false}
						autoplay={{
							delay: 5000,
							disableOnInteraction: true,
						}}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
							1200: {
								slidesPerView: 4,
							},
						}}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="cw-college-staff-slider"
					>
						<SwiperSlide>
							<div className="cw-college-staff">
								<div className="img">
									<Image
										src="/images/college-website/staff-img1.jpg"
										width={468}
										height={600}
										alt="staff"
									/>

									<div className="content">
										<h4>
											<span className="playfair-display-font">
												Email:
											</span>{" "}
											<a href="mailto:gilbert@edemy.edu">
												gilbert@edemy.edu
											</a>
										</h4>
										<h4>
											<span className="playfair-display-font">
												Tel:
											</span>{" "}
											<a href="tel:+1-485-456-0102">
												+1-485-456-0102
											</a>
										</h4>
									</div>
								</div>

								<h3 className="playfair-display-font">
									Jesus Gilbert
								</h3>
								<p>Operations associate</p>

								<div className="hover-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="64"
										height="64"
										viewBox="0 0 64 64"
										fill="none"
									>
										<g clipPath="url(#clip0_61_109)">
											<path
												d="M40.58 37.18C45.02 34.13 52.03 33.03 63.69 31.84C51.88 30.63 44.83 29.52 40.4 26.38C41.63 23.8 43.7 20.87 46.6 17.13C46.82 16.85 46.45 16.49 46.17 16.71C42.55 19.67 39.7 21.8 37.17 23.1C34.13 18.67 33.03 11.66 31.84 0C30.63 11.81 29.52 18.86 26.38 23.29C23.8 22.06 20.87 19.99 17.13 17.09C16.85 16.87 16.49 17.24 16.71 17.52C19.67 21.14 21.8 23.99 23.1 26.52C18.67 29.56 11.66 30.65 0 31.84C11.81 33.05 18.86 34.16 23.29 37.3C22.06 39.88 19.99 42.81 17.09 46.55C16.87 46.83 17.24 47.19 17.52 46.97C21.14 44.01 23.99 41.88 26.52 40.58C29.57 45.02 30.67 52.03 31.86 63.69C33.07 51.88 34.18 44.83 37.32 40.4C39.9 41.63 42.83 43.7 46.57 46.6C46.85 46.82 47.21 46.45 46.99 46.17C44 42.56 41.88 39.71 40.58 37.18Z"
												fill="#FE4A55"
											/>
										</g>
										<defs>
											<clipPath id="clip0_61_109">
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
						</SwiperSlide>

						<SwiperSlide>
							<div className="cw-college-staff">
								<div className="img">
									<Image
										src="/images/college-website/staff-img2.jpg"
										width={468}
										height={600}
										alt="staff"
									/>

									<div className="content">
										<h4>
											<span className="playfair-display-font">
												Email:
											</span>{" "}
											<a href="mailto:barbara@edemy.edu">
												barbara@edemy.edu
											</a>
										</h4>
										<h4>
											<span className="playfair-display-font">
												Tel:
											</span>{" "}
											<a href="tel:+1-485-456-0103">
												+1-485-456-0103
											</a>
										</h4>
									</div>
								</div>

								<h3 className="playfair-display-font">
									Barbara Allen
								</h3>
								<p>Special programs coordinator</p>

								<div className="hover-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="64"
										height="64"
										viewBox="0 0 64 64"
										fill="none"
									>
										<g clipPath="url(#clip0_61_109)">
											<path
												d="M40.58 37.18C45.02 34.13 52.03 33.03 63.69 31.84C51.88 30.63 44.83 29.52 40.4 26.38C41.63 23.8 43.7 20.87 46.6 17.13C46.82 16.85 46.45 16.49 46.17 16.71C42.55 19.67 39.7 21.8 37.17 23.1C34.13 18.67 33.03 11.66 31.84 0C30.63 11.81 29.52 18.86 26.38 23.29C23.8 22.06 20.87 19.99 17.13 17.09C16.85 16.87 16.49 17.24 16.71 17.52C19.67 21.14 21.8 23.99 23.1 26.52C18.67 29.56 11.66 30.65 0 31.84C11.81 33.05 18.86 34.16 23.29 37.3C22.06 39.88 19.99 42.81 17.09 46.55C16.87 46.83 17.24 47.19 17.52 46.97C21.14 44.01 23.99 41.88 26.52 40.58C29.57 45.02 30.67 52.03 31.86 63.69C33.07 51.88 34.18 44.83 37.32 40.4C39.9 41.63 42.83 43.7 46.57 46.6C46.85 46.82 47.21 46.45 46.99 46.17C44 42.56 41.88 39.71 40.58 37.18Z"
												fill="#FE4A55"
											/>
										</g>
										<defs>
											<clipPath id="clip0_61_109">
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
						</SwiperSlide>

						<SwiperSlide>
							<div className="cw-college-staff">
								<div className="img">
									<Image
										src="/images/college-website/staff-img3.jpg"
										width={468}
										height={600}
										alt="staff"
									/>

									<div className="content">
										<h4>
											<span className="playfair-display-font">
												Email:
											</span>{" "}
											<a href="mailto:charity@edemy.edu">
												charity@edemy.edu
											</a>
										</h4>
										<h4>
											<span className="playfair-display-font">
												Tel:
											</span>{" "}
											<a href="tel:+1-485-456-0104">
												+1-485-456-0104
											</a>
										</h4>
									</div>
								</div>

								<h3 className="playfair-display-font">
									Charity Parker
								</h3>
								<p>Associate director of admissions</p>

								<div className="hover-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="64"
										height="64"
										viewBox="0 0 64 64"
										fill="none"
									>
										<g clipPath="url(#clip0_61_109)">
											<path
												d="M40.58 37.18C45.02 34.13 52.03 33.03 63.69 31.84C51.88 30.63 44.83 29.52 40.4 26.38C41.63 23.8 43.7 20.87 46.6 17.13C46.82 16.85 46.45 16.49 46.17 16.71C42.55 19.67 39.7 21.8 37.17 23.1C34.13 18.67 33.03 11.66 31.84 0C30.63 11.81 29.52 18.86 26.38 23.29C23.8 22.06 20.87 19.99 17.13 17.09C16.85 16.87 16.49 17.24 16.71 17.52C19.67 21.14 21.8 23.99 23.1 26.52C18.67 29.56 11.66 30.65 0 31.84C11.81 33.05 18.86 34.16 23.29 37.3C22.06 39.88 19.99 42.81 17.09 46.55C16.87 46.83 17.24 47.19 17.52 46.97C21.14 44.01 23.99 41.88 26.52 40.58C29.57 45.02 30.67 52.03 31.86 63.69C33.07 51.88 34.18 44.83 37.32 40.4C39.9 41.63 42.83 43.7 46.57 46.6C46.85 46.82 47.21 46.45 46.99 46.17C44 42.56 41.88 39.71 40.58 37.18Z"
												fill="#FE4A55"
											/>
										</g>
										<defs>
											<clipPath id="clip0_61_109">
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
						</SwiperSlide>

						<SwiperSlide>
							<div className="cw-college-staff">
								<div className="img">
									<Image
										src="/images/college-website/staff-img4.jpg"
										width={468}
										height={600}
										alt="staff"
									/>

									<div className="content">
										<h4>
											<span className="playfair-display-font">
												Email:
											</span>{" "}
											<a href="mailto:denise@edemy.edu">
												denise@edemy.edu
											</a>
										</h4>
										<h4>
											<span className="playfair-display-font">
												Tel:
											</span>{" "}
											<a href="tel:+1-485-456-0105">
												+1-485-456-0105
											</a>
										</h4>
									</div>
								</div>

								<h3 className="playfair-display-font">
									Dean of admissions
								</h3>
								<p>Associate director of admissions</p>

								<div className="hover-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="64"
										height="64"
										viewBox="0 0 64 64"
										fill="none"
									>
										<g clipPath="url(#clip0_61_109)">
											<path
												d="M40.58 37.18C45.02 34.13 52.03 33.03 63.69 31.84C51.88 30.63 44.83 29.52 40.4 26.38C41.63 23.8 43.7 20.87 46.6 17.13C46.82 16.85 46.45 16.49 46.17 16.71C42.55 19.67 39.7 21.8 37.17 23.1C34.13 18.67 33.03 11.66 31.84 0C30.63 11.81 29.52 18.86 26.38 23.29C23.8 22.06 20.87 19.99 17.13 17.09C16.85 16.87 16.49 17.24 16.71 17.52C19.67 21.14 21.8 23.99 23.1 26.52C18.67 29.56 11.66 30.65 0 31.84C11.81 33.05 18.86 34.16 23.29 37.3C22.06 39.88 19.99 42.81 17.09 46.55C16.87 46.83 17.24 47.19 17.52 46.97C21.14 44.01 23.99 41.88 26.52 40.58C29.57 45.02 30.67 52.03 31.86 63.69C33.07 51.88 34.18 44.83 37.32 40.4C39.9 41.63 42.83 43.7 46.57 46.6C46.85 46.82 47.21 46.45 46.99 46.17C44 42.56 41.88 39.71 40.58 37.18Z"
												fill="#FE4A55"
											/>
										</g>
										<defs>
											<clipPath id="clip0_61_109">
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
						</SwiperSlide>

						<SwiperSlide>
							<div className="cw-college-staff">
								<div className="img">
									<Image
										src="/images/college-website/staff-img2.jpg"
										width={468}
										height={600}
										alt="staff"
									/>

									<div className="content">
										<h4>
											<span className="playfair-display-font">
												Email:
											</span>{" "}
											<a href="mailto:barbara@edemy.edu">
												barbara@edemy.edu
											</a>
										</h4>
										<h4>
											<span className="playfair-display-font">
												Tel:
											</span>{" "}
											<a href="tel:+1-485-456-0103">
												+1-485-456-0103
											</a>
										</h4>
									</div>
								</div>

								<h3 className="playfair-display-font">
									Barbara Allen
								</h3>
								<p>Special programs coordinator</p>

								<div className="hover-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="64"
										height="64"
										viewBox="0 0 64 64"
										fill="none"
									>
										<g clipPath="url(#clip0_61_109)">
											<path
												d="M40.58 37.18C45.02 34.13 52.03 33.03 63.69 31.84C51.88 30.63 44.83 29.52 40.4 26.38C41.63 23.8 43.7 20.87 46.6 17.13C46.82 16.85 46.45 16.49 46.17 16.71C42.55 19.67 39.7 21.8 37.17 23.1C34.13 18.67 33.03 11.66 31.84 0C30.63 11.81 29.52 18.86 26.38 23.29C23.8 22.06 20.87 19.99 17.13 17.09C16.85 16.87 16.49 17.24 16.71 17.52C19.67 21.14 21.8 23.99 23.1 26.52C18.67 29.56 11.66 30.65 0 31.84C11.81 33.05 18.86 34.16 23.29 37.3C22.06 39.88 19.99 42.81 17.09 46.55C16.87 46.83 17.24 47.19 17.52 46.97C21.14 44.01 23.99 41.88 26.52 40.58C29.57 45.02 30.67 52.03 31.86 63.69C33.07 51.88 34.18 44.83 37.32 40.4C39.9 41.63 42.83 43.7 46.57 46.6C46.85 46.82 47.21 46.45 46.99 46.17C44 42.56 41.88 39.71 40.58 37.18Z"
												fill="#FE4A55"
											/>
										</g>
										<defs>
											<clipPath id="clip0_61_109">
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
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default CollegeStaff;
