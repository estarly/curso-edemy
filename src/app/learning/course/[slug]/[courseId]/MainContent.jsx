"use client";

import React, { useEffect, useState } from "react";
import Player from "@/components/Learning/Player";
import Content from "./Content";

const MainContent = ({ course, reviewsAndAssets }) => {
	const [videoId, setVideoId] = useState(null);
	useEffect(() => {
		setVideoId(course.assets[0].id);
	}, [course]);
	return (
		<div className="row">
			<div className="col-lg-9 col-md-8">
				<div className="video-content">
					{videoId && <Player videoId={videoId} />}

					<br />
					<Content
						{...course}
						assets={reviewsAndAssets.assets}
						reviews={reviewsAndAssets.reviews}
					/>
				</div>
			</div>

			<div className="col-lg-3 col-md-4">
				<div className="video-sidebar">
					<div className="course-video-list">
						<h4 className="title mb-3">{course.title}</h4>
						<ul>
							{course.assets.map((video) => (
								<li
									key={video.id}
									onClick={() => setVideoId(video.id)}
									style={{ cursor: "pointer" }}
								>
									{video.title}
									<span className="d-block text-muted fs-13 mt-1">
										<i className="bx bx-play-circle"></i>{" "}
										{video.type}
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
