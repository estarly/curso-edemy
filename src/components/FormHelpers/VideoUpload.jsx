"use client";

import React, { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";

const uploadPreset = process.env.NEXT_CLOUDINARY_PRESET;

const VideoUpload = ({ onChange, value,title="Subir video" }) => {
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
			<CldUploadWidget
				onUpload={handleUpload}
				uploadPreset={uploadPreset}
				options={{ maxFiles: 1 }}
				showPoweredBy={false}
				cropping={true}
			>
				{({ open }) => {
					return (
						<>
							<div
								onClick={() => open?.apply()}
								className="img-thumbnail mb-3"
							>
								<div className="text-center">
									Clic para subir
									<div className="form-text">
										El archivo de demostración es menor de 10 MB
									</div>
								</div>
							</div>

							{value &&
								(value.endsWith(".mp4") ? (
									<div className="text-center position-relative mb-3">
										<video width="400" controls>
											<source
												src={value}
												type="video/mp4"
											/>
											Tu navegador no soporta HTML
											video.
										</video>
									</div>
								) : (
									<Link href={value} target="_blank">
										<i
											className="bx bxs-file"
											style={{
												fontSize: "100px",
												textAlign: "center",
											}}
										></i>
									</Link>
								))}
						</>
					);
				}}
			</CldUploadWidget>
		</div>
	);
};

export default VideoUpload;
