"use client";

import React from "react";
import { useCartStore } from "@/store/cart";

const AddToCartButton = ({ id, title, slug, regular_price, image }) => {
	const { add: handleAddToCart, cart } = useCartStore();
	const item = { id, title, slug, regular_price, image };
	return (
		<div className="btn-box">
			{cart.map((item) => item.id).includes(id) ? (
				<button className="default-btn w-100" disabled={true}>
					<i className="flaticon-shopping-cart"></i> Add to Cart{" "}
					<span></span>
				</button>
			) : (
				<button
					className="default-btn w-100"
					onClick={() => handleAddToCart(item)}
				>
					<i className="flaticon-shopping-cart"></i> Add to Cart{" "}
					<span></span>
				</button>
			)}

			{/* <Link href="#" className="default-btn">
						<i className="flaticon-tag"></i> Buy Now <span></span>
					</Link> */}
		</div>
	);
};

export default AddToCartButton;
