"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ViewAllCourses = () => {
	return (
		<div className="view-all-courses-area bg-fef8ef">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="view-all-courses-content">
							<span className="sub-title">Distance learning</span>
							<h2>
								Feel Like You Are Attending Your classNamees
								Physically!
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

							<Link href="/courses" className="default-btn">
								<i className="flaticon-agenda"></i> View Courses{" "}
								<span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="view-all-courses-image">
							<Image
								src="/images/man-with-laptop.png"
								width={1282}
								height={625}
								alt="image"
							/>
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
			<div className="shape9">
				<Image
					src="/images/shape8.svg"
					width={22}
					height={22}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default ViewAllCourses;
