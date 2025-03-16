"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const UpcomingEvents = () => {
	return (
		<>
			<div className="kitchen-events-area pt-100 pb-70">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Upcoming Events</span>
						<h2 className="font-weight-black">
							Check Out Our Latest Events
						</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</p>
					</div>
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="single-kitchen-events-box">
								<div className="events-image">
									<Link
										href="/events/single-events"
										className="d-block"
									>
										<Image
											src="/images/kitchen-home/events-1.jpg"
											width={844}
											height={520}
											alt="image"
										/>
									</Link>
								</div>
								<div className="events-content">
									<Link
										href="/events/single-events"
										className="category"
									>
										Coocking
									</Link>
									<h3 className="font-weight-black">
										<Link href="/events/single-events">
											NYC Wine & Food Festival
										</Link>
									</h3>
									<ul className="events-content-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 30, 2023
										</li>
										<li>
											<i className="bx bx-map"></i>{" "}
											Vancover, Canada
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-kitchen-events-box">
								<div className="events-image">
									<Link
										href="/events/single-events"
										className="d-block"
									>
										<Image
											src="/images/kitchen-home/events-2.jpg"
											width={844}
											height={520}
											alt="image"
										/>
									</Link>
								</div>
								<div className="events-content">
									<Link
										href="/events/single-events"
										className="category"
									>
										Coocking
									</Link>
									<h3 className="font-weight-black">
										<Link href="/events/single-events">
											Epcot International Food & Wine
										</Link>
									</h3>
									<ul className="events-content-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 30, 2023
										</li>
										<li>
											<i className="bx bx-map"></i>{" "}
											Vancover, Canada
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="single-kitchen-events-box">
								<div className="events-image">
									<Link
										href="/events/single-events"
										className="d-block"
									>
										<Image
											src="/images/kitchen-home/events-3.jpg"
											width={844}
											height={520}
											alt="image"
										/>
									</Link>
								</div>
								<div className="events-content">
									<Link
										href="/events/single-events"
										className="category"
									>
										Coocking
									</Link>
									<h3 className="font-weight-black">
										<Link href="/events/single-events">
											New Orleans Wine & Food
										</Link>
									</h3>
									<ul className="events-content-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 30, 2023
										</li>
										<li>
											<i className="bx bx-map"></i>{" "}
											Vancover, Canada
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-12 col-md-12">
							<div className="kitchen-events-info">
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
