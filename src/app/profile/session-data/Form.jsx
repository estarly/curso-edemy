"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Input from "@/components/FormHelpers/Input";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const FormSessionData = ({ currentUser }) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm({
		defaultValues: {
			email: currentUser.email,
			password: "",
			confirmPassword: "",
		},
	});

	const validateEmail = (value) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(value) || "Ingrese un correo válido";
	};

	const validatePasswordMatch = (value, { password }) => {
		return value === password || "Las contraseñas no coinciden";
	};

	const onSubmit = async (data) => {
		if (data.password !== data.confirmPassword) {
			toast.error("Las contraseñas no coinciden");
			return;
		}

		setIsLoading(true);
		try {
			const response = await axios.put(`/api/user/${currentUser.id}/session`, data);
			
			if(response.status === 200){
				
					Swal.fire({
						title: '¡Éxito!',
						text: 'Datos actualizados correctamente. Serás redirigido al login.',
					icon: 'success',
					confirmButtonText: 'OK'
				}).then(() => {
					setTimeout(() => {
						signOut();
					}, 1000);
				});
			}
		} catch (error) {
			toast.error(error.response?.data?.message || "Error al actualizar los datos");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="row">
				<div className="col-md-6">
					<Input
						label="Correo Electrónico"
						id="email"
						type="email"
						disabled={isLoading}
						register={register}
						errors={errors}
						required
						validate={validateEmail}
					/>
					
					<div className="mb-3">
						<label htmlFor="password" className="form-label">Nueva Contraseña</label>
						<div className="input-group">
							<input
								id="password"
								type={showPassword ? "text" : "password"}
								disabled={isLoading}
								{...register("password")}
								className={`form-control ${errors.password ? "is-invalid" : ""}`}
							/>
							<button
								type="button"
								className="btn btn-outline-secondary"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? <FaEyeSlash /> : <FaEye />}
							</button>
							{errors.password && (
								<div className="invalid-feedback">{errors.password.message}</div>
							)}
						</div>
					</div>
					
					<div className="mb-3">
						<label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
						<div className="input-group">
							<input
								id="confirmPassword"
								type={showConfirmPassword ? "text" : "password"}
								disabled={isLoading}
								{...register("confirmPassword")}
								className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
							/>
							<button
								type="button"
								className="btn btn-outline-secondary"
								onClick={() => setShowConfirmPassword(!showConfirmPassword)}
							>
								{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
							</button>
							{errors.confirmPassword && (
								<div className="invalid-feedback">{errors.confirmPassword.message}</div>
							)}
						</div>
					</div>
				</div>

				<div className="col-12 mt-3">
					<button
						type="submit"
						className="btn btn-primary"
						disabled={isLoading}
					>
						{isLoading ? 'Guardando...' : 'Guardar Cambios'}
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormSessionData;
