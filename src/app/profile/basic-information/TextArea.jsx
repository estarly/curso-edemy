"use client";

import React from "react";

const TextArea = ({
	id,
	placeholder,
	disabled,
	register,
	required,
	errors,
}) => {
	return (
		<div className="form-group">
			<label className="form-label fw-semibold">Biography</label>
			<textarea
				id={id}
				{...register(id, { required })}
				placeholder={placeholder}
				className={`
                form-control
                ${errors[id] ? "is-invalid" : ""}
            `}
				disabled={disabled}
				cols="20"
				rows="5"
			/>
		</div>
	);
};

export default TextArea;
