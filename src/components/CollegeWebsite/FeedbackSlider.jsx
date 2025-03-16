"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const FeedbackSlider = () => {
	return (
		<>
			<div className="cw-feedback-slider-area ptb-100 bg-ECEBF3">
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-5 col-lg-12">
							<div className="cw-feedback-title position-relative z-1">
								<h2 className="playfair-display-font">
									What students are saying about our college
								</h2>
								<p>
									Donec sollicitudin molestie malesuada. Sed
									porttitor lectus nibh. Vestibulum ante ipsum
									primis in faucibus orci luctus et ultrices
									posuere cubilia Curae; Donec velit neque,
									auctor sit amet aliquam ve.
								</p>
							</div>
						</div>

						<div className="col-xl-7 col-lg-12">
							<Swiper
								spaceBetween={24}
								pagination={{
									clickable: true,
								}}
								modules={[Pagination]}
								breakpoints={{
									0: {
										slidesPerView: 1,
									},
									768: {
										slidesPerView: 1,
									},
									992: {
										slidesPerView: 2,
									},
									1200: {
										slidesPerView: 1,
									},
									1400: {
										slidesPerView: 2,
									},
								}}
								className="cw-feedback-slider"
							>
								<SwiperSlide>
									<div className="cw-feedback-item">
										<q>
											Vestibulum ante ipsum primis in
											faucibus orci luctus et ultrices
											posuere cubilia Curae; Donec velit
											neque, auctor sit amet aliquam vel,
											ullamcorper sit amet ligula. Quisque
											velit nisi, pretium ut lacinia in,
											elementum id enim.
										</q>

										<div className="d-flex align-items-center justify-content-between mt-4">
											<div className="cw-user d-flex align-items-center">
												<Image
													src="/images/user/user1.jpg"
													width={300}
													height={300}
													alt="user"
												/>
												<div>
													<h4 className="playfair-display-font">
														Harry Jacobson
													</h4>
													<p>Student</p>
												</div>
											</div>

											<div className="icon d-none d-lg-block">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="98"
													height="65"
													viewBox="0 0 117 84"
													fill="none"
												>
													<path
														d="M8.33333 83.3333H33.3333L50 50V0H0V50H25L8.33333 83.3333ZM75 83.3333H100L116.667 50V0H66.6667V50H91.6667L75 83.3333Z"
														fill="#FAFAFC"
													/>
												</svg>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="cw-feedback-item">
										<q>
											Vestibulum ante ipsum primis in
											faucibus orci luctus et ultrices
											posuere cubilia Curae; Donec velit
											neque, auctor sit amet aliquam vel,
											ullamcorper sit amet ligula. Quisque
											velit nisi, pretium ut lacinia in,
											elementum id enim.
										</q>

										<div className="d-flex align-items-center justify-content-between mt-4">
											<div className="cw-user d-flex align-items-center">
												<Image
													src="/images/user/user2.jpg"
													width={300}
													height={300}
													alt="user"
												/>
												<div>
													<h4 className="playfair-display-font">
														Cassandra
													</h4>
													<p>Student</p>
												</div>
											</div>

											<div className="icon d-none d-lg-block">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="98"
													height="65"
													viewBox="0 0 117 84"
													fill="none"
												>
													<path
														d="M8.33333 83.3333H33.3333L50 50V0H0V50H25L8.33333 83.3333ZM75 83.3333H100L116.667 50V0H66.6667V50H91.6667L75 83.3333Z"
														fill="#FAFAFC"
													/>
												</svg>
											</div>
										</div>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="cw-feedback-item">
										<q>
											Vestibulum ante ipsum primis in
											faucibus orci luctus et ultrices
											posuere cubilia Curae; Donec velit
											neque, auctor sit amet aliquam vel,
											ullamcorper sit amet ligula. Quisque
											velit nisi, pretium ut lacinia in,
											elementum id enim.
										</q>

										<div className="d-flex align-items-center justify-content-between mt-4">
											<div className="cw-user d-flex align-items-center">
												<Image
													src="/images/user/user3.jpg"
													width={300}
													height={300}
													alt="user"
												/>
												<div>
													<h4 className="playfair-display-font">
														Harper
													</h4>
													<p>Student</p>
												</div>
											</div>

											<div className="icon d-none d-lg-block">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="98"
													height="65"
													viewBox="0 0 117 84"
													fill="none"
												>
													<path
														d="M8.33333 83.3333H33.3333L50 50V0H0V50H25L8.33333 83.3333ZM75 83.3333H100L116.667 50V0H66.6667V50H91.6667L75 83.3333Z"
														fill="#FAFAFC"
													/>
												</svg>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>

				<Image
					src="/images/college-website/shape5.png"
					width={190}
					height={380}
					alt="shape5"
					className="cw-shape5 d-none d-xxl-block"
				/>
			</div>
		</>
	);
};

export default FeedbackSlider;
