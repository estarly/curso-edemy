"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const Instructor = () => {
	return (
		<>
			<div className="trainer-area pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Instructor</span>
						<h2>TEAM OF EXPERT COACHES</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>
				</div>

				<div className="container-fluid">
					<Swiper
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							576: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
							1200: {
								slidesPerView: 4,
							},
							1550: {
								slidesPerView: 5,
							},
						}}
						modules={[Pagination]}
						className="trainer-slides"
					>
						<SwiperSlide>
							<div className="single-trainer-box">
								<Image
									src="/images/trainer/trainer-img1.jpg"
									width={650}
									height={650}
									alt="image"
								/>

								<span className="designation">
									AERIAL EXPERT
								</span>

								<div className="content">
									<h3>ALYSA MAYA</h3>

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
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-trainer-box">
								<Image
									src="/images/trainer/trainer-img2.jpg"
									width={650}
									height={650}
									alt="image"
								/>

								<span className="designation">
									BARRE EXPERT
								</span>

								<div className="content">
									<h3>SARAH TAYLOR</h3>

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
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-trainer-box">
								<Image
									src="/images/trainer/trainer-img3.jpg"
									width={650}
									height={650}
									alt="image"
								/>

								<span className="designation">
									BOOTCAMP EXPERT
								</span>

								<div className="content">
									<h3>JAMES ANDY</h3>

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
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-trainer-box">
								<Image
									src="/images/trainer/trainer-img4.jpg"
									width={650}
									height={650}
									alt="image"
								/>

								<span className="designation">
									CROSSFIT EXPERT
								</span>

								<div className="content">
									<h3>LINA LUCY</h3>

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
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-trainer-box">
								<Image
									src="/images/trainer/trainer-img5.jpg"
									width={650}
									height={650}
									alt="image"
								/>

								<span className="designation">GYM EXPERT</span>

								<div className="content">
									<h3>ALINA STIVE</h3>

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
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Instructor;
