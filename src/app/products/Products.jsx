"use client";

import React from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const Products = () => {
	return (
		<div className="products-area ptb-100">
			<div className="container">
				<div className="edemy-grid-sorting row align-items-center">
					<div className="col-lg-8 col-md-6 result-count">
						<p>
							We found <span className="count">6</span> products
							available for you
						</p>
					</div>

					<div className="col-lg-4 col-md-6 ordering">
						<div className="select-box">
							<select className="form-control">
								<option>Sort By:</option>
								<option>Popularity</option>
								<option>Latest</option>
								<option>Price: low to high</option>
								<option>Price: high to low</option>
							</select>
						</div>
					</div>
				</div>

				<div className="row">
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />

					<Pagination />
				</div>
			</div>
		</div>
	);
};

export default Products;
