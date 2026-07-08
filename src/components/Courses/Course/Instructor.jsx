"use client";

import React from "react";
import UserAvatar from "@/components/Layout/UserAvatar";

const Instructor = ({ user }) => {
	return (
		<>
			<div className="courses-instructor">
				<div className="single-advisor-box">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-4">
							<div className="advisor-image">
								<UserAvatar
									user={user}
									size={200}
									shape="rounded"
									fill
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
									{user.profile && user.profile.facebook && (
									<li>
										<a
											href={user.profile.facebook}
											className="d-block"
											target="_blank"
										>
											<i className="bx bxl-facebook"></i>
										</a>
									</li>
									)}
									{user.profile && user.profile.twitter && (
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
									)}
									{user.profile && user.profile.youtube && (
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
									)}
									{user.profile && user.profile.linkedin && (
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
									)}
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
