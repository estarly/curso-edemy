"use client";

import React, { useEffect, useState } from "react";
import Player from "@/components/Learning/Player";
import Content from "./Content";
import MixedFiles from "@/components/Learning/MixedFiles";
import toast from "react-hot-toast";

const MainContent = ({ course }) => {
	const [myAsset, setMyAsset] = useState(course.assets[0]);
	const [reviews, setReviews] = useState(course.reviews);
	const [assetIndex, setAssetIndex] = useState(0);
	const [activeTab, setActiveTab] = useState(1);
	const [assetConsult, setAssetConsult] = useState(null);

	useEffect(() => {
		if (myAsset) {
			fetch("/api/stateCourse/registerInit", {
				method: "POST",
				body: JSON.stringify({ myAsset, courseId: course.id }),
			}).then(res => res.json()).then(data => {
				if (data.ok) {
					if (data.items && data.items.pendiente && data.items.assetPendiente) {
						// Buscar el asset pendiente y volver a él
						const assetPendiente = course.assets.find(asset => asset.id === data.items.assetPendiente);
						if (assetPendiente) {
							
							toast.error(data.items.message,{
								position: "top-right",
							});
							setTimeout(() => {
								const pendienteIndex = course.assets.findIndex(asset => asset.id === assetPendiente.id);
								// Solo cambiar si el asset pendiente está "detrás" o igual al actual
								if (pendienteIndex < assetIndex) {
									setMyAsset(assetPendiente);
									setAssetIndex(pendienteIndex);
									setActiveTab(1);
								}
								// Si el usuario ya está más adelante, no hacer nada
							}, 1000);
							
						}
					}
				} else {
					toast.error(data.error);
				}
			});
		}
	}, [myAsset]);
	
	//crear una funcion para buscar el asset
	const findAssetConsult = async (assetId) => {
		// Llamar al API en vez de la función findAsset
		const response = await fetch("/api/asset/findAsset", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ assetId: assetId.id }),
		});
		let asset = await response.json();
		console.log(asset, "assetConsult");
		setMyAsset(asset);
		return asset;
	};

	const setMyAssetFunction = async (asset) => {
		//llamar a la funcion para buscar el asset
		await findAssetConsult(asset);
		console.log(assetConsult);
		/*
		setAssetIndex(1);
		setMyAsset(assetConsult);
		setActiveTab(1);
		*/
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
