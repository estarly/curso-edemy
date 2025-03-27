"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const Testimonials = () => {
	return (
		<>
			<div className="testimonials-area ptb-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Testimonials</span>
						<h2>Our Learners Feedback</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<Swiper
						autoHeight={true}
						navigation={true}
						modules={[Navigation]}
						className="testimonials-slides-two"
					>
						<SwiperSlide>
							<div className="testimonials-item">
								<div className="row align-items-center">
									<div className="col-lg-8 col-md-12">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Quis ipsum
											suspendisse ultrices gravida. Risus
											commodo viverra maecenas accumsan
											lacus vel facilisis. Lorem ipsum
											dolor sit amet, consectetur
											adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et
											dolore.
										</p>
										<h3>John Smith</h3>
										<span>Python Developer</span>
									</div>

									<div className="col-lg-4 col-md-12 text-center">
										<Image
											src="/images/user/user7.png"
											width={300}
											height={300}
											alt="image"
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="testimonials-item">
								<div className="row align-items-center">
									<div className="col-lg-8 col-md-12">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Quis ipsum
											suspendisse ultrices gravida. Risus
											commodo viverra maecenas accumsan
											lacus vel facilisis. Lorem ipsum
											dolor sit amet, consectetur
											adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et
											dolore.
										</p>
										<h3>David Malan</h3>
										<span>Developer</span>
									</div>

									<div className="col-lg-4 col-md-12 text-center">
										<Image
											src="/images/user/user9.png"
											width={300}
											height={300}
											alt="image"
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="testimonials-item">
								<div className="row align-items-center">
									<div className="col-lg-8 col-md-12">
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore
											et dolore magna aliqua. Quis ipsum
											suspendisse ultrices gravida. Risus
											commodo viverra maecenas accumsan
											lacus vel facilisis. Lorem ipsum
											dolor sit amet, consectetur
											adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et
											dolore.
										</p>
										<h3>Sarah Taylor</h3>
										<span>PHP Developer</span>
									</div>

									<div className="col-lg-4 col-md-12 text-center">
										<Image
											src="/images/user/user8.png"
											width={300}
											height={300}
											alt="image"
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Testimonials;
