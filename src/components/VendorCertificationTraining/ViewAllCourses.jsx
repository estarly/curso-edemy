"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const ViewAllCourses = () => {
	return (
		<div className="view-all-courses-area-two ptb-70 bg-fef8ef">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="view-all-courses-content">
							<span className="sub-title">Distance learning</span>
							<h2>Get ahead with Learning Paths. Stay Sharp.</h2>
							<p>
								With The Open University you can study whenever
								and wherever you choose. We have students in
								over 128 countries, and a global reputation as a
								pioneer in the field of flexible learning. Our
								flexible teaching also means, if you travel
								often or need to relocate, you can continue to
								study wherever you go.
							</p>

							<Link href="/courses-2" className="default-btn">
								<i className="flaticon-agenda"></i> View All
								Courses <span></span>
							</Link>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="view-all-courses-image">
							<Image
								src="/images/woman-with-book.png"
								width={554}
								height={533}
								alt="image"
							/>

							<div
								className="shape11"
								data-speed="0.06"
								data-revert="true"
							>
								<Image
									src="/images/shape10.png"
									width={23}
									height={23}
									alt="image"
								/>
							</div>
							<div
								className="shape12"
								data-speed="0.06"
								data-revert="true"
							>
								<Image
									src="/images/shape11.png"
									width={41}
									height={41}
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="shape1" data-speed="0.06" data-revert="true">
				<Image
					src="/images/shape1.png"
					width={118}
					height={59}
					alt="image"
				/>
			</div>
			<div className="shape9" data-speed="0.06" data-revert="true">
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
