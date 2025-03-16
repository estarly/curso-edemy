"use client";

import React, { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const uploadPreset = process.env.NEXT_CLOUDINARY_PRESET;

const ImageUpload = ({ onChange, value }) => {
	const handleUpload = useCallback(
		(result) => {
			onChange(result.info.secure_url);
		},
		[onChange]
	);

	return (
		<div className="form-group">
			<label className="form-label fw-semibold">Profile Picture</label>
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
									Click to upload
									<div className="form-text">
										Upload image size 200x200
									</div>
								</div>
							</div>

							{value && (
								<div className="text-center position-relative mb-3">
									<Image
										src={value}
										alt="listings"
										width={150}
										height={100}
									/>
								</div>
							)}
						</>
					);
				}}
			</CldUploadWidget>
		</div>
	);
};

export default ImageUpload;
