"use client";

import React, { useCallback } from "react";


const AudioUpload = ({ onChange, value,title="Subir Audio" }) => {
	const handleUpload = useCallback(
		(result) => {
			onChange(result.info.secure_url);
			// console.log(result);
		},
		[onChange]
	);

	return (
		<div className="form-group">
			<label className="form-label fw-semibold">{title}</label>
			
		</div>
	);
};

export default AudioUpload;
