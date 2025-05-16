"use client";

import { useEffect, useState } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";

const CategorySelect = ({ label, valueId = null, placeholder="Seleccione una opción", data = [], onChange,required=true }) => {
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
		// Si hay una función onChange proporcionada, la llamamos con el valor
		if (onChange) {
			const selectedId = value?.id || null;
			onChange(selectedId);
		} 
		// Si no hay onChange pero hay un router, usamos el comportamiento original
		else if (router) {
			const {id} = value || {};
			if (id){
				router.push(`?category=${id}`);
			} else {
				router.push(`?category=`);
			}
		}
	}

	return (
		<div className="form-group">
			<label>{label}</label>
			<Select
				placeholder={placeholder}
				required={required}
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
