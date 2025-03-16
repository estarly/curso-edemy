"use client";
import React from "react";
import Image from "next/image";

const NewsletterForm = () => {
	return (
		<>
			<div className="instructor-subscribe-area ptb-100">
				<div className="container">
					<div className="row justify-content-center align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="instructor-subscribe-content">
								<span>NEWSLETTER</span>
								<h3 className="el-messiri-font">
									Subscribe To Our Newsletter
								</h3>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipiscing elit sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="instructor-subscribe-form">
								<form className="newsletter-form">
									<input
										type="text"
										className="input-newsletter"
										placeholder="Enter your email address"
										name="EMAIL"
										required
									/>
									<button
										type="submit"
										className="default-btn"
									>
										<i className="flaticon-user"></i>
										Subscribe Now<span></span>
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="instructor-subscribe-shape-1">
					<img
						src="/images/instructor-home/subscribe-shape1.png"
						width={290}
						height={236}
						alt="image"
					/>
				</div>
				<div className="instructor-subscribe-shape-2">
					<img
						src="/images/instructor-home/subscribe-shape2.png"
						width={690}
						height={322}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default NewsletterForm;
