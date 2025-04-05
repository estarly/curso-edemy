"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

const MixedFiles = ({ assetFile }) => {
	console.log(assetFile, "assetFile");
	let title = "----";
	useEffect(() => {

		if (assetFile.assetTypeId === 1) {
			title = "Video";
		} else if (assetFile.assetTypeId === 2) {
			title = "Archivo";
		} else if (assetFile.assetTypeId === 3) {
			title = "Configuración";
		}

	}, [assetFile]);
	
	return (
		<>
			<div className="video-content-box">
				<h2 className="text-left">{title}</h2>
			</div>
		</>
	);
};

export default MixedFiles;
