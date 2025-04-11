"use client";

import { useEffect, useState } from "react";
import Select from "react-select";

const AssignmentTypeSelect = ({ label, value, onChange, options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (value) {
      setSelectedOption(value);
    }
  }, [value]);

  return (
    <div className="form-group">
      <label>{label}</label>
      <Select
        className="react-select"
        placeholder="Selecciona un tipo de pregunta"
        required
        isClearable
        isSearchable={true}
        options={options}
        value={selectedOption}
        onChange={(value) => {
          setSelectedOption(value);
          onChange(value);
        }}
        getOptionValue={(option) => option.id}
        getOptionLabel={(option) => option.name}
        formatOptionLabel={(option) => (
          <div className="flex flex-row items-center gap-3">
            <div>{option.name}</div>
            <div className="text-sm text-gray-500">{option.description}</div>
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

export default AssignmentTypeSelect;