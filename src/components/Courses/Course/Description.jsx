"use client";

import React from "react";

const Description = ({
	description,
	requirements,
	what_you_will_learn,
	who_is_this_course_for,
}) => {
	return (
		<>
			<div className="courses-overview">
				<h3>Description</h3>
				<div dangerouslySetInnerHTML={{ __html: description }} />
				<h3>Requirements</h3>
				<div dangerouslySetInnerHTML={{ __html: requirements }} />

				<h3>What you will learn?</h3>
				<div
					dangerouslySetInnerHTML={{ __html: what_you_will_learn }}
				/>
				<h3>Who is this course for?</h3>
				<div
					dangerouslySetInnerHTML={{ __html: who_is_this_course_for }}
				/>
			</div>
		</>
	);
};

export default Description;
