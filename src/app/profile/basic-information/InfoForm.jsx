"use client";

import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "@/components/FormHelpers/Input";
import { RequiredMark } from "@/components/FormHelpers/Input";
import TextArea from "./TextArea";
import { useRouter } from "next/navigation";

const InfoForm = ({ currentUser, countries, validateUser }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [detectedCountry, setDetectedCountry] = useState("");
	const autoDetectedRef = useRef(false);
	const profileToastShownRef = useRef(false);

	const router = useRouter();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			designation: "",
			bio: "",
			gender: "",
			countryId: "",
			address: "",
			phone: "",
			whatsapp: "",
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
		setValue("bio", currentUser.profile ? currentUser.profile.bio : "");
		setValue("gender", currentUser.profile ? currentUser.profile.gender : "");
		setValue("address", currentUser.profile ? currentUser.profile.address : "");
		setValue("whatsapp", currentUser.profile ? currentUser.profile.whatsapp : "");
		setValue("phone", currentUser.profile ? currentUser.profile.phone : "");
		// Solo fijamos el país si ya existe en el perfil; si no, dejamos que la
		// autodetección lo complete (no lo reiniciamos a "").
		if (currentUser.profile?.countryId) {
			setValue("countryId", parseInt(currentUser.profile.countryId));
		}
		setValue("website", currentUser.profile ? currentUser.profile.website : "");
		setValue("twitter", currentUser.profile ? currentUser.profile.twitter : "");
		setValue("facebook", currentUser.profile ? currentUser.profile.facebook : "");
		setValue("linkedin", currentUser.profile ? currentUser.profile.linkedin : "");
		setValue("youtube", currentUser.profile ? currentUser.profile.youtube : "");

		if (validateUser && !profileToastShownRef.current) {
			profileToastShownRef.current = true;
			toast.success("Complete su perfil básico para continuar");
		}
	}, [validateUser, currentUser, setValue]);

	// Autodetectar el país solo la primera vez (perfil sin país guardado).
	useEffect(() => {
		const hasSavedCountry = Boolean(currentUser.profile?.countryId);
		if (hasSavedCountry || autoDetectedRef.current) return;
		if (!countries || countries.length === 0) return;
		autoDetectedRef.current = true;

		const matchCountry = (code) => {
			if (!code) return null;
			const lower = String(code).toLowerCase();
			return countries.find((c) => c.alpha2 === lower) || null;
		};

		const detect = async () => {
			let code;

			// 1) Detección por IP (más precisa)
			try {
				const res = await fetch("https://ipapi.co/json/");
				if (res.ok) {
					const data = await res.json();
					code = data.country_code;
				}
			} catch (_) {
				// Silenciar: caemos al respaldo por idioma del navegador
			}

			// 2) Respaldo: región del idioma del navegador (ej. "es-VE" -> "VE")
			if (!code && typeof navigator !== "undefined") {
				const locale =
					navigator.language ||
					(navigator.languages && navigator.languages[0]);
				code = locale?.split("-")[1];
			}

			const match = matchCountry(code);
			if (match) {
				setValue("countryId", match.id, { shouldValidate: true });
				setDetectedCountry(match.name);
			}
		};

		detect();
	}, [currentUser, countries, setValue]);

	const onSubmit = async (data) => {
		setIsLoading(true);
		await axios
			.post(`/api/user/${currentUser.id}/update-info`, data)
			.then((response) => {
				toast.success(response.data.message);
				setTimeout(() => {
					router.refresh();
				}, 1500);
			})
			.catch((error) => {
				toast.error(error.response?.data?.message || "Error al guardar el perfil");
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
						label="Nombre Completo"
						id="name"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
					<Input
						label="Frase presentación"
						id="designation"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>

					<TextArea
						id="bio"
						placeholder="Breve biografía"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>

					<label htmlFor="gender">Género</label>
					<select
						id="gender"
						disabled={isLoading}
						{...register("gender")}
						className={`form-control ${errors.gender ? "is-invalid" : ""}`}
					>
						<option value="">Seleccione género</option>
						<option value="masculino">Masculino</option>
						<option value="femenino">Femenino</option>
					</select>
					{errors.gender && (
						<div className="invalid-feedback d-block">{errors.gender.message}</div>
					)}

					<br />
					<label htmlFor="countryId">
						País
						<RequiredMark />
					</label>
					<select
						id="countryId"
						disabled={isLoading}
						{...register("countryId", { required: "País es requerido" })}
						className={`form-control ${errors.countryId ? "is-invalid" : ""}`}
					>
						<option value="">Seleccione país</option>
						{countries.map((country) => (
							<option key={country.id} value={country.id}>
								{country.name} ({country.alpha2})
							</option>
						))}
					</select>
					{errors.countryId && (
						<div className="invalid-feedback d-block">{errors.countryId.message}</div>
					)}
					{detectedCountry && !errors.countryId && (
						<small className="text-muted d-block mt-1">
							País detectado automáticamente: <strong>{detectedCountry}</strong>. Puedes
							cambiarlo si no es correcto.
						</small>
					)}

					<br />
					<Input
						label="Dirección"
						id="address"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
				</div>

				<div className="col-md-6">
					<Input
						label="WhatsApp"
						id="whatsapp"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
					<Input
						label="Teléfono"
						id="phone"
						disabled={isLoading}
						register={register}
						errors={errors}
					/>
					<Input
						label="Sitio Web"
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

				<div className="col-12 d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
					<small className="text-muted">
						Los campos requeridos tienen un
						<span style={{ color: "#f97316" }}> *</span>
					</small>
					<button
						type="submit"
						className="btn btn-success"
						disabled={isLoading}
					>
						Guardar
					</button>
				</div>
			</div>
		</form>
	);
};

export default InfoForm;
