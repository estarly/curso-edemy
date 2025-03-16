"use client";
import React from "react";

const FunFacts = () => {
	return (
		<>
			<div className="funfacts-area bg-black pb-70">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="single-funfacts-item with-box-shadow">
								<h3>1926</h3>
								<p>Finished Sessions</p>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="single-funfacts-item with-box-shadow">
								<h3>3279</h3>
								<p>Enrolled Learners</p>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="single-funfacts-item with-box-shadow">
								<h3>250</h3>
								<p>Online Instructors</p>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="single-funfacts-item with-box-shadow">
								<h3>100%</h3>
								<p>Satisfaction Rate</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FunFacts;
