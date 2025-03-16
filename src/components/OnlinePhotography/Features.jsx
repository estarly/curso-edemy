"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Features = () => {
	return (
		<>
			<div className="pt-100 pb-70">
				<div className="container position-relative">
					<div className="row">
						<div className="col-xl-4">
							<div className="section-title text-start">
								<span className="sub-title">
									Education for everyone
								</span>
								<h2 className="inter-font font-weight-bold">
									Affordable Online Courses & Learning
									Opportunities​
								</h2>
								<p>
									Finding your own space and utilize better
									learning options can result in faster than
									the traditional ways. Enjoy the beauty of
									eLearning!
								</p>

								<Link
									href="/authentication"
									className="op-lin-btn mt-4"
								>
									Register Now{" "}
									<i className="bx bx-chevron-right"></i>
								</Link>
							</div>
						</div>

						<div className="col-xl-8">
							<div className="row">
								<div className="col-lg-6 col-md-6">
									<div className="op-features-box">
										<div className="op-content">
											<div className="icon">
												<i className="flaticon-brain-process"></i>
											</div>
											<h3>Learn the Latest Top Skills</h3>
											<p>
												Learning top skills can bring an
												extra-ordinary outcome in a
												career.
											</p>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-md-6">
									<div className="op-features-box">
										<div className="op-content">
											<div className="icon">
												<i className="flaticon-computer"></i>
											</div>
											<h3>Learn in Your Own Pace</h3>
											<p>
												Learning top skills can bring an
												extra-ordinary outcome in a
												career.
											</p>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-md-6">
									<div className="op-features-box">
										<div className="op-content">
											<div className="icon">
												<i className="flaticon-shield-1"></i>
											</div>
											<h3>Learn From Industry Experts</h3>
											<p>
												Learning top skills can bring an
												extra-ordinary outcome in a
												career.
											</p>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-md-6">
									<div className="op-features-box">
										<div className="op-content">
											<div className="icon">
												<i className="flaticon-world"></i>
											</div>
											<h3>Learning From Anywhere</h3>
											<p>
												Learning top skills can bring an
												extra-ordinary outcome in a
												career.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<Image
						src="/images/online-photography/shape1.png"
						width={200}
						height={100}
						alt="shape1"
						className="op-shape1 d-none d-xl-block"
					/>
				</div>
			</div>
		</>
	);
};

export default Features;
