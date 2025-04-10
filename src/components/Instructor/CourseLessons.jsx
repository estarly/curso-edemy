"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
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
			url: "",
			platform: "",
			meeting_id: "",
			password: "",
			host: "",
			duration: "",
			participants: "",
		},
	});

	const onSubmit = (data) => {
		let formData = {
			title: data.title,
			asset: data.asset
		};

		if (asset?.value === 1 || asset?.value === 2) {
			formData.video_url = data.video_url;
		} else if (asset?.value === 3) {
			formData.config_asset = {
				url: data.url,
				platform: data.platform,
				meeting_id: data.meeting_id,
				password: data.password,
				host: data.host,
				duration: data.duration,
				participants: data.participants
			};
		}

		setIsLoading(true);

		if (asset?.value === 1 && !data.video_url) {
			toast.error("Por favor sube un video.");
			setIsLoading(false);
			return;
		}

		if (asset?.value === 2 && !data.video_url) {
			toast.error("Por favor sube un archivo.");
			setIsLoading(false);
			return;
		}

		if (asset?.value === 3 && !data.url) {
			toast.error("Por favor ingresa la URL.");
			setIsLoading(false);
			return;
		}

		let url = `/api/courses/${params.courseId}/video`;
		if (asset?.value === 3) {
			url = `/api/courses/${params.courseId}/asset`;
		}

		axios
			.post(url, formData)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
				reset();
			})
			.catch((error) => {
				toast.error("¡Algo salió mal!");
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
								label="Título"
								id="title"
								disabled={isLoading}
								register={register}
								errors={errors}
							/>
						</div>
						<div className="col-md-6">
							<AssetSelect
								label="Tipo de asset"
								value={asset?.value}
								onChange={(value) => setCustomValue("asset", value)}
							/>
						</div>
					</div>
					
					{asset?.value === 1 && (
						<VideoUpload
							onChange={(value) => setCustomValue("video_url", value)}
							value={video_url}
						/>
					)}

					{asset?.value === 2 && (
						<VideoUpload
							onChange={(value) => setCustomValue("video_url", value)}
							value={video_url}
						/>
					)}

					{asset?.value === 3 && (
						<div className="row mt-3">
							<div className="col-md-6">
								<Input
									label="URL"
									id="url"
									disabled={isLoading}
									register={register}
									errors={errors}
								/>
							</div>
							<div className="col-md-6">
								<Input
									label="Plataforma"
									id="platform"
									disabled={isLoading}
									register={register}
									errors={errors}
								/>
							</div>
							<div className="col-md-6 mt-3">
								<Input
									label="ID de Reunión"
									id="meeting_id"
									disabled={isLoading}
									register={register}
									errors={errors}
								/>
							</div>
							<div className="col-md-6 mt-3">
								<Input
									label="Contraseña"
									id="password"
									disabled={isLoading}
									register={register}
									errors={errors}
								/>
							</div>
							<div className="col-12 mt-3">
								<h5>Créditos</h5>
							</div>
							<div className="col-md-4 mt-2">
								<Input
									label="Anfitrión"
									id="host"
									disabled={isLoading}
									register={register}
									errors={errors}
								/>
							</div>
							<div className="col-md-4 mt-2">
								<Input
									label="Duración"
									id="duration"
									disabled={isLoading}
									register={register}
									errors={errors}
								/>
							</div>
							<div className="col-md-4 mt-2">
								<Input
									label="Participantes"
									id="participants"
									disabled={isLoading}
									register={register}
									errors={errors}
								/>
							</div>
						</div>
					)}

					<button type="submit" className="default-btn mt-4">
						<i className="flaticon-right-arrow"></i>
						{asset?.value === 1 && "Subir Video"}
						{asset?.value === 2 && "Subir Archivo"}
						{asset?.value === 3 && "Guardar Sesión Online"}
						{!asset?.value && "Guardar"}
						<span></span>
					</button>
				</div>
			</div>
		</form>
	);
};

export default CourseLessons;