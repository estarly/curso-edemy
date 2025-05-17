"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

const types = [
	{ value: 1, label: "Subir Video", config: {
		val: "",
		type: "video",
	 } },
	{ value: 2, label: "Subir Audio", config: {
		val: "",
		type: "audio",
	 } },
	{ value: 3, label: "Subir Documento", config: {
		val: "",
		type: "document",
	 } },
	{ value: 4, label: "Link Externo", config: {
		val: "",
		type: "link",
	 } },
	 { value: 5, label: "Youtube", config: {
		val: "",
		type: "youtube",
	 } },
	{ value: 6, label: "Online", config: {
		val: "",
		type: "online",
		platform: "",
		meeting_id: "",
		password: "",
		credits: {
				host: "",
				duration: "",
				participants: ""
			}
		}
	},

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
				className="react-select"
				placeholder="Selecciona un tipo de asset"
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
