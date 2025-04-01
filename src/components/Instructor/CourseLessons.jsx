"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import VideoUpload from "../FormHelpers/VideoUpload";
import Input from "../FormHelpers/Input";
import AssetSelect from "../FormHelpers/AssetSelect";

const CourseLessons = ({ course, params }) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: "",
			video_url: "",
		},
	});

	const onSubmit = (data) => {
		setIsLoading(true);
		if (!data.video_url) {
			toast.error("Please upload video.");
			setIsLoading(false);
			return;
		}
		axios
			.post(`/api/courses/${params.courseId}/video`, data)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
				reset();
			})
			.catch((error) => {
				toast.error("Something went wrong!");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const video_url = watch("video_url");
	const asset = watch("asset");
	
	const setCustomValue = (id, value) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<div className="col-12">
				<div className="row">
					<div className="col-md-6">
						<Input
							label="Title"
							id="title"
							disabled={isLoading}
							register={register}
							errors={errors}
						/>
					</div>
					<div className="col-md-6">
						<AssetSelect
							label="Tipo de asset"
							value={asset}
							onChange={(value) => setCustomValue("asset", value)}
						/>
					</div>
				</div>
					
					<VideoUpload
						onChange={(value) => setCustomValue("video_url", value)}
						value={video_url}
					/>
					<button type="submit" className="default-btn">
						<i className="flaticon-right-arrow"></i>Upload Video
						<span></span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default CourseLessons;
