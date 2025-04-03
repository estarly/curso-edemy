"use client";

import React from "react";

const CourseWhatYouWillLearn = ({ content }) => {
	return (
		<>
		{content && (
			<div className="courses-details-desc-style-two">
				<h3>Lo que aprenderás</h3>
				<div dangerouslySetInnerHTML={{ __html: content }} />
				</div>
			)}
		</>
	);
};

export default CourseWhatYouWillLearn;
