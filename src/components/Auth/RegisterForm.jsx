"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../FormHelpers/Input";
import axios from "axios";
import toast from "react-hot-toast";

const RegisterForm = () => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		setError,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			type_user: "",
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		await axios
			.post("/api/register", data)
			.then((response) => {
				toast.success("Registration success! Please login.");
				reset();
			})
			.catch((error) => {
				toast.error(error.response.data.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return (
		<div className="login-form">
			<h2>Registrarme</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Full Name"
					id="name"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

				<Input
					label="Email"
					id="email"
					type="email"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

				<Input
					type="password"
					label="Password"
					id="password"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
				<label>Tipo de usuario</label>
				<Input name="type_user" id="type_user" type="select" disabled={isLoading} register={register} errors={errors} required>
					<option value="student" selected>Estudiante</option>
					<option value="instructor">Instructor</option>
				</Input>	

				<p className="description">
					La contraseña debe tener al menos 8 caracteres. Para
					hacerla más fuerte, use letras mayúsculas y minúsculas, números,
					y símbolos como ! " ? $ % ^ & )
				</p>

				<button type="submit" disabled={isLoading}>
					{isLoading ? "Please wait..." : "Register"}
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;
