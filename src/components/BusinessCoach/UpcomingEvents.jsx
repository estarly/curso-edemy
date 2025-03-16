"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const UpcomingEvents = () => {
	return (
		<>
			<div className="events-area bg-f9f9f9 ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="coaching-events-content">
								<span className="sub-title">
									COACHING PROGRAM
								</span>
								<h2 className="inter-font">
									My Upcoming Events
								</h2>
								<div className="single-coaching-events-box">
									<span className="location">
										<i className="bx bx-map"></i> New York
									</span>
									<h3 className="inter-font">
										<Link href="#">
											Fundamentals of Self Leadership
										</Link>
									</h3>
									<Link
										href="/authentication"
										className="default-btn"
									>
										<i className="flaticon-user"></i> Buy
										Ticket<span></span>
									</Link>
									<div className="date">
										<div className="div">
											18
											<span>March</span>
										</div>
									</div>
								</div>

								<div className="single-coaching-events-box">
									<span className="location">
										<i className="bx bx-map"></i> Washington
										DC
									</span>
									<h3 className="inter-font">
										<Link href="#">
											Network of Professional
										</Link>
									</h3>
									<Link
										href="/authentication"
										className="default-btn"
									>
										<i className="flaticon-user"></i> Buy
										Ticket<span></span>
									</Link>
									<div className="date">
										<div className="div">
											25
											<span>April</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="coaching-events-image">
								<Image
									src="/images/business-coach/business-coach9.jpg"
									width={728}
									height={610}
									alt="image"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="c-shape5">
					<Image
						src="/images/business-coach/c-shape5.png"
						width={310}
						height={495}
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default UpcomingEvents;
