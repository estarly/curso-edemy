"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const Player = ({ videoId }) => {
	const [videoUrl, setVideoUrl] = useState("");
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchVideo = async () => {
			try {
				const response = await axios.get(`/api/videos/${videoId}`);
				const asset = response.data;

				if (asset.video_url) {
					setVideoUrl(asset.video_url);
				} else {
					setError("Video URL not found in the response.");
				}
			} catch (error) {
				console.error("Error fetching video:", error);
				setError(
					error.message ||
						"An error occurred while fetching the video."
				);
			}
		};

		fetchVideo();
	}, [videoId]);
	return (
		<>
			<div className="video-content-box">
				{error ? (
					<div>Error: {error}</div>
				) : (
					videoUrl && (
						<ReactPlayer
							url={videoUrl}
							controls
							playing={true}
							width="100%"
							height="100%"
						/>
					)
				)}
			</div>
		</>
	);
};

export default Player;
