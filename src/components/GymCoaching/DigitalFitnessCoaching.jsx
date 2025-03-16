"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const DigitalFitnessCoaching = () => {
	return (
		<>
			<div className="online-platform-area pt-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="online-platform-image">
								<Image
									src="/images/gym/gym-people.png"
									width={632}
									height={669}
									alt="image"
								/>
							</div>
						</div>
						<div className="col-lg-6 col-md-12">
							<div className="online-platform-content">
								<span className="sub-title">
									Start Your Online Fitness Coaching Presence!
								</span>
								<h2>DIGITAL FITNESS COACHING BUSINESS!</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
								<Link href="#" className="default-btn">
									<i className="flaticon-user"></i>Get Started
									Free<span></span>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="shape23">
					<Image
						src="/images/gym/shape1.png"
						width={60}
						height={57}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default DigitalFitnessCoaching;
