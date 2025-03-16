"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const UpcomingEvents = () => {
	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="cw-upcoming-events">
								<h3 className="playfair-display-font">
									Our upcoming college events
								</h3>

								<p>
									Quisque velit nisi, pretium ut lacinia in,
									elementum id enim. Vestibulum ac diam sit
									amet quam vehicula elementum sed sit amet
									dui. Nulla porttitor accumsan tincidunt.
								</p>

								<div className="image">
									<Image
										src="/images/college-website/events.jpg"
										width={840}
										height={593}
										alt="events"
									/>

									<div className="icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="100"
											height="100"
											viewBox="0 0 100 100"
											fill="none"
										>
											<path
												d="M63.7149 58.3765C70.6861 53.5877 81.6926 51.8606 100 49.9921C81.4571 48.0923 70.3878 46.3495 63.4323 41.4194C65.3635 37.3685 68.6136 32.7681 73.1669 26.8959C73.5123 26.4563 72.9314 25.891 72.4918 26.2365C66.808 30.884 62.3332 34.2283 58.3608 36.2694C53.5877 29.3139 51.8606 18.3074 49.9921 0C48.0923 18.5429 46.3495 29.6122 41.4194 36.5678C37.3685 34.6365 32.7681 31.3864 26.8959 26.8331C26.4563 26.4877 25.891 27.0686 26.2365 27.5082C30.884 33.192 34.2283 37.6668 36.2694 41.6392C29.3139 46.4123 18.3074 48.1237 0 49.9921C18.5429 51.892 29.6122 53.6348 36.5678 58.5649C34.6365 62.6158 31.3864 67.2162 26.8331 73.0884C26.4877 73.528 27.0686 74.0933 27.5082 73.7478C33.192 69.1003 37.6668 65.756 41.6392 63.7149C46.428 70.6861 48.1551 81.6926 50.0236 100C51.9234 81.4571 53.6662 70.3878 58.5963 63.4323C62.6472 65.3635 67.2476 68.6136 73.1198 73.1669C73.5594 73.5123 74.1247 72.9314 73.7792 72.4918C69.0846 66.8237 65.756 62.3489 63.7149 58.3765Z"
												fill="#FE4A55"
											/>
										</svg>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="cw-events-card">
								<div className="event-card">
									<div className="row align-items-center">
										<div className="col-4">
											<div className="cw-date">
												<h2>28</h2>
												<p>October</p>
											</div>
										</div>
										<div className="col-8">
											<div className="cw-content">
												<h5 className="playfair-display-font">
													9:00 AM-12:00 PM
												</h5>
												<h4 className="playfair-display-font">
													<Link href="/events/single-events">
														Annual art competition
														event - eDemy college
														hall
													</Link>
												</h4>
											</div>
										</div>
									</div>
								</div>

								<div className="event-card">
									<div className="row align-items-center">
										<div className="col-4">
											<div className="cw-date">
												<h2>06</h2>
												<p>November</p>
											</div>
										</div>
										<div className="col-8">
											<div className="cw-content">
												<h5 className="playfair-display-font">
													11:30 AM-1:00 PM
												</h5>
												<h4 className="playfair-display-font">
													<Link href="/events/single-events">
														International conference
														on educational
														administration - eDemy
														college hall
													</Link>
												</h4>
											</div>
										</div>
									</div>
								</div>

								<div className="event-card">
									<div className="row align-items-center">
										<div className="col-4">
											<div className="cw-date">
												<h2>13</h2>
												<p>November</p>
											</div>
										</div>
										<div className="col-8">
											<div className="cw-content">
												<h5 className="playfair-display-font">
													11:00 AM-1:00 PM
												</h5>
												<h4 className="playfair-display-font">
													<Link href="/events/single-events">
														Annual art competition
														event - eDemy college
														hall
													</Link>
												</h4>
											</div>
										</div>
									</div>
								</div>

								<div className="event-card">
									<div className="row align-items-center">
										<div className="col-4">
											<div className="cw-date">
												<h2>20</h2>
												<p>November</p>
											</div>
										</div>
										<div className="col-8">
											<div className="cw-content">
												<h5 className="playfair-display-font">
													12:00 PM-5:00 PM
												</h5>
												<h4 className="playfair-display-font">
													<Link href="/events/single-events">
														Event on how to fix
														student struggle - eDemy
														college hall
													</Link>
												</h4>
											</div>
										</div>
									</div>
								</div>

								<div className="event-card">
									<div className="row align-items-center">
										<div className="col-4">
											<div className="cw-date">
												<h2>06</h2>
												<p>November</p>
											</div>
										</div>
										<div className="col-8">
											<div className="cw-content">
												<h5 className="playfair-display-font">
													11:30 AM-1:00 PM
												</h5>
												<h4 className="playfair-display-font">
													<Link href="/events/single-events">
														International conference
														on educational
														administration - eDemy
														college hall
													</Link>
												</h4>
											</div>
										</div>
									</div>
								</div>

								<div className="event-card">
									<div className="row align-items-center">
										<div className="col-4">
											<div className="cw-date">
												<h2>13</h2>
												<p>November</p>
											</div>
										</div>
										<div className="col-8">
											<div className="cw-content">
												<h5 className="playfair-display-font">
													11:00 AM-1:00 PM
												</h5>
												<h4 className="playfair-display-font">
													<Link href="/events/single-events">
														Annual art competition
														event - eDemy college
														hall
													</Link>
												</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UpcomingEvents;
