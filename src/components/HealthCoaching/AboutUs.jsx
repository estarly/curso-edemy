"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
	return (
		<div className="experience-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="experience-content">
							<div className="shape">
								<Image
									src="/images/fruits.png"
									width={350}
									height={157}
									alt="image"
								/>
							</div>

							<span className="sub-title">
								Join our World Famous Yoga Teacher Training
								Course... Online!
							</span>
							<h2 className="playfair-display-font">
								This Isn't a Diet, It's a Lifestyle
							</h2>
							<p>
								eDemy training programs can bring you a super
								exciting experience of learning through online!
								You never face any negative experience while
								enjoying your classNamees virtually by sitting
								in your comfort zone. Our flexible learning
								initiatives will help you to learn better and
								quicker than the traditional ways of learning
								skills.
							</p>

							<ul className="features-list">
								<li>
									<i className="bx bx-check"></i> Vegetable
									Intake
								</li>
								<li>
									<i className="bx bx-check"></i> An Apple a
									Day
								</li>
								<li>
									<i className="bx bx-check"></i> Good
									Nutrition
								</li>
								<li>
									<i className="bx bx-check"></i> Our
									Principles
								</li>
								<li>
									<i className="bx bx-check"></i> Healthy Life
								</li>
								<li>
									<i className="bx bx-check"></i> Personalized
									Plan
								</li>
							</ul>

							<Link href="/auth" className="default-btn">
								<i className="flaticon-user"></i> Get Started
								Now <span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="experience-img">
							<Image
								src="/images/experience-img2.jpg"
								width={720}
								height={879}
								alt="image"
							/>
							<span className="title">
								<span>15</span> Years of Experience
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="experience-shape1">
				<Image
					src="/images/experience-shape1.png"
					width={220}
					height={119}
					alt="image"
				/>
			</div>
			<div className="experience-shape2">
				<Image
					src="/images/experience-shape2.png"
					width={220}
					height={272}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default AboutUs;
