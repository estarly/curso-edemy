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
				{(description && description !== "" && description !== 'NULL') && (
					<>
						<h3>Descripción</h3>
						<div dangerouslySetInnerHTML={{ __html: description }} />
					</>
				)}

				{(requirements && requirements !== "" && requirements !== 'NULL') && (
					<>
						<h3>Requisitos</h3>
						<div dangerouslySetInnerHTML={{ __html: requirements }} />
					</>
				)}

				{(what_you_will_learn && what_you_will_learn !== "" && what_you_will_learn !== 'NULL') && (
					<>
						<h3>Qué aprenderás?</h3>
						<div
							dangerouslySetInnerHTML={{ __html: what_you_will_learn }}
						/>
					</>
				)}

				{(who_is_this_course_for && who_is_this_course_for !== "" && who_is_this_course_for !== 'NULL') && (
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
