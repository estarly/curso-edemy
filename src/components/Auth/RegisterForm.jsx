"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../FormHelpers/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
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
			type_user: "USER",
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);
		// Validar el tipo de usuario
		const typeUser = data.type_user === "INSTRUCTOR" ? "INSTRUCTOR" : "USER";
		const formData = {
			...data,
			type_user: typeUser
		};

		await axios
			.post("/api/register", formData)
			.then((response) => {
				toast.success("Registro exitoso! Por favor, inicie sesión.");
				reset();
				router.push("/auth/login");
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
					label="Nombre completo"
					id="name"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

				<Input
					label="Correo electrónico"
					id="email"	
					type="email"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

				<Input
					type="password"
					label="Contraseña"
					id="password"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
				<p className="description">
					La contraseña debe tener al menos 8 caracteres. Para
					hacerla más fuerte, use letras mayúsculas y minúsculas, números,
					y símbolos.
				</p>
				<div className="form-group">
					<select 
						{...register("type_user")}
						className="form-control" 
						disabled={isLoading}
						required
					>
						<option value="USER" selected>Soy Estudiante</option>
						<option value="INSTRUCTOR">Soy Instructor</option>
					</select>	
				</div>

				

				<button type="submit" disabled={isLoading}>
					{isLoading ? "Please wait..." : "Register"}
				</button>
			</form>
		</div>
	);
};

export default RegisterForm;
