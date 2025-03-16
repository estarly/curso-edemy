"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CourseCardTwo = () => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="single-courses-item-box">
				<div className="courses-image">
					<Link href="/single-courses-2" className="d-block image">
						<Image
							src="/images/courses/courses12.jpg"
							width={750}
							height={500}
							alt="image"
						/>
					</Link>

					<Link href="#" className="fav">
						<i className="flaticon-heart"></i>
					</Link>

					<div className="price shadow">$39</div>
				</div>
				<div className="courses-content">
					<h3>
						<Link href="/single-courses-2">
							Agile Crash Course: Agile Project Management
						</Link>
					</h3>
					<div className="rating">
						<i className="bx bxs-star"></i>
						<i className="bx bxs-star"></i>
						<i className="bx bxs-star"></i>
						<i className="bx bxs-star"></i>
						<i className="bx bxs-star"></i>
						<div className="rating-total">5.0 (1 rating)</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCardTwo;
