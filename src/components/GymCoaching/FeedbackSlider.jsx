"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const FeedbackSlider = () => {
	return (
		<>
			<div className="gym-feedback-area ptb-100">
				<div className="container-fluid">
					<Swiper
						navigation={true}
						modules={[Navigation]}
						className="gym-feedback-slides"
					>
						<SwiperSlide>
							<div className="gym-feedback-box">
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Quis ipsum ultrices gravida. Risus commodo
									viverra maecenas accumsan lacus vel
									facilisis. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore.
								</p>
								<div className="title">
									<h3>John Smith</h3>
									<span>Python Developer</span>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="gym-feedback-box">
								<p>
									Quis ipsum ultrices gravida. Risus commodo
									viverra maecenas accumsan lacus vel
									facilisis. Lorem ipsum dolor sit amet,
									consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore. Lorem
									ipsum dolor sit amet, consectetur adipiscing
									elit, sed do eiusmod tempor incididunt ut
									labore et dolore magna aliqua.
								</p>
								<div className="title">
									<h3>Sarah Taylor</h3>
									<span>Web Developer</span>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default FeedbackSlider;
