"use client";

import React from "react";

const CourseOverview = ({ content }) => {
	return (
		<>
			{content && (
				<div className="courses-details-desc-style-two">
					<h3>Acerca del curso</h3>
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			)}
		</>
	);
};

export default CourseOverview;
