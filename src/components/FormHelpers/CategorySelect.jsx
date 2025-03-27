"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

const categories = [
	{ value: 1, label: "Nueva Categoría" },
	{ value: 2, label: "Web Development" },
	{ value: 3, label: "App Development" },
	{ value: 4, label: "Business" },
	{ value: 5, label: "Finance & Accounting" },
	{ value: 6, label: "IT & Software" },
	{ value: 7, label: "Office Productivity" },
	{ value: 8, label: "Personal Development" },
	{ value: 9, label: "Design" },
	{ value: 10, label: "Marketing" },
	{ value: 11, label: "Lifestyle" },
	{ value: 12, label: "Photography & Video" },
	{ value: 13, label: "Health & Fitness" },
	{ value: 14, label: "Music" },
	{ value: 15, label: "Teacing & Academics" },
];

const CategorySelect = ({ label, value, onChange }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	useEffect(() => {
		let selected = categories.find(
			(category) => category.value === value
		);
		setSelectedOption(selected);
	}, [value]);

	return (
		<div className="form-gorup">
			<label>{label}</label>
			<Select
				placeholder="Select Category"
				required
				isClearable
				isSearchable={true}
				options={categories}
				value={selectedOption}
				onChange={(value) => onChange(value)}
				formatOptionLabel={(option) => (
					<div className="flex flex-row items-center gap-3">
						<div>{option.label}</div>
					</div>
				)}
				theme={(theme) => ({
					...theme,
					borderRadius: 6,
					colors: {
						...theme.colors,
						primary: "green",
						primary25: "#ffe4e6",
					},
				})}
			/>
		</div>
	);
};

export default CategorySelect;
