"use client";

import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const CourseAdvisor = () => {
	return (
		<>
			<div className="advisor-area bg-f9f9f9 pt-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Course Advisor</span>
						<h2>Meet Our World-class Instructors</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<Swiper
						spaceBetween={30}
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
						}}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						modules={[Pagination, Autoplay]}
						className="advisor-slides-two"
					>
						<SwiperSlide>
							<div className="single-advisor-item">
								<div className="advisor-image">
									<Image
										src="/images/advisor/advisor4.jpg"
										width={590}
										height={450}
										alt="image"
									/>

									<ul className="social-link">
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-facebook"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-twitter"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-instagram"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-linkedin"></i>
											</a>
										</li>
									</ul>
								</div>

								<div className="advisor-content">
									<h3>
										<Link href="/profile">James Andy</Link>
									</h3>
									<span>Project Management Expert</span>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-advisor-item">
								<div className="advisor-image">
									<Image
										src="/images/advisor/advisor5.jpg"
										width={590}
										height={450}
										alt="image"
									/>

									<ul className="social-link">
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-facebook"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-twitter"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-instagram"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-linkedin"></i>
											</a>
										</li>
									</ul>
								</div>

								<div className="advisor-content">
									<h3>
										<Link href="/profile">
											Jassica Hische
										</Link>
									</h3>
									<span>Illustrator Expert</span>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-advisor-item">
								<div className="advisor-image">
									<Image
										src="/images/advisor/advisor6.jpg"
										width={590}
										height={450}
										alt="image"
									/>

									<ul className="social-link">
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-facebook"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-twitter"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-instagram"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-linkedin"></i>
											</a>
										</li>
									</ul>
								</div>

								<div className="advisor-content">
									<h3>
										<Link href="/profile">
											Alister Cock
										</Link>
									</h3>
									<span>QA Project Expert</span>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-advisor-item">
								<div className="advisor-image">
									<Image
										src="/images/advisor/advisor7.jpg"
										width={590}
										height={450}
										alt="image"
									/>

									<ul className="social-link">
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-facebook"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-twitter"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-instagram"></i>
											</a>
										</li>
										<li>
											<a
												href="#"
												className="d-block"
												target="_blank"
											>
												<i className="bx bxl-linkedin"></i>
											</a>
										</li>
									</ul>
								</div>

								<div className="advisor-content">
									<h3>
										<Link href="/profile">Lina Ninja</Link>
									</h3>
									<span>QA Project Expert</span>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default CourseAdvisor;
