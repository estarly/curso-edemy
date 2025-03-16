"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partner = () => {
	return (
		<>
			<div className="partner-area ptb-100">
				<div className="container">
					<Swiper
						spaceBetween={30}
						breakpoints={{
							0: {
								slidesPerView: 2,
							},
							576: {
								slidesPerView: 3,
							},
							768: {
								slidesPerView: 4,
							},
							1200: {
								slidesPerView: 5,
							},
						}}
						autoplay={{
							delay: 6000,
							disableOnInteraction: true,
						}}
						modules={[Autoplay]}
						className="partner-slides"
					>
						<SwiperSlide>
							<div className="partner-item">
								<Image
									src="/images/partner/img13.png"
									width={194}
									height={41}
									alt="image"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="partner-item">
								<Image
									src="/images/partner/img14.png"
									width={194}
									height={41}
									alt="image"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="partner-item">
								<Image
									src="/images/partner/img15.png"
									width={194}
									height={41}
									alt="image"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="partner-item">
								<Image
									src="/images/partner/img16.png"
									width={194}
									height={41}
									alt="image"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="partner-item">
								<Image
									src="/images/partner/img17.png"
									width={194}
									height={41}
									alt="image"
								/>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="partner-item">
								<Image
									src="/images/partner/img15.png"
									width={194}
									height={41}
									alt="image"
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
