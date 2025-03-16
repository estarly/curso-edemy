"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const FeedbackSlider = () => {
	return (
		<>
			<div className="feedback-area bg-f9f9f9 pt-70">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-12">
							<div className="coaching-feedback-image">
								<Image
									src="/images/business-coach/business-woman.jpg"
									width={660}
									height={641}
									alt="image"
								/>
							</div>
						</div>

						<div className="col-lg-8 col-md-12">
							<Swiper
								slidesPerView={1}
								pagination={{
									clickable: true,
								}}
								modules={[Pagination]}
								className="coaching-feedback-slides"
							>
								<SwiperSlide>
									<div className="single-coaching-feedback-box">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Quis ipsum
											suspendisse ultrices. Risus commodo
											viverra maecenas accumsan lacus vel
											facilisis. Consectetur adipiscing
											elit, sed do eiusmod tempor
											incididunt ut labore et dolore.
										</p>
										<div className="client-info d-flex align-items-center">
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
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="single-coaching-feedback-box">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Quis ipsum
											suspendisse ultrices. Risus commodo
											viverra maecenas accumsan lacus vel
											facilisis. Consectetur adipiscing
											elit, sed do eiusmod tempor
											incididunt ut labore et dolore.
										</p>
										<div className="client-info d-flex align-items-center">
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
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="single-coaching-feedback-box">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Quis ipsum
											suspendisse ultrices. Risus commodo
											viverra maecenas accumsan lacus vel
											facilisis. Consectetur adipiscing
											elit, sed do eiusmod tempor
											incididunt ut labore et dolore.
										</p>
										<div className="client-info d-flex align-items-center">
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
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeedbackSlider;
