"use client";

import React from "react";

const CourseOverview = ({ description }) => {
	return (
		<>
			<div className="courses-details-desc-style-two">
				<h3>About this course</h3>
				<div dangerouslySetInnerHTML={{ __html: description }} />
			</div>
		</>
	);
};

export default CourseOverview;
