"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

const types = [
	{ value: 1, label: "Video", config: { } },
	{ value: 2, label: "Archivo", config: { } },
	{ value: 3, label: "Online", config: {
			url: "",
			platform: "",
			meeting_id: "",
			password: "",
			credits: {
				host: "",
				duration: "",
				participants: ""
			}
		}
	}

];

const AssetSelect = ({ label, value, onChange }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	useEffect(() => {
		let selected = types.find(
			(type) => type.value === value
		);
		setSelectedOption(selected);
	}, [value]);

	return (
		<div className="form-gorup">
			<label>{label}</label>
			<Select
				placeholder="Select Asset"
				required
				isClearable
				isSearchable={true}
				options={types}
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

export default AssetSelect;
