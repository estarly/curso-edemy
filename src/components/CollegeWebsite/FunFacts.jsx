"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FunFacts = () => {
	return (
		<>
			<div className="funfacts-area position-relative bg-f5f7fa">
				<div className="container">
					<div className="row">
						
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>712</h3>
								<p>Cursos</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>712</h3>
								<p>Instructores staff</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>10594</h3>
								<p>students</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>67 %</h3>
								<p>Progreso</p>
							</div>
						</div>
						
					</div>
				</div>
				<div className="boxes-info">
					<p>
						If you want more?{" "}
						<Link href="/courses">View More Courses</Link>
					</p>
				</div>

				<Image
					src="/images/college-website/shape3.png"
					width={250}
					height={125}
					alt="shape3"
					className="cw-shape3"
				/>
				<Image
					src="/images/college-website/shape4.png"
					width={250}
					height={125}
					alt="shape3"
					className="cw-shape4"
				/>
			</div>
		</>
	);
};

export default FunFacts;
