"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { stripHtmlAndTruncate } from "@/utils/stripHtmlAndTruncate";
import HeartButton from "@/components/HeartButton";

const CourseCard = ({
	id,
	title,
	slug,
	description,
	image,
	regular_price,
	lessons,
	user,
	enrolments,
	grid = "col-md-6 col-lg-4",
	currentUser,
}) => {
	return (
		<div className={grid}>
			<div className="single-courses-box">
				<div className="courses-image">
					<Link
						href={`/course/${slug}/${id}`}
						className="d-block image"
					>
						<Image
							src={image}
							width={750}
							height={500}
							alt="image"
						/>
					</Link>

					<HeartButton currentUser={currentUser} courseId={id} />

					<div className="price shadow">${regular_price}</div>
				</div>

				<div className="courses-content">
					<div className="course-author d-flex align-items-center">
						<Image
							src="/images/user1.jpg"
							width={300}
							height={300}
							className="rounded-circle"
							alt="image"
						/>
						<span>{user.name}</span>
					</div>

					<h3>
						<Link href={`/course/${slug}/${id}`}>{title}</Link>
					</h3>

					<p>{stripHtmlAndTruncate(description, 15)}</p>

					<ul className="courses-box-footer d-flex justify-content-between align-items-center">
						<li>
							<i className="flaticon-agenda"></i> {lessons}{" "}
							Lessons
						</li>
						<li>
							<i className="flaticon-people"></i>{" "}
							{enrolments ? enrolments.length : 0} Students
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
