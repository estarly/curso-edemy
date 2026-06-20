"use client";

import React from "react";

const REQUIRED_MARK_COLOR = "#f97316";

export const RequiredMark = () => (
	<span style={{ color: REQUIRED_MARK_COLOR, fontSize: "0.85em" }}> *</span>
);

const Input = ({
	id,
	type = "text",
	label,
	disabled,
	register,
	required,
	errors,
}) => {
	return (
		<div className="form-group">
			<label>
				{label}
				{required && <RequiredMark />}
			</label>
			<input
				id={id}
				type={type}
				className={`form-control ${errors?.[id] ? "is-invalid" : ""}`}
				placeholder={label}
				{...register(id, {
					required: required ? `${label} es requerido` : false,
				})}
				disabled={disabled}
			/>
			{errors?.[id] && (
				<div className="invalid-feedback d-block">{errors[id].message}</div>
			)}
		</div>
	);
};

export default Input;
