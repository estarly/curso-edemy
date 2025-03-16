"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const DistanceLearningTwo = () => {
	return (
		<>
			<div className="view-all-courses-area-three bg-fff8f8">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="view-all-courses-image-style-two">
								<Image
									src="/images/strategy.png"
									width={420}
									height={625}
									alt="image"
								/>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="view-all-courses-content-style-two">
								<span className="sub-title">
									DISTANCE LEARNING
								</span>
								<h2>
									Get ahead with Learning Paths. Stay Sharp.
								</h2>
								<p>
									With The Open University you can study
									whenever and wherever you choose. We have
									students in over 128 countries, and a global
									reputation as a pioneer in the field of
									flexible learning. Our flexible teaching
									also means, if you travel often or need to
									relocate, you can continue to study wherever
									you go.
								</p>

								<Link href="/courses" className="default-btn">
									<i className="flaticon-agenda"></i>View
									Courses<span></span>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="bulb">
					<Image
						src="/images/bulb.png"
						width={350}
						height={231}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default DistanceLearningTwo;
