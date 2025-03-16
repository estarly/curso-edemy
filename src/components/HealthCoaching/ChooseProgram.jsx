"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ChooseProgram = () => {
	return (
		<div className="program-area ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="program-section-title">
							<h2 className="playfair-display-font">
								Choose Your Program Bellow to See How We Can
								Help
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

							<Link href="/auth" className="default-btn">
								<i className="flaticon-user"></i> Get Started
								Now <span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="program-list">
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-6">
									<div className="single-program-box">
										<div className="shape">
											<Image
												src="/images/list-shape1.png"
												width={118}
												height={89}
												alt="image"
											/>
										</div>

										<div className="icon">
											<i className="flaticon-diet"></i>
										</div>

										<h3 className="playfair-display-font">
											<Link href="/about">
												Certification Courses
											</Link>
										</h3>

										<p>
											Lorem ipsum dolor sit amet ut,
											adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et
											dolore magna aliqua.
										</p>

										<Link href="#" className="link-btn">
											Read More
										</Link>
									</div>

									<div className="single-program-box">
										<div className="shape">
											<Image
												src="/images/list-shape2.png"
												width={119}
												height={90}
												alt="image"
											/>
										</div>

										<div className="icon">
											<i className="flaticon-healthy-food"></i>
										</div>

										<h3 className="playfair-display-font">
											<Link href="/about">
												Mens's Coaching
											</Link>
										</h3>

										<p>
											Lorem ipsum dolor sit amet ut,
											adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et
											dolore magna aliqua.
										</p>

										<Link href="#" className="link-btn">
											Read More
										</Link>
									</div>
								</div>

								<div className="col-lg-6 col-md-6">
									<div className="single-program-box">
										<div className="shape">
											<Image
												src="/images/list-shape3.png"
												width={96}
												height={99}
												alt="image"
											/>
										</div>

										<div className="icon">
											<i className="flaticon-pineapple"></i>
										</div>

										<h3 className="playfair-display-font">
											<Link href="/about">
												Women's Coaching
											</Link>
										</h3>

										<p>
											Lorem ipsum dolor sit amet ut,
											adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et
											dolore magna aliqua.
										</p>

										<Link href="#" className="link-btn">
											Read More
										</Link>
									</div>
								</div>
							</div>

							<div className="program-circle-shape">
								<Image
									src="/images/circle-shape.png"
									width={493}
									height={470}
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChooseProgram;
