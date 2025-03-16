"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurUpcomingEvents = () => {
	return (
		<>
			<div className="motivation-events-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="motivation-events-content">
								<span className="sub-title">
									COACHING PROGRAM
								</span>
								<h2 className="jost-font">
									Our Upcoming Events
								</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
								</p>

								<div>
									<div className="single-motivation-events-box">
										<span className="location">
											<i className="bx bx-map"></i> New
											York
										</span>
										<h3 className="jost-font">
											<Link href="/events/single-events">
												Fundamentals of Self Leadership
											</Link>
										</h3>
										<Link
											href="/authentication"
											className="default-btn"
										>
											<i className="flaticon-shopping-cart"></i>{" "}
											Buy Ticket
											<span></span>
										</Link>
										<div className="date">
											<div className="div">
												18 <span>March</span>
											</div>
										</div>
									</div>

									<div className="single-motivation-events-box">
										<span className="location">
											<i className="bx bx-map"></i>{" "}
											Washington DC
										</span>
										<h3 className="jost-font">
											<Link href="/events/single-events">
												Network of Professional
											</Link>
										</h3>
										<Link
											href="/authentication"
											className="default-btn"
										>
											<i className="flaticon-shopping-cart"></i>{" "}
											Buy Ticket
											<span></span>
										</Link>
										<div className="date">
											<div className="div">
												25 <span>March</span>
											</div>
										</div>
									</div>

									<div className="single-motivation-events-box">
										<span className="location">
											<i className="bx bx-map"></i>{" "}
											Athens, Greece
										</span>
										<h3 className="jost-font">
											<Link href="/events/single-events">
												Conference on Literacy Teaching
											</Link>
										</h3>
										<Link
											href="/authentication"
											className="default-btn"
										>
											<i className="flaticon-shopping-cart"></i>{" "}
											Buy Ticket
											<span></span>
										</Link>
										<div className="date">
											<div className="div">
												29 <span>March</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="motivation-events-image">
								<Image
									src="/images/motivation/motivation-events.jpg"
									width={971}
									height={1239}
									alt="image"
								/>

								<div className="motivation-shape-6">
									<Image
										src="/images/motivation/motivation-shape-6.png"
										width={224}
										height={178}
										alt="image"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurUpcomingEvents;
