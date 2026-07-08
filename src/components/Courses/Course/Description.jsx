"use client";

import React from "react";
import { hasHtmlContent as hasContent } from "@/utils/htmlContent";

const Description = ({
	description,
	requirements,
	what_you_will_learn,
	who_is_this_course_for,
}) => {
	
	return (
		<>
			<div className="courses-overview">
				{hasContent(description) && (
					<>
						<h3>Descripción</h3>
						<div dangerouslySetInnerHTML={{ __html: description }} />
					</>
				)}

				{hasContent(requirements) && (
					<>
						<h3>Requisitos</h3>
						<div dangerouslySetInnerHTML={{ __html: requirements }} />
					</>
				)}

				{hasContent(what_you_will_learn) && (
					<>
						<h3>Qué aprenderás?</h3>
						<div
							dangerouslySetInnerHTML={{ __html: what_you_will_learn }}
						/>
					</>
				)}

				{hasContent(who_is_this_course_for) && (
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
