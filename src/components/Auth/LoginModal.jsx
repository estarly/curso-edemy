"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";

const LoginModal = ({ show, onClose }) => {
	useEffect(() => {
		if (!show) return;

		const handleKeyDown = (event) => {
			if (event.key === "Escape") onClose();
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [show, onClose]);

	if (!show) return null;

	return (
		<>
			<div
				className="modal-backdrop show"
				style={{ opacity: 0.5 }}
				onClick={onClose}
			></div>
			<div className="modal d-block" tabIndex="-1" role="dialog">
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-header border-0 pb-0">
							<button
								type="button"
								className="btn-close"
								onClick={onClose}
								aria-label="Cerrar"
							></button>
						</div>
						<div className="modal-body pt-0">
							<LoginForm onSuccess={onClose} />

							<div className="text-center mt-3">
								<Link
									href="/auth/register"
									className="lost-your-password"
									onClick={onClose}
								>
									Quiero registrarme!
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginModal;
