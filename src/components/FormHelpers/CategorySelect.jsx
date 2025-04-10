"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";

const CategorySelect = ({ label, valueId = null,placeholder="Seleccione una opción", data }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	const router = useRouter();
	
	useEffect(() => {
		if(valueId){
			let selected = data.find(
				(item) => item.id === valueId
			);		
			setSelectedOption({...selected, value: selected.id});
		} else {
			setSelectedOption(null);
		}
		
	}, [data, valueId]);
	
	const handleChange = (value) => {
		const {id} = value || {};
		if (id){
			router.push(`?category=${id}`);
		} else {
			router.push(`?category=`);
		}
	}

	return (
		<div className="form-gorup">
			<label>{label}</label>
			<Select
				placeholder={placeholder}
				required
				isClearable
				isSearchable={true}
				options={data.map((item) => ({
					...item,
					value: item.id,
				}))}
				value={selectedOption}
				onChange={(val) => handleChange(val)}
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
