"use client";
import React from "react";
import Image from "next/image";

const EducationForEveryone = () => {
	return (
		<>
			<div className="instructor-boxes-area pt-100 pb-70">
				<div className="container">
					<div className="section-title instructor-title-color">
						<span className="sub-title">
							EDUCATION FOR EVERYONE
						</span>
						<h2 className="el-messiri-font">
							Education is About Creating Leaders for Tomorrow
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<div className="row justify-content-center align-items-center">
						<div className="col-lg-3 col-sm-6">
							<div className="instructor-boxes-card">
								<Image
									src="/images/instructor-home/boxes/boxes1.png"
									width={80}
									height={60}
									alt="image"
								/>
								<h3 className="el-messiri-font">
									Latest Skills
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor.
								</p>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="instructor-boxes-card">
								<Image
									src="/images/instructor-home/boxes/boxes2.png"
									width={102}
									height={95}
									alt="image"
								/>
								<h3 className="el-messiri-font">
									Industry Experts
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor.
								</p>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="instructor-boxes-card">
								<Image
									src="/images/instructor-home/boxes/boxes3.png"
									width={74}
									height={73}
									alt="image"
								/>
								<h3 className="el-messiri-font">
									Online Courses
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor.
								</p>
							</div>
						</div>

						<div className="col-lg-3 col-sm-6">
							<div className="instructor-boxes-card">
								<Image
									src="/images/instructor-home/boxes/boxes4.png"
									width={97}
									height={95}
									alt="image"
								/>
								<h3 className="el-messiri-font">One to One</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="instructor-boxes-shape">
					<Image
						src="/images/instructor-home/boxes/shape.png"
						width={150}
						height={110}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default EducationForEveryone;
