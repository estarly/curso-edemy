"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Features = () => {
	return (
		<div className="boxes-area bg-f5f7fa">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-sm-6 col-md-6">
						<div className="single-box-item">
							<div className="icon">
								<i className="flaticon-brain-process"></i>
								<Image
									src="/images/icon-shape.png"
									width={130}
									height={103}
									alt="image"
								/>
							</div>
							<h3>Learn the Latest Skills</h3>
							<p>
								Lorem ipsum dolor sit amet, consecteur
								adipiscing elit, sed do eiusmod tempor.
							</p>

							<Link
								href="/membership-levels"
								className="link-btn"
							>
								Start Now!
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 col-md-6">
						<div className="single-box-item">
							<div className="icon">
								<i className="flaticon-computer"></i>
								<Image
									src="/images/icon-shape.png"
									width={130}
									height={103}
									alt="image"
								/>
							</div>
							<h3>Go at Your Own Pace</h3>
							<p>
								Lorem ipsum dolor sit amet, consecteur
								adipiscing elit, sed do eiusmod tempor.
							</p>

							<Link
								href="/membership-levels"
								className="link-btn"
							>
								Start Now!
							</Link>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
						<div className="single-box-item">
							<div className="icon">
								<i className="flaticon-shield-1"></i>
								<Image
									src="/images/icon-shape.png"
									width={130}
									height={103}
									alt="image"
								/>
							</div>
							<h3>Learn from Industry Experts</h3>
							<p>
								Lorem ipsum dolor sit amet, consecteur
								adipiscing elit, sed do eiusmod tempor.
							</p>

							<Link
								href="/membership-levels"
								className="link-btn"
							>
								Start Now!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
