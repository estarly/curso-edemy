"use client";

import React from "react";
import { RequiredMark } from "@/components/FormHelpers/Input";

const TextArea = ({
	id,
	label = "Biografía",
	placeholder,
	disabled,
	register,
	required,
	errors,
}) => {
	return (
		<div className="form-group">
			<label className="form-label fw-semibold">
				{label}
				{required && <RequiredMark />}
			</label>
			<textarea
				id={id}
				{...register(id, {
					required: required ? `${label} es requerida` : false,
				})}
				placeholder={placeholder}
				className={`form-control ${errors?.[id] ? "is-invalid" : ""}`}
				disabled={disabled}
				cols="20"
				rows="5"
			/>
			{errors?.[id] && (
				<div className="invalid-feedback d-block">{errors[id].message}</div>
			)}
		</div>
	);
};

export default TextArea;
