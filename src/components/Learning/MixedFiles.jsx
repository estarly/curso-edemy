"use client";

import React from "react";
import ReactPlayer from "react-player";

const MixedFiles = ({ assetFile }) => {

	return (
		<>
			<div className="video-content-box">
				<h2 className="text-left">{assetFile.title}</h2>
				{/* Aquí puedes agregar más lógica para renderizar el contenido del asset */}
				{assetFile.assetTypeId === 1 && assetFile.config_asset?.val && (
					<ReactPlayer
						url={assetFile.config_asset.val}
						controls
						width="100%"
						height="auto"
					/>
				)}
				{assetFile.assetTypeId === 2 && assetFile.config_asset?.val && (
					<a href={assetFile.config_asset.val} target="_blank" rel="noopener noreferrer">
						Descargar archivo
					</a>
				)}
				{assetFile.assetTypeId === 3 && assetFile.config_asset?.val && (
					<p>{assetFile.config_asset.val}</p>
				)}
			</div>
		</>
	);
};

export default MixedFiles;
