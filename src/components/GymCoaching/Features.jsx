"use client";

import React from "react";
import Image from "next/image";

const Features = () => {
	return (
		<>
			<div className="featured-area">
				<div className="container-fluid">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="single-featured-box">
								<Image
									src="/images/gym/featured-img1.jpg"
									width={750}
									height={500}
									alt="image"
								/>
								<div className="content">
									<i className="icon flaticon-computer"></i>
									<h3>GO AT YOUR OWN PACE</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipi scing elit, sed do eiusmod tempor.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="single-featured-box">
								<Image
									src="/images/gym/featured-img2.jpg"
									width={750}
									height={500}
									alt="image"
								/>
								<div className="content">
									<i className="icon flaticon-shield-1"></i>
									<h3>LEARN FROM EXPERT</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipi scing elit, sed do eiusmod tempor.
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-12">
							<div className="single-featured-box">
								<Image
									src="/images/gym/featured-img3.jpg"
									width={750}
									height={500}
									alt="image"
								/>
								<div className="content">
									<i className="icon flaticon-world"></i>
									<h3>PRACTICE FROM ANYEHERE</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipi scing elit, sed do eiusmod tempor.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
