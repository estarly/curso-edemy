"use client";

import React, { useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Filter = () => {
	const searchParams = useSearchParams();

	const router = useRouter();
	const pathname = usePathname();

	const createQueryString = useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	const handleSortChange = (event) => {
		router.push(
			pathname + "?" + createQueryString("sort", event.target.value)
		);
	};
	return (
		<div className="col-lg-4 col-md-6  d-flex gap-3">
			<div className="select-box w-50">
				<label htmlFor="category">Categorías</label>
				<select className="form-control" onChange={handleSortChange}>
					<option value="asc">1 categoria</option>
					<option value="price_low">2 categoria</option>
					<option value="price_high">3 categoria</option>
					<option value="desc">4 categoria</option>
				</select>
			</div>
			<div className="select-box w-50">
				<label htmlFor="category">Orden</label>
				<select className="form-control" onChange={handleSortChange}>
					<option value="asc">Más antiguos</option>
					<option value="desc">Más recientes</option>
				</select>
			</div>
			
		</div>
	);
};

export default Filter;
