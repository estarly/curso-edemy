"use client";

import React from "react";

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
			<label>{label}</label>
			<input
				id={id}
				type={type}
				className="form-control"
				placeholder={label}
				{...register(id, { required })}
				disabled={disabled}
			/>
		</div>
	);
};

export default Input;
