"use client";

import React from "react";

const CourseRequirements = ({ content }) => {
	return (
		<>
		{content && (
			<div className="courses-details-desc-style-two">
				<h3>Requirimientos del curso</h3>
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</div>
		)}
		</>
	);
};

export default CourseRequirements;
