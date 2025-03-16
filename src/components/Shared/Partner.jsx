"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Partner = ({ mainClsAtts = "partner-area ptb-70" }) => {
	return (
		<div className={mainClsAtts}>
			<div className="container">
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						567: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						992: {
							slidesPerView: 5,
						},
					}}
					autoplay={{
						delay: 6500,
						disableOnInteraction: true,
						pauseOnMouseEnter: true,
					}}
					modules={[Autoplay]}
					className="partner-slides"
				>
					<SwiperSlide>
						<div className="single-partner-item">
							<Image
								src="/images/partner/partner1.png"
								width={150}
								height={60}
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<Image
								src="/images/partner/partner2.png"
								width={150}
								height={60}
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<Image
								src="/images/partner/partner3.png"
								width={150}
								height={60}
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<Image
								src="/images/partner/partner4.png"
								width={150}
								height={60}
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<Image
								src="/images/partner/partner5.png"
								width={150}
								height={60}
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<Image
								src="/images/partner/partner6.png"
								width={150}
								height={60}
								alt="image"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="single-partner-item">
							<Image
								src="/images/partner/partner4.png"
								width={150}
								height={60}
								alt="image"
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Partner;
