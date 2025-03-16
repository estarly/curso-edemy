"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const TopSellingCourses = () => {
	return (
		<>
			<div className="courses-area pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">
							Learn At Your Own Pace
						</span>
						<h2 className="font-weight-black">
							Top Selling Courses
						</h2>
						<p>
							Explore all of our courses and pick your suitable
							ones to enroll and start learning with us! We ensure
							that you will never regret it!
						</p>
					</div>

					<Swiper
						spaceBetween={30}
						navigation={true}
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
						modules={[Navigation, Autoplay]}
						className="courses-slides-two pt-5"
					>
						<SwiperSlide>
							<div className="single-kindergarten-courses-box">
								<div className="courses-image">
									<div className="image">
										<Image
											src="/images/courses/kindergarten-img1.jpg"
											width={850}
											height={530}
											alt="image"
										/>
									</div>
									<div className="price">
										<Image
											src="/images/price-bg.png"
											width={77}
											height={76}
											alt="image"
										/>
										<span>$39</span>
									</div>
									<Link href="#" className="link-btn"></Link>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<Image
											src="/images/user1.jpg"
											width={300}
											height={300}
											className="rounded-circle"
											alt="image"
										/>
										<span>Alex Morgan</span>
									</div>
									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											Equivalent fractions and comparing
											fractions
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-courses-box">
								<div className="courses-image">
									<div className="image">
										<Image
											src="/images/courses/kindergarten-img2.jpg"
											width={850}
											height={530}
											alt="image"
										/>
									</div>
									<div className="price">
										<Image
											src="/images/price-bg.png"
											width={77}
											height={76}
											alt="image"
										/>
										<span>$49</span>
									</div>
									<Link href="#" className="link-btn"></Link>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<Image
											src="/images/user2.jpg"
											width={300}
											height={300}
											className="rounded-circle"
											alt="image"
										/>
										<span>Sarah Taylor</span>
									</div>
									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											Arithmetic patterns and problem
											solving
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-courses-box">
								<div className="courses-image">
									<div className="image">
										<Image
											src="/images/courses/kindergarten-img3.jpg"
											width={850}
											height={530}
											alt="image"
										/>
									</div>
									<div className="price">
										<Image
											src="/images/price-bg.png"
											width={77}
											height={76}
											alt="image"
										/>
										<span>$59</span>
									</div>
									<Link href="#" className="link-btn"></Link>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<Image
											src="/images/user3.jpg"
											width={300}
											height={300}
											className="rounded-circle"
											alt="image"
										/>
										<span>David Warner</span>
									</div>
									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											The unit circle definition of sine,
											and cosine
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-courses-box">
								<div className="courses-image">
									<div className="image">
										<Image
											src="/images/courses/kindergarten-img4.jpg"
											width={850}
											height={530}
											alt="image"
										/>
									</div>
									<div className="price">
										<Image
											src="/images/price-bg.png"
											width={77}
											height={76}
											alt="image"
										/>
										<span>$69</span>
									</div>
									<Link href="#" className="link-btn"></Link>
								</div>

								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<Image
											src="/images/user4.jpg"
											width={77}
											height={300}
											className="rounded-circle"
											alt="image"
										/>
										<span>James Andy</span>
									</div>
									<h3 className="font-weight-black">
										<Link href="/single-courses-1">
											Thinking about multivariable
											functions
										</Link>
									</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipiscing elit, sed do eiusmod tempor
										incididunt ut labore et dolore.
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="kindergarten-shape11">
					<Image
						src="/images/kindergarten-shape/k-shape11.png"
						width={200}
						height={157}
						alt="image"
					/>
				</div>
				<div className="kindergarten-shape12">
					<Image
						src="/images/kindergarten-shape/k-shape12.png"
						width={110}
						height={282}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default TopSellingCourses;
