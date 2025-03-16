"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import ImageUpload from "./ImageUpload";

const ProfilePhotoForm = ({ currentUser }) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			image: "",
		},
	});

	useEffect(() => {
		setValue("image", currentUser.image ? currentUser.image : "");
	}, [currentUser]);

	const image = watch("image");

	const onSubmit = (data) => {
		setIsLoading(true);
		if (!data.image) {
			toast.error("Please drop image 200x200 before submitting.");
			setIsLoading(false);
			return;
		}
		axios
			.post(`/api/user/${currentUser.id}/profile-photo`, data)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
			})
			.catch((error) => {
				toast.error("Something went wrong!");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};
	return (
		<div className="basic-profile-information-form">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="row">
					<div className="col-md-6">
						<ImageUpload
							onChange={(value) => setCustomValue("image", value)}
							value={image}
						/>
					</div>

					<div className="col-12">
						<button
							className="btn default-btn"
							type="submit"
							disabled={isLoading}
						>
							<i className="flaticon-right-arrow"></i>
							Upload <span></span>
							<span></span>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ProfilePhotoForm;
