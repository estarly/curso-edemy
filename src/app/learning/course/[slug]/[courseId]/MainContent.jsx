"use client";

import React, { useEffect, useState } from "react";
import Player from "@/components/Learning/Player";
import Content from "./Content";
import MixedFiles from "@/components/Learning/MixedFiles";

const MainContent = ({ course }) => {
	const [myAsset, setMyAsset] = useState(course.assets[0]);
	const [reviews, setReviews] = useState(course.reviews);
	const [assetIndex, setAssetIndex] = useState(0);
	const [activeTab, setActiveTab] = useState(1);

	const setMyAssetFunction = (asset) => {
		setAssetIndex(1);
		setMyAsset(asset);
		setActiveTab(1);
	};

	return (
		<div className="row">
			<div className="col-lg-9 col-md-8">
				<div className="video-content">
					{<MixedFiles assetFile={myAsset} />}
					<br />
					<Content
						{...course}
						indexAsset={assetIndex}
						assets={myAsset}
						reviews={reviews}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
					/>
				</div>
			</div>
			{/*sidebar left*/}
			<div className="col-lg-3 col-md-4">
				<div className="video-sidebar">
					<div className="course-video-list">
						<h4 className="title mb-3">{course.title}</h4>
						<ul>
							{course.assets.map((asset, index) => (
								<li
									key={asset.id}
									onClick={() => {
										setMyAssetFunction(asset);
									}}
									className={`${myAsset.id === asset.id ? "active" : ""}`}
									style={{ cursor: "pointer" }}
								>
									{(index+1)} - {asset.title} 
									<span className="d-block text-muted fs-13 mt-1">
										<i className={`bx ${asset.assetTypeId === 1 ? 'bx-play-circle' : asset.assetTypeId === 2 ? 'bx-file' : 'bx-link'}`}></i>{" "}
										
										{asset.assetType.name}
									</span>
									{asset.assignments.length > 0 && (
										<span className="d-block text-muted fs-13 mt-1">
											<i className="bx bx-file"></i> Assignments
										</span>
									)}
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
