"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Feedback = () => {
	return (
		<>
			<div className="health-coaching-feedback-area">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="health-coaching-feedback-image">
								<Image
									src="/images/woman.jpg"
									width={1269}
									height={782}
									alt="image"
								/>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="health-coaching-inner">
								<h2 className="playfair-display-font">
									More Than 200,000 People Agree That We are
									Different
								</h2>

								<Swiper
									slidesPerView={1}
									pagination={{
										clickable: true,
									}}
									autoplay={{
										delay: 6500,
										disableOnInteraction: true,
										pauseOnMouseEnter: true,
									}}
									modules={[Pagination, Autoplay]}
									className="feedback-slides"
								>
									<SwiperSlide>
										<div className="feedback-quote">
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed
												do eiusmod tempor incididunt ut
												labore et dolore magna aliqua.
												Quis ipsum suspendisse ultrices
												gravida. Risus commodo viverra
												maecenas accumsan lacus vel
												facilisis.
											</p>

											<div className="client-info">
												<div className="d-flex justify-content-center align-items-center">
													<Image
														src="/images/user1.jpg"
														width={300}
														height={300}
														alt="image"
													/>
													<div className="title">
														<h3>John Smith</h3>
														<span>
															Python Developer
														</span>
													</div>
												</div>
											</div>

											<div className="object1">
												<Image
													src="/images/object1.png"
													width={94}
													height={69}
													alt="image"
												/>
											</div>
											<div className="object2">
												<Image
													src="/images/object2.png"
													width={142}
													height={61}
													alt="image"
												/>
											</div>
											<div className="object3">
												<Image
													src="/images/object3.png"
													width={122}
													height={101}
													alt="image"
												/>
											</div>
											<div className="object4">
												<Image
													src="/images/object4.png"
													width={48}
													height={149}
													alt="image"
												/>
											</div>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="feedback-quote">
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed
												do eiusmod tempor incididunt ut
												labore et dolore magna aliqua.
												Quis ipsum suspendisse ultrices
												gravida. Risus commodo viverra
												maecenas accumsan lacus vel
												facilisis.
											</p>

											<div className="client-info">
												<div className="d-flex justify-content-center align-items-center">
													<Image
														src="/images/user1.jpg"
														width={300}
														height={300}
														alt="image"
													/>
													<div className="title">
														<h3>John Smith</h3>
														<span>
															Python Developer
														</span>
													</div>
												</div>
											</div>

											<div className="object1">
												<Image
													src="/images/object1.png"
													width={94}
													height={69}
													alt="image"
												/>
											</div>
											<div className="object2">
												<Image
													src="/images/object2.png"
													width={142}
													height={61}
													alt="image"
												/>
											</div>
											<div className="object3">
												<Image
													src="/images/object3.png"
													width={122}
													height={101}
													alt="image"
												/>
											</div>
											<div className="object4">
												<Image
													src="/images/object4.png"
													width={48}
													height={149}
													alt="image"
												/>
											</div>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="feedback-quote">
											<p>
												Lorem ipsum dolor sit amet,
												consectetur adipiscing elit, sed
												do eiusmod tempor incididunt ut
												labore et dolore magna aliqua.
												Quis ipsum suspendisse ultrices
												gravida. Risus commodo viverra
												maecenas accumsan lacus vel
												facilisis.
											</p>

											<div className="client-info">
												<div className="d-flex justify-content-center align-items-center">
													<Image
														src="/images/user1.jpg"
														width={300}
														height={300}
														alt="image"
													/>
													<div className="title">
														<h3>John Smith</h3>
														<span>
															Python Developer
														</span>
													</div>
												</div>
											</div>

											<div className="object1">
												<Image
													src="/images/object1.png"
													width={94}
													height={69}
													alt="image"
												/>
											</div>
											<div className="object2">
												<Image
													src="/images/object2.png"
													width={142}
													height={61}
													alt="image"
												/>
											</div>
											<div className="object3">
												<Image
													src="/images/object3.png"
													width={122}
													height={101}
													alt="image"
												/>
											</div>
											<div className="object4">
												<Image
													src="/images/object4.png"
													width={48}
													height={149}
													alt="image"
												/>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Feedback;
