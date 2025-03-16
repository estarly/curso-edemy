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
			<div className="courses-details-image">
				<img src="/images/courses/course-details.jpg" alt="image" />
			</div>

			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="courses-details-desc">
							<Tabs>
								<TabList>
									<Tab>Overview</Tab>
									<Tab>Curriculum</Tab>
									<Tab>Instructor</Tab>
									<Tab>Reviews</Tab>
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
								<TabPanel>
									<Reviews
										currentUser={currentUser}
										{...course}
									/>
								</TabPanel>
							</Tabs>
						</div>
					</div>

					<div className="col-lg-4 col-md-12">
						<CoursesDetailsSidebar {...course} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsContent;
