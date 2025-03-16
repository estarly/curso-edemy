"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

const PartnerSlider = () => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				autoplay={{
					delay: 5000,
					disableOnInteraction: true,
				}}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					600: {
						slidesPerView: 3,
					},
					1000: {
						slidesPerView: 4,
						spaceBetween: 50,
					},
				}}
				modules={[Autoplay, Pagination]}
				className="cw-partner"
			>
				<SwiperSlide>
					<div className="cw-partner-item">
						<Image
							src="/images/college-website/partner1.png"
							width={160}
							height={30}
							alt="partner1"
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="cw-partner-item">
						<Image
							src="/images/college-website/partner2.png"
							width={160}
							height={30}
							alt="partner2"
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="cw-partner-item">
						<Image
							src="/images/college-website/partner3.png"
							width={160}
							height={30}
							alt="partner3"
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="cw-partner-item">
						<Image
							src="/images/college-website/partner4.png"
							width={160}
							height={30}
							alt="partner4"
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="cw-partner-item">
						<Image
							src="/images/college-website/partner5.png"
							width={160}
							height={30}
							alt="partner5"
						/>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="cw-partner-item">
						<Image
							src="/images/college-website/partner3.png"
							width={160}
							height={30}
							alt="partner3"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default PartnerSlider;
