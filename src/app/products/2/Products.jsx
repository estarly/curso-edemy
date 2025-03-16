"use client";

import React from "react";
import ShopSidebar from "./ShopSidebar";
import Pagination from "../Pagination";
import ProductCard from "../ProductCard";

const Products = () => {
	return (
		<div className="products-area ptb-100">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
						<div className="edemy-grid-sorting row align-items-center">
							<div className="col-lg-8 col-md-6 result-count">
								<p>
									We found <span className="count">6</span>{" "}
									products available for you
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
							<ProductCard mainClsAtts="col-lg-6 col-md-6 col-sm-6" />
							<ProductCard mainClsAtts="col-lg-6 col-md-6 col-sm-6" />
							<ProductCard mainClsAtts="col-lg-6 col-md-6 col-sm-6" />
							<ProductCard mainClsAtts="col-lg-6 col-md-6 col-sm-6" />
							<ProductCard mainClsAtts="col-lg-6 col-md-6 col-sm-6" />
							<ProductCard mainClsAtts="col-lg-6 col-md-6 col-sm-6" />

							<Pagination />
						</div>
					</div>

					<div className="col-lg-4 col-md-12">
						<ShopSidebar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
