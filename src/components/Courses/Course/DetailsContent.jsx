"use client";

import React from "react";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Curriculum from "./Curriculum";
import Instructor from "./Instructor";
import Reviews from "./Reviews";
import Description from "./Description";
import CoursesDetailsSidebar from "./CoursesDetailsSidebar";

const DetailsContent = ({ currentUser, course }) => {
	
	return (
		<div className="courses-details-area pb-100">	
			<div
				className="courses-details-image"
				style={{
					position: "relative",
					width: "100%",
					minHeight: "320px",
					backgroundImage: `url('/images/courses/course-details.jpg')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					borderRadius: "8px",
					overflow: "hidden",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				}}
			>

				<div
					style={{
						position: "absolute",
						left: "5%",
						right: "40%",
						top: "70%",
						transform: "translateY(-60%)",
						background: "rgba(255,255,255,0.85)",
						borderRadius: "18px",
						padding: "20px 48px",
						textAlign: "center",
						boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
						zIndex: 0,
						margin: "0 auto",
						maxWidth: "80%",
					}}
					className="course-title-overlay"
				>
					<div style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#222", marginBottom: 12, lineHeight: 1.1 }}>
						{course.title}
					</div>
					<div style={{ fontSize: "1.4rem", fontWeight: "bold", color: "red" }}>
						{course.category?.name}
					</div>
				</div>

				

				<style jsx>{`
					@media (max-width: 900px) {
						.course-title-overlay {
							position: static !important;
							left: unset !important;
							right: unset !important;
							top: unset !important;
							transform: none !important;
							max-width: 90vw !important;
							padding: 16px 8px !important;
							margin: 16px auto 0 auto !important;
						}
						.course-secondary-image {
							display: none !important;
						}
					}
				`}</style>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="courses-details-desc">
							<Tabs>
								<TabList>
									<Tab>Descripción</Tab>
									<Tab>Lecciones</Tab>
									<Tab>Instructor</Tab>
									{/*<Tab>Reseñas</Tab>*/}
								</TabList>
								<TabPanel>
									<Description {...course} />
								</TabPanel>
								<TabPanel>
									<Curriculum {...course} />
								</TabPanel>
								<TabPanel>
									<Instructor {...course} />
								</TabPanel>
								{/*<TabPanel>
									<Reviews
										currentUser={currentUser}
										{...course}
									/>
								</TabPanel>*/}
							</Tabs>
						</div>
					</div>

					<div className="col-lg-4 col-md-12">
						<CoursesDetailsSidebar {...course} currentUser={currentUser} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsContent;
