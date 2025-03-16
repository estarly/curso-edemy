"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const LanguageCourses = () => {
	return (
		<div className="courses-area pt-100 pb-70 bg-f5f7fa">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Welcome to eDemy</span>
					<h2>Our Language Courses</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-language-courses-box">
							<Image
								src="/images/language-courses/language-courses1.png"
								width={270}
								height={245}
								alt="image"
							/>
							<h3>Chinese</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore.
							</p>

							<Link href="/courses" className="default-btn">
								<i className="flaticon-right"></i> View More{" "}
								<span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-language-courses-box">
							<Image
								src="/images/language-courses/language-courses2.png"
								width={270}
								height={245}
								alt="image"
							/>
							<h3>Spanish</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore.
							</p>

							<Link href="/courses" className="default-btn">
								<i className="flaticon-right"></i> View More{" "}
								<span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
						<div className="single-language-courses-box">
							<Image
								src="/images/language-courses/language-courses3.png"
								width={270}
								height={245}
								alt="image"
							/>
							<h3>Japanese</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore.
							</p>

							<Link href="/courses" className="default-btn">
								<i className="flaticon-right"></i> View More{" "}
								<span></span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LanguageCourses;
