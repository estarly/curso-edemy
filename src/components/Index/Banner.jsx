"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const Banner = ({banners}) => {

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
						{banners.map((banner, index) => (
							<SwiperSlide key={index}>
								<div className="hero-banner-area" style={{paddingBottom: '50px'}}>
									<div className="gym-banner-item maxWidth-1920">
										<div className="container-fluid">
											<div className="row align-items-center">
												<div className="col-lg-6 col-md-12">
													<div className="gym-banner-content">
														<h1>{banner.name}</h1>
														<p>{banner.description}</p>

														{banner.url && (
															<Link
																href={banner.url}
																target='_blank'
																className="default-btn sm-btn"
															>
																<i className="flaticon-user"></i>
																Ver 
																<span></span>
															</Link>
														)}
													</div>
												</div>
												<div className="col-lg-6 col-md-12">
													<div className="gym-banner-image">
														<Image
														src="/images/main-banner3.png"
														
															width={1920}
															height={1080}
															alt="image"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				
			</div>
		</>
	);
};

export default Banner;
