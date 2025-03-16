"use client";
import React from "react";
import Link from "next/link";

const DepartmentsOfCollege = () => {
	return (
		<>
			<div className="cw-department-area ptb-100">
				<div className="container">
					<div className="section-title">
						<h2 className="playfair-display-font">
							Departments of eDemy college
						</h2>
					</div>

					<div className="row justify-content-center">
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								Bangla
							</Link>
						</div>
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								English
							</Link>
						</div>
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								Management
							</Link>
						</div>
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								Accounting
							</Link>
						</div>
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								Marketing
							</Link>
						</div>
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								Finance
							</Link>
						</div>
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								Banking
							</Link>
						</div>
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								Economics
							</Link>
						</div>
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								Statistic
							</Link>
						</div>
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								Business
							</Link>
						</div>
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								Biology
							</Link>
						</div>
						<div className="col-sm-6 col-lg-3 col-xl-2">
							<Link
								href="#"
								className="cw-department playfair-display-font"
							>
								Physics
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DepartmentsOfCollege;
