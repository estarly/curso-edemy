"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
	loading: () => null,
});
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
	useForm,
	Controller,
} from "react-hook-form";
import Input from "../FormHelpers/Input";
import SetPrice from "../FormHelpers/SetPrice";
import CategorySelect from "../FormHelpers/CategorySelect";
import ImageUpload from "../FormHelpers/ImageUpload";

const CourseCreateForm = ({ currentUser }) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			category: "",
			title: "",
			description: "",
			regular_price: "",
			before_price: "",
			lessons: "",
			duration: "",
			image: "",
			access_time: "",
			requirements: "",
			what_you_will_learn: "",
			who_is_this_course_for: "",
		},
	});

	const regular = watch("regular_price");
	const before = watch("before_price");
	const category = watch("category");
	const image = watch("image");

	const onSubmit = (data) => {
		setIsLoading(true);
		if (!data.image) {
			toast.error("Please drop image 750x500 before submitting.");
			setIsLoading(false);
			return;
		}
		axios
			.post("/api/courses/create", data)
			.then((response) => {
				toast.success(response.data.message);
				router.push(
					`/instructor/course/${response.data.course.id}/videos`
				);
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<div className="col-md-6">
					<Input
						label="Course Title"
						id="title"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>
				<div className="col-md-6">
					<CategorySelect
						value={category}
						onChange={(value) => setCustomValue("category", value)}
						label="Category"
					/>
				</div>

				<div className="col-md-6">
					<Input
						label="Lessons"
						id="lessons"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<SetPrice
						label="Regular Price"
						id="regular_price"
						required
						disabled={isLoading}
						register={register}
						errors={errors}
						value={regular}
						onChange={(newValue) =>
							setValue("regular_price", newValue)
						}
					/>
				</div>

				<div className="col-md-6">
					<SetPrice
						label="Before Price"
						id="before_price"
						required
						disabled={isLoading}
						register={register}
						errors={errors}
						value={before}
						onChange={(newValue) =>
							setValue("before_price", newValue)
						}
					/>
				</div>

				<div className="col-md-6">
					<Input
						label="Duration"
						id="duration"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<Input
						label="Access Time"
						id="access_time"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
				</div>

				<div className="col-md-6">
					<ImageUpload
						onChange={(value) => setCustomValue("image", value)}
						value={image}
					/>
				</div>

				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Overview
						</label>
						<Controller
							name="description"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<RichTextEditor
									controls={[
										["bold", "italic", "underline", "link"],
										["unorderedList", "h1", "h2", "h3"],
										[
											"alignLeft",
											"alignCenter",
											"alignRight",
										],
									]}
									value={field.value}
									onChange={(value) => field.onChange(value)}
								/>
							)}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Requirements
						</label>
						<Controller
							name="requirements"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<RichTextEditor
									controls={[
										["bold", "italic", "underline", "link"],
										["unorderedList", "h1", "h2", "h3"],
										[
											"alignLeft",
											"alignCenter",
											"alignRight",
										],
									]}
									value={field.value}
									onChange={(value) => field.onChange(value)}
								/>
							)}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							What You Will Learn
						</label>
						<Controller
							name="what_you_will_learn"
							control={control}
							defaultValue=""
							render={({ field }) => (
								<RichTextEditor
									controls={[
										["bold", "italic", "underline", "link"],
										["unorderedList", "h1", "h2", "h3"],
										[
											"alignLeft",
											"alignCenter",
											"alignRight",
										],
									]}
									value={field.value}
									onChange={(value) => field.onChange(value)}
								/>
							)}
						/>
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Who is this course for?
						</label>
						<Controller
							name="who_is_this_course_for"
							control={control}
							render={({ field }) => (
								<RichTextEditor
									controls={[
										["bold", "italic", "underline", "link"],
										["unorderedList", "h1", "h2", "h3"],
										[
											"alignLeft",
											"alignCenter",
											"alignRight",
										],
									]}
									value={field.value}
									onChange={(value) => field.onChange(value)}
								/>
							)}
						/>
					</div>
				</div>

				<div className="col-12">
					<button type="submit" className="default-btn">
						<i className="flaticon-right-arrow"></i>Create Course{" "}
						<span></span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default CourseCreateForm;
