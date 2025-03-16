"use client";

import React from "react";
import Link from "next/link";
import CartList from "./CartList";
import { useCartStore } from "@/store/cart";
import { cartTotal } from "@/utils/cartTotal";

const CartContent = () => {
	const { cart } = useCartStore();
	return (
		<div className="cart-area ptb-100">
			<div className="container">
				<form>
					<div className="cart-table table-responsive">
						<table className="table table-bordered">
							<thead>
								<tr>
									<th scope="col">Thumb</th>
									<th scope="col">Title</th>
									<th scope="col">Price</th>
								</tr>
							</thead>

							<tbody>
								{cart.map((item) => (
									<CartList key={item.id} {...item} />
								))}
							</tbody>
						</table>
					</div>

					{/* <div className="cart-buttons">
						<div className="row align-items-center">
							<div className="col-lg-7 col-sm-7 col-md-7">
								<div className="shopping-coupon-code">
									<input
										type="text"
										className="form-control"
										placeholder="Coupon code"
										name="coupon-code"
										id="coupon-code"
									/>
									<button type="submit">Apply Coupon</button>
								</div>
							</div>
						</div>
					</div> */}

					<div className="cart-totals">
						<h3>Cart Totals</h3>

						<ul>
							<li>
								Total <span>${cartTotal(cart)}</span>
							</li>
						</ul>

						<Link href="/checkout" className="default-btn">
							<i className="flaticon-shopping-cart"></i> Proceed
							to Checkout <span></span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CartContent;
