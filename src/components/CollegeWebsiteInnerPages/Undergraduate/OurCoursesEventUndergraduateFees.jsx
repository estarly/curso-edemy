"use client";

import React from "react";
import Link from "next/link";

const OurCoursesEventUndergraduateFees = () => {
	return (
		<>
			<div className="cw-cef pt-100 pb-70">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="cw-cef-card">
								<h3 className="playfair-display-font">
									Our courses
								</h3>
								<p>
									Proin eget tortor risus. Curabitur non nulla
									sit amet nisl tempus convallis quis ac
									lectus. Curabitur arcu erat, accumsan id
									imperdiet et, porttitor at sem. Curabitur
									aliquet quam id dui posuere blandit.
								</p>

								<Link
									href="/courses-2"
									className="default-btn cw-btn active mt-2"
								>
									See Our Courses <span></span>
								</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="cw-cef-card">
								<h3 className="playfair-display-font">
									Attend an event
								</h3>
								<p>
									Proin eget tortor risus. Curabitur non nulla
									sit amet nisl tempus convallis quis ac
									lectus. Curabitur arcu erat, accumsan id
									imperdiet et, porttitor at sem. Curabitur
									aliquet quam id dui posuere blandit.
								</p>

								<Link
									href="/events"
									className="default-btn cw-btn active mt-2"
								>
									See Our Events <span></span>
								</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="cw-cef-card">
								<h3 className="playfair-display-font">
									Undergraduate fees
								</h3>
								<p>
									Proin eget tortor risus. Curabitur non nulla
									sit amet nisl tempus convallis quis ac
									lectus. Curabitur arcu erat, accumsan id
									imperdiet et, porttitor at sem. Curabitur
									aliquet quam id dui posuere blandit.
								</p>

								<Link
									href="/fees-and-scholarships"
									className="default-btn cw-btn active mt-2"
								>
									See All Fees <span></span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurCoursesEventUndergraduateFees;
