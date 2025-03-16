"use client";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import VideoUpload from "../FormHelpers/VideoUpload";
import Input from "../FormHelpers/Input";

const CourseAsset = ({ course, params }) => {
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
			file_url: "",
		},
	});

	const onSubmit = (data) => {
		setIsLoading(true);
		if (!data.file_url) {
			toast.error("Please upload file.");
			setIsLoading(false);
			return;
		}
		axios
			.post(`/api/courses/${params.courseId}/asset`, data)
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

	const file_url = watch("file_url");

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
					<Input
						label="Asset Title"
						id="title"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
					<VideoUpload
						onChange={(value) => setCustomValue("file_url", value)}
						value={file_url}
					/>
					<button type="submit" className="default-btn">
						<i className="flaticon-right-arrow"></i>Upload Asset
						<span></span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default CourseAsset;
