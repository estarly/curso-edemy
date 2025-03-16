"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import CourseCard from "../Shared/CourseCard";

const Banner = ({ courses, currentUser }) => {
	return (
		<div className="main-banner">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="main-banner-content">
							<h1>
								The World’s Leading Distance Learning Provider
							</h1>
							<p>
								Flexible easy to access learning opportunities
								can bring a significant change in how
								individuals prefer to learn! The eDemy can offer
								you to enjoy the beauty of eLearning!
							</p>

							<Link href="/auth" className="default-btn">
								<i className="flaticon-user"></i> Join For Free{" "}
								<span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="main-banner-courses-list">
							<div className="row">
								{courses.slice(0, 2).map((course) => (
									<CourseCard
										key={course.id}
										{...course}
										currentUser={currentUser}
										grid="col-lg-6 col-md-6"
									/>
								))}
								{/* <CourseCard grid="col-lg-6 col-md-6" /> */}
							</div>

							<div className="banner-shape1">
								<Image
									src="/images/banner-shape1.png"
									width={254}
									height={251}
									alt="image"
								/>
							</div>
							<div className="banner-shape2">
								<Image
									src="/images/banner-shape2.png"
									width={89}
									height={90}
									alt="image"
								/>
							</div>
							<div className="banner-shape3">
								<Image
									src="/images/banner-shape3.png"
									width={86}
									height={89}
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

export default Banner;
