"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const FeedbackSlider = () => {
	return (
		<>
			<div className="instructor-feedback-area ptb-100">
				<div className="container">
					<div className="section-title instructor-title-color">
						<span className="sub-title">GO AT YOUR OWN PACE</span>
						<h2 className="el-messiri-font">
							Learners Awesome Feedback
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit sed do eiusmod tempor incididunt ut labore et
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
							1200: {
								slidesPerView: 3,
							},
						}}
						modules={[Pagination]}
						className="instructor-feedback-slides"
					>
						<SwiperSlide>
							<div className="instructor-single-feedback-item">
								<p>
									There are many variations of passages of
									Lorem Ipsum available, but the majority have
									suffered alteration in some form, by
									injected humour, or randomised words which
									don't look even slightly believable. If you
									are going to use a passage of Lorem Ipsum,
									you need to be sure there isn't anything
									embarrassing hidden in the middle of text.
								</p>

								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/instructor-home/feedback.svg"
										width="62"
										height="62"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>John Smith</h3>
										<span>Python Developer</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="instructor-single-feedback-item">
								<p>
									There are many variations of passages of
									Lorem Ipsum available, but the majority have
									suffered alteration in some form, by
									injected humour, or randomised words which
									don't look even slightly believable. If you
									are going to use a passage of Lorem Ipsum,
									you need to be sure there isn't anything
									embarrassing hidden in the middle of text.
								</p>

								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/instructor-home/feedback.svg"
										width="62"
										height="62"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>Chris Evans</h3>
										<span>Python Expert</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="instructor-single-feedback-item">
								<p>
									There are many variations of passages of
									Lorem Ipsum available, but the majority have
									suffered alteration in some form, by
									injected humour, or randomised words which
									don't look even slightly believable. If you
									are going to use a passage of Lorem Ipsum,
									you need to be sure there isn't anything
									embarrassing hidden in the middle of text.
								</p>

								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/instructor-home/feedback.svg"
										width="62"
										height="62"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>Scarlett Johansson</h3>
										<span>Photoshop Expert</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="instructor-single-feedback-item">
								<p>
									There are many variations of passages of
									Lorem Ipsum available, but the majority have
									suffered alteration in some form, by
									injected humour, or randomised words which
									don't look even slightly believable. If you
									are going to use a passage of Lorem Ipsum,
									you need to be sure there isn't anything
									embarrassing hidden in the middle of text.
								</p>

								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/instructor-home/feedback.svg"
										width="62"
										height="62"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>John Smith</h3>
										<span>Python Developer</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="instructor-single-feedback-item">
								<p>
									There are many variations of passages of
									Lorem Ipsum available, but the majority have
									suffered alteration in some form, by
									injected humour, or randomised words which
									don't look even slightly believable. If you
									are going to use a passage of Lorem Ipsum,
									you need to be sure there isn't anything
									embarrassing hidden in the middle of text.
								</p>

								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/instructor-home/feedback.svg"
										width="62"
										height="62"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>Chris Evans</h3>
										<span>Python Expert</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="instructor-single-feedback-item">
								<p>
									There are many variations of passages of
									Lorem Ipsum available, but the majority have
									suffered alteration in some form, by
									injected humour, or randomised words which
									don't look even slightly believable. If you
									are going to use a passage of Lorem Ipsum,
									you need to be sure there isn't anything
									embarrassing hidden in the middle of text.
								</p>

								<div className="client-info d-flex align-items-center">
									<Image
										src="/images/instructor-home/feedback.svg"
										width="62"
										height="62"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>Scarlett Johansson</h3>
										<span>Photoshop Expert</span>
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

export default FeedbackSlider;
