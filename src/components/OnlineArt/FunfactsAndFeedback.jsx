"use client";

import React from "react";
import FeedbackSlider from "./FeedbackSlider";
import Image from "next/image";

const FunfactsAndFeedback = () => {
	return (
		<>
			<div className="oa-funfacts-and-feedback-area ptb-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="oa-funfacts-box">
								<h3>3279</h3>
								<p>ENROLLED LEARNERS</p>
							</div>
						</div>

						<div className="col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="oa-funfacts-box">
								<h3>250</h3>
								<p>ONLINE INSTRUCTORS</p>
							</div>
						</div>

						<div className="col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="oa-funfacts-box">
								<h3>1926</h3>
								<p>FINISHED SESIONS</p>
							</div>
						</div>

						<div className="col-lg-3 col-md-3 col-sm-6 col-6">
							<div className="oa-funfacts-box">
								<h3>100 %</h3>
								<p>SATISFACTION RATE</p>
							</div>
						</div>
					</div>

					{/* FeedbackSlider */}
					<FeedbackSlider />
				</div>

				<div className="oa-funfacts-and-feedback-arrow-shape">
					<Image
						src="/images/online-art/arrow-shape.png"
						width={1920}
						height={896}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default FunfactsAndFeedback;
