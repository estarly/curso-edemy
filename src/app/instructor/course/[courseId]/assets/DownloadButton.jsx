"use client";

import React from "react";

const DownloadButton = ({ file_url }) => {
	const handleNavigation = (fle) => {
		// Open a new tab using window.open
		const newTab = window.open("", "_blank");

		// Update the new tab's URL after the client-side navigation is complete
		newTab.location.href = fle;
	};
	return (
		<button
			className="btn btn-success btn-sm"
			onClick={() => handleNavigation(file_url)}
		>
			<i className="bx bx-cloud-download"></i>
		</button>
	);
};

export default DownloadButton;
