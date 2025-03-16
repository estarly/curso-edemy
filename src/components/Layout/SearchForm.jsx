"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchForm = () => {
	const [query, setQuery] = useState("");
	const router = useRouter();

	const handleSearch = (e) => {
		e.preventDefault();
		router.push(`/courses?q=${query}`);
	};
	return (
		<>
			<form className="search-box" onSubmit={handleSearch}>
				<input
					type="text"
					className="input-search"
					placeholder="Search for anything"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">
					<i className="flaticon-search"></i>
				</button>
			</form>
		</>
	);
};

export default SearchForm;
