"use client";

import React from "react";
import Image from "next/image";

const AboutUs = () => {
	return (
		<div className="about-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="about-image">
							<div className="row">
								<div className="col-lg-6 col-sm-6 col-md-6 col-6">
									<div className="image">
										<Image
											src="/images/about-img1.png"
											width={250}
											height={221}
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6 col-md-6 col-6">
									<div className="image">
										<Image
											src="/images/about-img2.png"
											width={279}
											height={233}
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6 col-md-6 col-6">
									<div className="image">
										<Image
											src="/images/about-img3.png"
											width={280}
											height={270}
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-6 col-sm-6 col-md-6 col-6">
									<div className="image">
										<Image
											src="/images/about-img4.png"
											width={270}
											height={238}
											alt="image"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="about-content">
							<span className="sub-title">DISTANCE LEARNING</span>
							<h2>
								89% of people learning for professional
								development report career benefits like getting
								a promotion, starting a new career
							</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>

							<p>
								Sed ut perspiciatis unde omnis iste natus error
								sit voluptatem accusantium doloremque
								laudantium, totam rem aperiam, eaque ipsa quae
								ab illo inventore veritatis et quasi architecto
								beatae vitae dicta sunt explicabo.
							</p>

							<ul className="features-list">
								<li>
									<span>
										<i className="flaticon-experience"></i>{" "}
										Expert Trainers
									</span>
								</li>
								<li>
									<span>
										<i className="flaticon-time-left"></i>{" "}
										Lifetime Acces
									</span>
								</li>
								<li>
									<span>
										<i className="flaticon-tutorials"></i>{" "}
										Remote Learning
									</span>
								</li>
								<li>
									<span>
										<i className="flaticon-self-growth"></i>{" "}
										Self Development
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="shape1">
				<Image
					src="/images/shape1.png"
					width={118}
					height={59}
					alt="image"
				/>
			</div>
			<div className="shape2">
				<Image
					src="/images/shape2.png"
					width={106}
					height={158}
					alt="image"
				/>
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
					width={62}
					height={62}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default AboutUs;
