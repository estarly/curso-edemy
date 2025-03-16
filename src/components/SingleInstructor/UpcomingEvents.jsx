"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const UpcomingEvents = () => {
	return (
		<>
			<div className="instructor-events-area ptb-100">
				<div className="container">
					<div className="section-title instructor-title-color">
						<span className="sub-title">UPCOMING EVENTS</span>
						<h2 className="el-messiri-font">
							Check Out Our Latest Events
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipiscing
							elit sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="instructor-events-box">
								<div className="events-image">
									<Link
										href="/events/single-events"
										className="d-block"
									>
										<Image
											src="/images/instructor-home/events/events1.jpg"
											width={750}
											height={500}
											alt="image"
										/>
									</Link>
								</div>
								<div className="events-content">
									<Link
										href="/events/single-events"
										className="category"
									>
										Art
									</Link>
									<h3 className="el-messiri-font">
										<Link href="/events/single-events">
											The Plaza Art Fair
										</Link>
									</h3>
									<ul className="events-content-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 30, 2023
										</li>
										<li>
											<i className="bx bx-map"></i> New
											York, US
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="instructor-events-box">
								<div className="events-image">
									<Link
										href="/events/single-events"
										className="d-block"
									>
										<Image
											src="/images/instructor-home/events/events2.jpg"
											width={750}
											height={500}
											alt="image"
										/>
									</Link>
								</div>
								<div className="events-content">
									<Link
										href="/events/single-events"
										className="category"
									>
										Design
									</Link>
									<h3 className="el-messiri-font">
										<Link href="/events/single-events">
											Park Forest Fine Art Fair
										</Link>
									</h3>
									<ul className="events-content-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 30, 2023
										</li>
										<li>
											<i className="bx bx-map"></i> New
											York, US
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="instructor-events-box">
								<div className="events-image">
									<Link
										href="/events/single-events"
										className="d-block"
									>
										<Image
											src="/images/instructor-home/events/events3.jpg"
											width={750}
											height={500}
											alt="image"
										/>
									</Link>
								</div>
								<div className="events-content">
									<Link
										href="/events/single-events"
										className="category"
									>
										Digital
									</Link>
									<h3 className="el-messiri-font">
										<Link href="/events/single-events">
											Port Clinton Art Festival
										</Link>
									</h3>
									<ul className="events-content-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 30, 2023
										</li>
										<li>
											<i className="bx bx-map"></i> New
											York, US
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-12 col-md-12">
							<div className="instructor-events-info">
								<p>
									Get into details now?​{" "}
									<Link href="/events">View all events</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UpcomingEvents;
