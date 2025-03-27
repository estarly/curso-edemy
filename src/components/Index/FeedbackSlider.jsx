"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const FeedbackSlider = () => {
	return (
		<>
			<div className="feedback-area bg-fffaf3 ptb-100">
				<div className="container">
					<Swiper
						spaceBetween={20}
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
						}}
						modules={[Pagination]}
						className="feedback-slides-two"
					>
						<SwiperSlide>
							<div className="single-feedback-box">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum ultrices gravida. Risus commodo
									viverra maecenas accumsan lacus vel
									facilisis. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit, sed tempor
									incididunt ut labore et dolore.
								</p>
								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/user1.jpg"
										width={300}
										height={300}
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>John Smith</h3>
										<span>Python Developer</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-feedback-box">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum ultrices gravida. Risus commodo
									viverra maecenas accumsan lacus vel
									facilisis. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit, sed tempor
									incididunt ut labore et dolore.
								</p>
								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/user2.jpg"
										width={300}
										height={300}
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>Sarah Taylor</h3>
										<span>PHP Developer</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-feedback-box">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum ultrices gravida. Risus commodo
									viverra maecenas accumsan lacus vel
									facilisis. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit, sed tempor
									incididunt ut labore et dolore.
								</p>
								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/user1.jpg"
										width={300}
										height={300}
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>David Warner</h3>
										<span>QA Developer</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="divider2"></div>
				<div className="divider3"></div>
				<div className="shape2">
					<Image
						src="/images/shape2.png"
						width={206}
						height={258}
						alt="image"
					/>
				</div>
				<div className="shape3">
					<Image
						src="/images/shape3.png"
						width={150}
						height={150}
						alt="image"
					/>
				</div>
				<div className="shape4">
					<Image
						src="/images/shape4.png"
						width={26}
						height={26}
						alt="image"
					/>
				</div>
				<div className="shape9">
					<Image
						src="/images/shape8.svg"
						width={22}
						height={22}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default FeedbackSlider;
