"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import CourseCard from "../Shared/CourseCard";

const PopularCourses = ({ courses }) => {
	return (
		<>
			<div className="courses-area ptb-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Go At Your Own Pace</span>
						<h2>Our Popular Courses</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<Swiper
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
						}}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						modules={[Pagination, Autoplay]}
						className="courses-slides"
					>
						{courses.slice(0, 2).map((course) => (
							<SwiperSlide>
								<CourseCard
									key={course.id}
									{...course}
									grid="none"
								/>
							</SwiperSlide>
						))}
					</Swiper>

					<div className="courses-info">
						<p>
							Get the most dedicated consultation for your
							life-changing course. Earn a certification for your
							effort and passion{" "}
							<Link href="/auth">Join Free Now</Link>.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default PopularCourses;
