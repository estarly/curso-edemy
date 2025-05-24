"use client";

import React from "react";

const Description = ({
	description,
	requirements,
	what_you_will_learn,
	who_is_this_course_for,
}) => {
	console.log(requirements);
	return (
		<>
			<div className="courses-overview">
				{description && description !== "" && (
					<>
						<h3>Descripción</h3>
						<div dangerouslySetInnerHTML={{ __html: description }} />
					</>
				)}

				{requirements && requirements !== "" && (
					<>
						<h3>Requisitos</h3>
						<div dangerouslySetInnerHTML={{ __html: requirements }} />
					</>
				)}

				{what_you_will_learn && what_you_will_learn !== "" && (
					<>
						<h3>Qué aprenderás?</h3>
						<div
							dangerouslySetInnerHTML={{ __html: what_you_will_learn }}
						/>
					</>
				)}

				{who_is_this_course_for && who_is_this_course_for !== "" && (
					<>
						<h3>Para quién es este curso?</h3>
						<div
							dangerouslySetInnerHTML={{ __html: who_is_this_course_for }}
						/>
					</>
				)}
			</div>
		</>
	);
};

export default Description;
