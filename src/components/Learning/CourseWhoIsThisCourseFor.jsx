"use client";

import React from "react";

const CourseWhoIsThisCourseFor = ({ content }) => {
	return (
		<>
		{content && (
			<div className="courses-details-desc-style-two">
				<h3>Para quién es este curso</h3>
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</div>
		)}
		</>
	);
};

export default CourseWhoIsThisCourseFor;
