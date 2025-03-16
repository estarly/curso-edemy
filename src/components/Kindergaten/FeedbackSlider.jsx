"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const FeedbackSlider = () => {
	return (
		<>
			<div className="feedback-area bg-6dbbbd pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Testimonials</span>
						<h2 className="font-weight-black">
							Our Guardian Feedback
						</h2>
						<p>
							We always give extra care to our student's skills
							improvements and feel excited to share our latest
							research and learnings!
						</p>
					</div>
				</div>

				<div className="container-fluid">
					<Swiper
						spaceBetween={30}
						navigation={true}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							576: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
							1200: {
								slidesPerView: 4,
							},
							1550: {
								slidesPerView: 5,
							},
						}}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						modules={[Navigation, Autoplay]}
						className="feedback-slides-three"
					>
						<SwiperSlide>
							<div className="single-kindergarten-feedback-item">
								<div className="content">
									<Image
										src="/images/feedback-shape.png"
										width={355}
										height={255}
										alt="image"
									/>
									<p>
										Lorem ipsum dolor sit aadamet45,
										consectetur adipiscing elit elit3, sed
										do eiusmod tempor incididunt ut labore
										et dolore magna. Eiusmod incididunt.
									</p>
								</div>

								<div className="client-info">
									<Image
										src="/images/user1.jpg"
										width={300}
										height={300}
										alt="image"
									/>
									<h3 className="font-weight-black">
										John Smith
									</h3>
									<span>Guardian</span>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-feedback-item">
								<div className="content">
									<Image
										src="/images/feedback-shape.png"
										width={355}
										height={255}
										alt="image"
									/>
									<p>
										Lorem ipsum dolor sit aadamet45,
										consectetur adipiscing elit elit3, sed
										do eiusmod tempor incididunt ut labore
										et dolore magna. Eiusmod incididunt.
									</p>
								</div>

								<div className="client-info">
									<Image
										src="/images/user2.jpg"
										width={300}
										height={300}
										alt="image"
									/>
									<h3 className="font-weight-black">
										Sarah Taylor
									</h3>
									<span>Guardian</span>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-feedback-item">
								<div className="content">
									<Image
										src="/images/feedback-shape.png"
										width={355}
										height={255}
										alt="image"
									/>
									<p>
										Lorem ipsum dolor sit aadamet45,
										consectetur adipiscing elit elit3, sed
										do eiusmod tempor incididunt ut labore
										et dolore magna. Eiusmod incididunt.
									</p>
								</div>

								<div className="client-info">
									<Image
										src="/images/user3.jpg"
										width={300}
										height={300}
										alt="image"
									/>
									<h3 className="font-weight-black">
										David Smith
									</h3>
									<span>Guardian</span>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-feedback-item">
								<div className="content">
									<Image
										src="/images/feedback-shape.png"
										width={355}
										height={255}
										alt="image"
									/>
									<p>
										Lorem ipsum dolor sit aadamet45,
										consectetur adipiscing elit elit3, sed
										do eiusmod tempor incididunt ut labore
										et dolore magna. Eiusmod incididunt.
									</p>
								</div>

								<div className="client-info">
									<Image
										src="/images/user4.jpg"
										width={300}
										height={300}
										alt="image"
									/>
									<h3 className="font-weight-black">
										James Andy
									</h3>
									<span>Guardian</span>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-feedback-item">
								<div className="content">
									<Image
										src="/images/feedback-shape.png"
										width={355}
										height={255}
										alt="image"
									/>
									<p>
										Lorem ipsum dolor sit aadamet45,
										consectetur adipiscing elit elit3, sed
										do eiusmod tempor incididunt ut labore
										et dolore magna. Eiusmod incididunt.
									</p>
								</div>

								<div className="client-info">
									<Image
										src="/images/user5.jpg"
										width={300}
										height={300}
										alt="image"
									/>
									<h3 className="font-weight-black">
										Max Lucy
									</h3>
									<span>Guardian</span>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-feedback-item">
								<div className="content">
									<Image
										src="/images/feedback-shape.png"
										width={355}
										height={255}
										alt="image"
									/>
									<p>
										Lorem ipsum dolor sit aadamet45,
										consectetur adipiscing elit elit3, sed
										do eiusmod tempor incididunt ut labore
										et dolore magna. Eiusmod incididunt.
									</p>
								</div>

								<div className="client-info">
									<Image
										src="/images/user6.jpg"
										width={300}
										height={300}
										alt="image"
									/>
									<h3 className="font-weight-black">
										Harry Zayn
									</h3>
									<span>Guardian</span>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="kindergarten-shape13">
					<Image
						src="/images/kindergarten-shape/k-shape13.png"
						width={140}
						height={128}
						alt="image"
					/>
				</div>
				<div className="kindergarten-shape14">
					<Image
						src="/images/kindergarten-shape/k-shape14.png"
						width={218}
						height={185}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default FeedbackSlider;
