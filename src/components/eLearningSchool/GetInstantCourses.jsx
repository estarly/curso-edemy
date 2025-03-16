"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const GetInstantCourses = () => {
	return (
		<div className="get-instant-courses-area">
			<div className="container">
				<div className="get-instant-courses-inner-area">
					<div className="row align-items-center">
						<div className="col-lg-8 col-md-12">
							<div className="get-instant-courses-content">
								<span className="sub-title">
									Get Instant Access to The Free
								</span>
								<h2>Self Development Course</h2>
								<p>
									eDemy Self Development Course can assist you
									in bringing the significant changes in
									personal understanding and reshaping the
									confidence to achieve the best from your
									career! We trust that learning should be
									enjoyable, and only that can make
									substantial changes to someone!
								</p>

								<Link href="/auth" className="default-btn">
									<i className="flaticon-user"></i> Start For
									Free <span></span>
								</Link>
							</div>
						</div>

						<div className="col-lg-4 col-md-12">
							<div className="get-instant-courses-image">
								<Image
									src="/images/man.jpg"
									width={700}
									height={750}
									alt="image"
								/>
								<div className="shape7">
									<Image
										src="/images/shape4.png"
										width={62}
										height={62}
										alt="image"
									/>
								</div>
								<div className="shape6">
									<Image
										src="/images/shape6.png"
										width={89}
										height={89}
										alt="image"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="shape5">
						<Image
							src="/images/shape5.png"
							width={118}
							height={59}
							alt="image"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetInstantCourses;
