"use client";

import React from "react";
import FunFacts from "./FunFacts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const FeedbackSlider = () => {
	return (
		<>
			<div className="kitchen-feedback-area pb-70">
				<div className="container">
					<Swiper
						navigation={true}
						modules={[Navigation]}
						className="kitchen-feedback-slides"
					>
						<SwiperSlide>
							<div className="single-kitchen-feedback-box">
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
								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/user/user7.png"
										width={300}
										height={300}
										alt="user"
									/>
									<div className="title">
										<h3>John Smith</h3>
										<span>Python Developer</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kitchen-feedback-box">
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
								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/user/user8.png"
										width={300}
										height={300}
										alt="user"
									/>
									<div className="title">
										<h3>John Smith</h3>
										<span>Python Developer</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kitchen-feedback-box">
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
								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/user/user9.png"
										width={300}
										height={300}
										alt="user"
									/>
									<div className="title">
										<h3>John Smith</h3>
										<span>Python Developer</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				{/* FunFacts */}
				<FunFacts />
			</div>
		</>
	);
};

export default FeedbackSlider;
