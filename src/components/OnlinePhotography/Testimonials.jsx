"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Testimonials = () => {
	return (
		<>
			<div className="op-testimonials">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-7 p-0 bg-white">
							<div className="op-feedback-content position-relative">
								<div className="section-title">
									<span className="sub-title">
										testimonials
									</span>
									<h2>
										Elevate Your Photography Game with
										Expert Coaching
									</h2>
								</div>

								<Swiper
									spaceBetween={30}
									centeredSlides={true}
									autoplay={{
										delay: 5000,
										disableOnInteraction: true,
										pauseOnMouseEnter: true,
									}}
									pagination={{
										clickable: true,
									}}
									navigation={true}
									modules={[Autoplay, Pagination, Navigation]}
									className="op-feedback-slides"
								>
									<SwiperSlide>
										<div className="op-feedback-item">
											<div className="op-feedback-text">
												<p>
													Lorem ipsum dolor sit amet
													consectetur. Ultrices
													integer mattis at sed.
													Gravida ultricies sed purus
													volutpat sollicitudin est
													senectus ut. Auctor
													imperdiet at ut nec
													hendrerit et eget sem sed.
													Dignissim id turpis etiam
													cras commodo consectetur
													mattis. Id dolor non diam
													diam placerat ac egestas
													cursus eu.
												</p>
											</div>

											<div className="op-client-info d-flex align-items-center">
												<Image
													src="/images/user/user1.jpg"
													width={300}
													height={300}
													className="rounded-circle"
													alt="image"
												/>
												<div className="title">
													<h3>Alika Maya</h3>
													<p>
														Freelance, Photographer
													</p>
												</div>
											</div>

											<div className="op-quote-icon">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="117"
													height="117"
													viewBox="0 0 117 117"
													fill="none"
												>
													<path
														d="M53.625 87.75V48.75H44.46L54.21 29.25H26.2275L14.625 52.455V87.75M43.875 78H24.375V54.795L32.2725 39H38.415L28.665 58.5H43.875M102.375 87.75V48.75H93.21L102.96 29.25H74.9775L63.375 52.455V87.75M92.625 78H73.125V54.795L81.0225 39H87.165L77.415 58.5H92.625V78Z"
														fill="black"
														fillOpacity="0.07"
													/>
												</svg>
											</div>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="op-feedback-item">
											<div className="op-feedback-text">
												<p>
													Lorem ipsum dolor sit amet
													consectetur. Ultrices
													integer mattis at sed.
													Gravida ultricies sed purus
													volutpat sollicitudin est
													senectus ut. Auctor
													imperdiet at ut nec
													hendrerit et eget sem sed.
													Dignissim id turpis etiam
													cras commodo consectetur
													mattis. Id dolor non diam
													diam placerat ac egestas
													cursus eu.
												</p>
											</div>

											<div className="op-client-info d-flex align-items-center">
												<Image
													src="/images/user/user2.jpg"
													width={300}
													height={300}
													className="rounded-circle"
													alt="image"
												/>
												<div className="title">
													<h3>John Smith</h3>
													<p>React Developer</p>
												</div>
											</div>

											<div className="op-quote-icon">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="117"
													height="117"
													viewBox="0 0 117 117"
													fill="none"
												>
													<path
														d="M53.625 87.75V48.75H44.46L54.21 29.25H26.2275L14.625 52.455V87.75M43.875 78H24.375V54.795L32.2725 39H38.415L28.665 58.5H43.875M102.375 87.75V48.75H93.21L102.96 29.25H74.9775L63.375 52.455V87.75M92.625 78H73.125V54.795L81.0225 39H87.165L77.415 58.5H92.625V78Z"
														fill="black"
														fillOpacity="0.07"
													/>
												</svg>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>

								<Image
									src="/images/online-photography/shape5.png"
									width={250}
									height={158}
									alt="shape5"
									className="op-shape5 d-none d-xl-block"
								/>
							</div>
						</div>

						<div className="col-lg-5 p-0">
							<div className="">
								<Image
									src="/images/online-photography/testimonial-hero-img.jpg"
									width={1290}
									height={1305}
									alt="testimonial-hero-img"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonials;
