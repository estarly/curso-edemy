"use client";
import React from "react";
import Link from "next/link";

const Features = () => {
	return (
		<>
			<div className="features-area pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">
							Education for everyone
						</span>
						<h2 className="inter-font font-weight-bold">
							Online Coaching Lessons For Remote Learning​
						</h2>
						<p>
							Finding your own space and utilize better learning
							options can result in faster than the traditional
							ways. Enjoy the beauty of eLearning!
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-4 col-sm-6 col-md-6">
							<div className="single-features-box without-bg">
								<div className="icon">
									<i className="flaticon-brain-process"></i>
								</div>
								<h3 className="inter-font font-weight-bold">
									Learn the Latest Top Skills
								</h3>
								<p>
									Learning top skills can bring an
									extra-ordinary outcome in a career.
								</p>
								<Link
									href="/authentication"
									className="link-btn"
								>
									Start Now!
								</Link>
								<div className="back-icon">
									<i className="flaticon-brain-process"></i>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 col-md-6">
							<div className="single-features-box without-bg active">
								<div className="icon">
									<i className="flaticon-shield-1"></i>
								</div>
								<h3 className="inter-font font-weight-bold">
									Learn From Industry Experts
								</h3>
								<p>
									Experienced teachers can assist in learning
									faster with their best approaches!
								</p>
								<Link
									href="/authentication"
									className="link-btn"
								>
									Start Now!
								</Link>
								<div className="back-icon">
									<i className="flaticon-shield-1"></i>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-sm-6 col-md-6">
							<div className="single-features-box without-bg">
								<div className="icon">
									<i className="flaticon-world"></i>
								</div>
								<h3 className="inter-font font-weight-bold">
									Learn Anywhere in the World
								</h3>
								<p>
									We are delighted to give you options to
									enjoy learning from anywhere in the world.
								</p>
								<Link
									href="/authentication"
									className="link-btn"
								>
									Start Now!
								</Link>
								<div className="back-icon">
									<i className="flaticon-world"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
