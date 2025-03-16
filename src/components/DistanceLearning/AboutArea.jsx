"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutArea = () => {
	return (
		<div className="about-area-three ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 col-md-12">
						<div className="about-content-box">
							<span className="sub-title">Distance Learning</span>
							<h2>Build Your Skills Online, Anytime</h2>
							<p>
								Want to learn and earn PDUs or CEUs on your
								schedule — anytime, anywhere? Or, pick up a new
								skill quickly like, project team leadership or
								agile? Browse our most popular online courses.
							</p>
							<p>
								<strong>
									Grow your knowledge and your opportunities
									with thought leadership, training and tools.
								</strong>
							</p>

							<Link href="/courses-4" className="default-btn">
								<i className="flaticon-user"></i> View All
								Courses <span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-7 col-md-12">
						<div className="about-img">
							<div className="image">
								<Image
									src="/images/about-img7.png"
									width={579}
									height={496}
									alt="image"
								/>
								<Image
									src="/images/about-img8.png"
									width={283}
									height={219}
									alt="image"
								/>
							</div>

							<div className="shape17">
								<Image
									src="/images/shape16.png"
									width={167}
									height={114}
									alt="image"
								/>
							</div>
							<div className="shape18">
								<Image
									src="/images/shape17.png"
									width={48}
									height={48}
									alt="image"
								/>
							</div>
							<div className="shape19">
								<Image
									src="/images/shape18.png"
									width={125}
									height={21}
									alt="image"
								/>
							</div>
							<div className="shape20">
								<Image
									src="/images/shape19.png"
									width={26}
									height={26}
									alt="image"
								/>
							</div>
							<div className="shape21">
								<Image
									src="/images/shape20.png"
									width={228}
									height={223}
									alt="image"
								/>
							</div>
							<div className="shape22">
								<Image
									src="/images/shape21.png"
									width={30}
									height={30}
									alt="image"
								/>
							</div>
							<div className="shape23">
								<Image
									src="/images/shape22.png"
									width={222}
									height={210}
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="shape3">
				<Image
					src="/images/shape3.png"
					width={150}
					height={150}
					alt="image"
				/>
			</div>
			<div className="shape4">
				<Image
					src="/images/shape4.png"
					width={26}
					height={26}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default AboutArea;
