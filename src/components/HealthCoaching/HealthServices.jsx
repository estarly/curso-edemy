"use client";

import React from "react";
import Link from "next/link";

const HealthServices = () => {
	return (
		<div className="health-services-area bg-fcf7f3 pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Do not wait for Tomorrow!</span>
					<h2 className="playfair-display-font">
						You've tried dieting a million times. Now try something
						different.
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-health-services-box">
							<div className="icon">
								<i className="flaticon-yoga-2"></i>
							</div>
							<h3 className="playfair-display-font">
								<Link href="/courses">Daily Excersize</Link>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, conectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Quis ipsum suspendisse.
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-health-services-box">
							<div className="icon">
								<i className="flaticon-yoga"></i>
							</div>
							<h3 className="playfair-display-font">
								<Link href="/courses">Find Your Balance</Link>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, conectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Quis ipsum suspendisse.
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-health-services-box">
							<div className="icon">
								<i className="flaticon-lotus"></i>
							</div>
							<h3 className="playfair-display-font">
								<Link href="/courses">Personal Program</Link>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, conectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Quis ipsum suspendisse.
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-health-services-box">
							<div className="icon">
								<i className="flaticon-tomato"></i>
							</div>
							<h3 className="playfair-display-font">
								<Link href="/courses">Natural Process</Link>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, conectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Quis ipsum suspendisse.
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-health-services-box">
							<div className="icon">
								<i className="flaticon-yoga-1"></i>
							</div>
							<h3 className="playfair-display-font">
								<Link href="/courses">Immune System</Link>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, conectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Quis ipsum suspendisse.
							</p>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-health-services-box">
							<div className="icon">
								<i className="flaticon-strawberry"></i>
							</div>
							<h3 className="playfair-display-font">
								<Link href="/courses">Gives You Energy</Link>
							</h3>
							<p>
								Lorem ipsum dolor sit amet, conectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
								Quis ipsum suspendisse.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HealthServices;
