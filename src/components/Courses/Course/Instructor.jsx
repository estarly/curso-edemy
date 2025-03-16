"use client";

import Image from "next/image";
import React from "react";

const Instructor = ({ user }) => {
	return (
		<>
			<div className="courses-instructor">
				<div className="single-advisor-box">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-4">
							<div className="advisor-image">
								<Image
									src={
										user.image
											? user.image
											: "/images/advisor/advisor2.jpg"
									}
									alt="image"
									width={200}
									height={200}
								/>
							</div>
						</div>

						<div className="col-lg-8 col-md-8">
							<div className="advisor-content">
								<h3>{user.name}</h3>
								<span className="sub-title">
									{user.designation}
								</span>
								{user.profile && <p>{user.profile.bio}</p>}

								<ul className="social-link">
									<li>
										<a
											href={
												user.profile &&
												user.profile.facebook
											}
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
									<li>
										<a
											href={
												user.profile &&
												user.profile.twitter
											}
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-twitter"></i>
										</a>
									</li>
									<li>
										<a
											href={
												user.profile &&
												user.profile.youtube
											}
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-youtube"></i>
										</a>
									</li>
									<li>
										<a
											href={
												user.profile &&
												user.profile.linkedin
											}
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Instructor;
