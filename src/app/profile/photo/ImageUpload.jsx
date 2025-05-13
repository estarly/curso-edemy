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
			<label className="form-label fw-semibold">Foto de perfil</label>
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
							<div onClick={() => open?.apply()} className="img-thumbnail mb-3" >
								
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
							<div className="text-center">
									Click para subir
									<div className="form-text">
										Imagen de perfil 200x200
									</div>
								</div>
							</div>

							
						</>
					);
				}}
			</CldUploadWidget>
		</div>
	);
};

export default ImageUpload;
