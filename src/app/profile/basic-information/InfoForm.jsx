"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "@/components/FormHelpers/Input";
import TextArea from "./TextArea";
import { useRouter } from "next/navigation";

const InfoForm = ({ currentUser }) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		setError,
		reset,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			designation: "",
			bio: "",
			gender: "",
			address: "",
			phone: "",
			website: "",
			twitter: "",
			facebook: "",
			linkedin: "",
			youtube: "",
		},
	});

	useEffect(() => {
		setValue("name", currentUser.name);
		setValue("designation", currentUser.designation);
		setValue("designation", currentUser.designation);
		setValue("bio", currentUser.profile ? currentUser.profile.bio : "");
		setValue(
			"gender",
			currentUser.profile ? currentUser.profile.gender : ""
		);
		setValue(
			"address",
			currentUser.profile ? currentUser.profile.address : ""
		);
		setValue("phone", currentUser.profile ? currentUser.profile.phone : "");
		setValue(
			"website",
			currentUser.profile ? currentUser.profile.website : ""
		);
		setValue(
			"twitter",
			currentUser.profile ? currentUser.profile.twitter : ""
		);
		setValue(
			"facebook",
			currentUser.profile ? currentUser.profile.facebook : ""
		);
		setValue(
			"linkedin",
			currentUser.profile ? currentUser.profile.linkedin : ""
		);
		setValue(
			"youtube",
			currentUser.profile ? currentUser.profile.youtube : ""
		);
	}, [currentUser]);

	const onSubmit = async (data) => {
		setIsLoading(true);
		await axios
			.post(`/api/user/${currentUser.id}/update-info`, data)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<div className="col-md-6">
					<Input
						label="Full Name"
						id="name"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
					<Input
						label="Designation"
						id="designation"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>

					<TextArea
						id="bio"
						placeholder="Biography"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>

					<Input
						label="Gender"
						id="gender"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
					<Input
						label="Address"
						id="address"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<Input
						label="Phone"
						id="phone"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
					<Input
						label="Website URL"
						id="website"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
					<Input
						label="Twitter"
						id="twitter"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
					<Input
						label="Facebook"
						id="facebook"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
					<Input
						label="Linkedin"
						id="linkedin"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
					<Input
						label="Youtube"
						id="youtube"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-12">
					<button
						type="submit"
						className="btn default-btn"
						disabled=""
					>
						<i className="flaticon-right-arrow"></i>
						Save <span></span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default InfoForm;
