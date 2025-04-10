"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

const CategorySelect = ({ label, valueId = null,placeholder="Seleccione una opción", onChange, data }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	
	useEffect(() => {
		if(valueId){
			let selected = data.find(
				(item) => item.id === valueId
			);		
			setSelectedOption(selected);
		}
		
	}, [data,valueId]);

	return (
		<div className="form-gorup">
			<label>{label}</label>
			<Select
				placeholder={placeholder}
				required
				isClearable
				isSearchable={true}
				options={data}
				value={selectedOption}
				onChange={(val) => onChange(val)}
				formatOptionLabel={(option) => (
					<div className="flex flex-row items-center gap-3">
						<div>{option.id} - {option.name || option.title}</div>
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
