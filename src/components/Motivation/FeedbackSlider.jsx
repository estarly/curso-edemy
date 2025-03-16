"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const FeedbackSlider = () => {
	return (
		<>
			<div className="motivation-feedback-area ptb-100">
				<div className="container">
					<Swiper
						slidesPerView={1}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						className="motivation-feedback-slides"
					>
						<SwiperSlide>
							<div className="single-motivation-feedback-box">
								<div className="client-info d-flex align-items-center justify-content-center">
									<Image
										src="/images/user/user1.jpg"
										width={300}
										height={300}
										alt="user"
									/>
									<div className="title">
										<h3>John Smith</h3>
										<span>Python Developer</span>
									</div>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum suspendisse ultrices. Risus
									commodo viverra maecenas accumsan lacus vel
									facilisis. Consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et
									dolore.
								</p>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-motivation-feedback-box">
								<div className="client-info d-flex align-items-center justify-content-center">
									<Image
										src="/images/user/user2.jpg"
										width={300}
										height={300}
										alt="user"
									/>
									<div className="title">
										<h3>John Smith</h3>
										<span>Python Developer</span>
									</div>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum suspendisse ultrices. Risus
									commodo viverra maecenas accumsan lacus vel
									facilisis. Consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et
									dolore.
								</p>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-motivation-feedback-box">
								<div className="client-info d-flex align-items-center justify-content-center">
									<Image
										src="/images/user/user3.jpg"
										width={300}
										height={300}
										alt="user"
									/>
									<div className="title">
										<h3>John Smith</h3>
										<span>Python Developer</span>
									</div>
								</div>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum suspendisse ultrices. Risus
									commodo viverra maecenas accumsan lacus vel
									facilisis. Consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et
									dolore.
								</p>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default FeedbackSlider;
