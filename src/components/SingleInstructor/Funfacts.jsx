"use client";
import React from "react";
import Image from "next/image";

const Funfacts = () => {
	return (
		<>
			<div className="instructor-funfacts-area">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-4 col-sm-6 col-6">
							<div className="instructor-funfacts-box">
								<div className="content">
									<div className="image-icon">
										<Image
											src="/images/instructor-home/funfacts/img1.svg"
											width="73"
											height="54"
											alt="image"
										/>
									</div>
									<h3 className="el-messiri-font">3296</h3>
									<p>ENROLLED LEARNERS</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-6 col-6">
							<div className="instructor-funfacts-box">
								<div className="content">
									<div className="image-icon">
										<Image
											src="/images/instructor-home/funfacts/img2.svg"
											width="72"
											height="67"
											alt="image"
										/>
									</div>
									<h3 className="el-messiri-font">5785</h3>
									<p>FINISHED SESIONS</p>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-4 col-sm-6 col-6">
							<div className="instructor-funfacts-box">
								<div className="content">
									<div className="image-icon">
										<Image
											src="/images/instructor-home/funfacts/img3.svg"
											width="54"
											height="59"
											alt="image"
										/>
									</div>
									<h3 className="el-messiri-font">100 %</h3>
									<p>SATISFACTION RATE</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Funfacts;
