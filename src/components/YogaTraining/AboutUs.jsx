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
						<div className="about-image text-center">
							<Image
								src="/images/about-img11.png"
								width={600}
								height={369}
								alt="image"
							/>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="about-content">
							<span className="sub-title">About Us</span>
							<h2 className="playfair-display-font">
								Feel Like You Are Attending Your Class
								Physically!
							</h2>
							<p>
								eCademy training programs can bring you a super
								exciting experience of learning through online!
								You never face any negative experience while
								enjoying your classNamees virtually by sitting
								in your comfort zone. Our flexible learning
								initiatives will help you to learn better and
								quicker than the traditional ways of learning
								skills.
							</p>

							<Link href="/auth" className="default-btn mt-2">
								<i className="flaticon-user"></i> Join For Free{" "}
								<span></span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
