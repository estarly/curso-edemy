"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../FormHelpers/Input";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const router = useRouter();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => {
		setIsLoading(true);
		signIn("credentials", {
			...data,
			redirect: false,
		}).then((callback) => {
			setIsLoading(false);
			console.log(callback, 'callback');

			if (callback?.error) {
				toast.error(callback.error);
			}

			if (!callback?.error) {
				toast.success("Sesión iniciada");
				router.refresh();
			}
		});
	};

	return (
		<div className="login-form">
			<h2>Iniciar Sesión</h2>

			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					label="Correo electrónico"
					id="email"
					type="email"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>

				<div className={styles.passwordInputContainer}>
					<Input
						label="Contraseña"
						id="password"
						type={showPassword ? "text" : "password"}
						disabled={isLoading}
						register={register}
						errors={errors}
						required
					/>
					<span
						className={styles.togglePassword}
						onClick={() => setShowPassword(!showPassword)}
					>
            {showPassword ? "🔓" : "🔒"}
          </span>
				</div>

				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
						<p>
							<input type="checkbox" id="test2" />
							<label htmlFor="test2">Recordarme</label>
						</p>
					</div>

					<div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
						<Link href="#" className="lost-your-password">
							¿Olvidaste tu contraseña?
						</Link>
					</div>
				</div>

				<button type="submit" disabled={isLoading}>
					{isLoading ? "Por favor espere..." : "Iniciar Sesión"}
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
