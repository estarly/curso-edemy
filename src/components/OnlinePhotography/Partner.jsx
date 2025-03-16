"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partner = () => {
	return (
		<>
			<div className="ptb-100 bg-ffe7e7">
				<div className="container">
					<Swiper
						spaceBetween={30}
						autoplay={{
							delay: 5000,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							600: {
								slidesPerView: 3,
							},
							1000: {
								slidesPerView: 5,
								spaceBetween: 50,
							},
						}}
						modules={[Autoplay]}
						className="op-partner"
					>
						<SwiperSlide>
							<div className="op-partner-item">
								<Image
									src="/images/online-photography/partner1.png"
									width={200}
									height={100}
									alt="partner1"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="op-partner-item">
								<Image
									src="/images/online-photography/partner2.png"
									width={200}
									height={100}
									alt="partner2"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="op-partner-item">
								<Image
									src="/images/online-photography/partner3.png"
									width={200}
									height={100}
									alt="partner3"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="op-partner-item">
								<Image
									src="/images/online-photography/partner4.png"
									width={200}
									height={100}
									alt="partner4"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="op-partner-item">
								<Image
									src="/images/online-photography/partner5.png"
									width={200}
									height={100}
									alt="partner5"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="op-partner-item">
								<Image
									src="/images/online-photography/partner1.png"
									width={200}
									height={100}
									alt="partner3"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="op-partner-item">
								<Image
									src="/images/online-photography/partner2.png"
									width={200}
									height={100}
									alt="partner3"
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Partner;
