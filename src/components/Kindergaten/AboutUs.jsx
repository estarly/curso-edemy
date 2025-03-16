"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
	return (
		<div className="about-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="kindergarten-about-image">
							<div className="main-image">
								<Image
									src="/images/kindergarten-about-img1.png"
									width={427}
									height={408}
									alt="image"
								/>
								<Image
									src="/images/kindergarten-about-img2.png"
									width={389}
									height={320}
									alt="image"
								/>
							</div>
							<div className="shape">
								<Image
									src="/images/kite1.png"
									width={195}
									height={172}
									alt="image"
								/>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="about-content">
							<span className="sub-title">About Us</span>
							<h2 className="font-weight-black">
								We are Kindergarten & Childhood is our Passion
							</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Quis ipsum suspendisse ultrices gravida. Risus
								commodo viverra maecenas accumsan lacus vel
								facilisis.
							</p>

							<ul className="about-list">
								<li>
									<span>
										<i className="bx bx-check"></i>{" "}
										Transportation
									</span>
								</li>
								<li>
									<span>
										<i className="bx bx-check"></i> Outdoor
										Games
									</span>
								</li>
								<li>
									<span>
										<i className="bx bx-check"></i>{" "}
										Nutritious Food
									</span>
								</li>
								<li>
									<span>
										<i className="bx bx-check"></i> Best
										Care
									</span>
								</li>
							</ul>

							<Link
								href="/about-5"
								className="default-btn-style-two"
							>
								<i className="flaticon-user"></i> More About Us
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="kindergarten-shape7">
				<Image
					src="/images/kindergarten-shape/k-shape7.png"
					width={115}
					height={110}
					alt="image"
				/>
			</div>
			<div className="kindergarten-shape8">
				<Image
					src="/images/kindergarten-shape/k-shape8.png"
					width={159}
					height={192}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default AboutUs;
