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
	showHeartButton = true,
	urlDefault = "/course"
}) => {
	return (
		<div className={grid}>
			<div className="single-courses-box  style-2">
				<div className="courses-image">
					<Link
						href={`${urlDefault}/${slug}/${id}`}
						className="d-block image"
					>
						<Image
							src={image}
							width={750}
							height={500}
							alt="image"
						/>
					</Link>
					<div className="video_box">
						<div className="d-table">
							<div className="d-table-cell">
								<Link
									href={`${urlDefault}/${slug}/${id}`}
								>
									<i className="bx bx-play"></i>
								</Link>
							</div>
						</div>
					</div>

					{showHeartButton && (
						<HeartButton currentUser={currentUser} courseId={id} />
					)}

					{/*<div className="price shadow">${regular_price}</div>*/}
				</div>

				<div className="courses-content">
					<div className="course-author d-flex align-items-center">
						<Image
							src={user.image || "/images/user1.jpg"}
							width={300}
							height={300}
							className="rounded-circle"
							alt="image"
						/>
						<span>{user.name}</span>
					</div>

					<h3>
						<Link href={`${urlDefault}/${slug}/${id}`}>{title}</Link>
					</h3>

					<p>{stripHtmlAndTruncate(description, 15)}</p>

					<ul className="courses-box-footer d-flex justify-content-between align-items-center">
						<li>
							<i className="flaticon-agenda"></i> ??{" "}
							Lessons
						</li>
						<li>
							<i className="flaticon-people"></i> ?? Students
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
