"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Banner = () => {
	return (
		<>
			<div className="gym-home-area">
				<Swiper
					pagination={{
						type: "fraction",
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="gym-banner-slides"
				>
					<SwiperSlide>
						<div className="gym-banner-item">
							<div className="container-fluid maxWidth-1920">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12">
										<div className="gym-banner-content">
											<h1>
												START YOUR FITNESS JOURNEY WITH
												EXPERT
											</h1>
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed
												do eiusmod tempor incididunt ut
												labore et dolore magna aliqua.
												Quis ipsum suspendisse.
											</p>
											<Link
												href="/authentication"
												className="default-btn"
											>
												<i className="flaticon-user"></i>
												Join For Free
												<span></span>
											</Link>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="gym-banner-image">
											<Image
												src="/images/gym/gym-banner1.png"
												width={805}
												height={996}
												alt="image"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="gym-banner-item maxWidth-1920">
							<div className="container-fluid">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12">
										<div className="gym-banner-content">
											<h1>EDEMY IS MORE THAN A PLACE</h1>
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed
												do eiusmod tempor incididunt ut
												labore et dolore magna aliqua.
												Quis ipsum suspendisse.
											</p>
											<Link
												href="/authentication"
												className="default-btn"
											>
												<i className="flaticon-user"></i>
												Join For Free
												<span></span>
											</Link>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="gym-banner-image">
											<Image
												src="/images/gym/gym-banner2.png"
												width={805}
												height={996}
												alt="image"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>

					<SwiperSlide>
						<div className="gym-banner-item maxWidth-1920">
							<div className="container-fluid">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12">
										<div className="gym-banner-content">
											<h1>
												WE STANDARD FOR HEALTH & SAFETY
											</h1>
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed
												do eiusmod tempor incididunt ut
												labore et dolore magna aliqua.
												Quis ipsum suspendisse.
											</p>
											<Link
												href="/authentication"
												className="default-btn"
											>
												<i className="flaticon-user"></i>
												Join For Free
												<span></span>
											</Link>
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<div className="gym-banner-image">
											<Image
												src="/images/gym/gym-banner3.png"
												width={805}
												height={996}
												alt="image"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default Banner;
