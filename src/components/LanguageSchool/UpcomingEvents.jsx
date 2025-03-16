"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const UpcomingEvents = () => {
	return (
		<div className="events-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Events</span>
					<h2>Our Upcoming Events</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6 col-md-6">
						<div className="single-events-box">
							<div className="image">
								<Link href="#" className="d-block">
									<Image
										src="/images/events/events1.jpg"
										width={750}
										height={500}
										alt="image"
									/>
								</Link>
								<span className="date">Wed, 20 May, 2025</span>
							</div>

							<div className="content">
								<h3>
									<Link href="#">
										Global Conference on Business Management
									</Link>
								</h3>
								<span className="location">
									<i className="bx bx-map"></i> Vancover,
									Canada
								</span>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 col-md-6">
						<div className="single-events-box">
							<div className="image">
								<Link href="#" className="d-block">
									<Image
										src="/images/events/events2.jpg"
										width={750}
										height={500}
										alt="image"
									/>
								</Link>
								<span className="date">Tue, 19 May, 2025</span>
							</div>

							<div className="content">
								<h3>
									<Link href="#">
										International Conference on Teacher
										Education
									</Link>
								</h3>
								<span className="location">
									<i className="bx bx-map"></i> Sydney,
									Australia
								</span>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 col-md-6 offset-lg-0 offset-md-3 offset-sm-3">
						<div className="single-events-box">
							<div className="image">
								<Link href="#" className="d-block">
									<Image
										src="/images/events/events3.jpg"
										width={750}
										height={500}
										alt="image"
									/>
								</Link>
								<span className="date">Mon, 18 May, 2025</span>
							</div>

							<div className="content">
								<h3>
									<Link href="#">
										International Conference on Special
										Needs Education
									</Link>
								</h3>
								<span className="location">
									<i className="bx bx-map"></i> Istanbul,
									Turkey
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpcomingEvents;
