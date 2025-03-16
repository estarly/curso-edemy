"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const UpcomingEvents = () => {
	return (
		<div className="events-area bg-shape bg-eee8df">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Events</span>
					<h2 className="font-weight-black">Our Upcoming Events</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<div className="row">
					<div className="col-lg-6 col-md-12 col-sm-6">
						<div className="events-box">
							<div className="row m-0">
								<div className="col-lg-4 col-md-5 p-0">
									<div className="image bg1">
										<Image
											src="/images/events/kindergarten-img1.jpg"
											width={530}
											height={500}
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-8 col-md-7 p-0">
									<div className="content">
										<div className="date">
											<Image
												src="/images/rectangle1.png"
												width={192}
												height={60}
												alt="image"
											/>
											<span>Wed, 03 June, 2025</span>
										</div>
										<h3 className="font-weight-black">
											<Link href="#">
												Music Conference
											</Link>
										</h3>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do.
										</p>
										<span className="location">
											<i className="bx bx-map"></i>
											Vancover, Canada
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12 col-sm-6">
						<div className="events-box">
							<div className="row m-0">
								<div className="col-lg-4 col-md-5 p-0">
									<div className="image bg2">
										<Image
											src="/images/events/kindergarten-img2.jpg"
											width={530}
											height={500}
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-8 col-md-7 p-0">
									<div className="content">
										<div className="date">
											<Image
												src="/images/rectangle2.png"
												width={192}
												height={60}
												alt="image"
											/>
											<span>Thu, 04 June, 2025</span>
										</div>
										<h3 className="font-weight-black">
											<Link href="#">
												Paper Plates Art
											</Link>
										</h3>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do.
										</p>
										<span className="location">
											<i className="bx bx-map"></i>Sydney,
											Australia
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12 col-sm-6">
						<div className="events-box">
							<div className="row m-0">
								<div className="col-lg-4 col-md-5 p-0">
									<div className="image bg3">
										<Image
											src="/images/events/kindergarten-img3.jpg"
											width={530}
											height={500}
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-8 col-md-7 p-0">
									<div className="content">
										<div className="date">
											<Image
												src="/images/rectangle3.png"
												width={192}
												height={60}
												alt="image"
											/>
											<span>Fri, 05 June, 2025</span>
										</div>
										<h3 className="font-weight-black">
											<Link href="#">
												Imagination classNamees
											</Link>
										</h3>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do.
										</p>
										<span className="location">
											<i className="bx bx-map"></i>
											Istanbul, Turkey
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-md-12 col-sm-6">
						<div className="events-box">
							<div className="row m-0">
								<div className="col-lg-4 col-md-5 p-0">
									<div className="image bg4">
										<Image
											src="/images/events/kindergarten-img4.jpg"
											width={530}
											height={500}
											alt="image"
										/>
									</div>
								</div>

								<div className="col-lg-8 col-md-7 p-0">
									<div className="content">
										<div className="date">
											<Image
												src="/images/rectangle4.png"
												width={192}
												height={60}
												alt="image"
											/>
											<span>Sat, 06 June, 2025</span>
										</div>
										<h3 className="font-weight-black">
											<Link href="#">
												Number Matching
											</Link>
										</h3>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit, sed do.
										</p>
										<span className="location">
											<i className="bx bx-map"></i> New
											York, USA
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="kindergarten-shape17">
				<Image
					src="/images/kindergarten-shape/k-shape17.png"
					width={151}
					height={138}
					alt="image"
				/>
			</div>
			<div className="kindergarten-shape18">
				<Image
					src="/images/kindergarten-shape/k-shape18.png"
					width={277}
					height={230}
					alt="image"
				/>
			</div>
		</div>
	);
};

export default UpcomingEvents;
