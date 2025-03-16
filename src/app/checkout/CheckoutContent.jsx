"use client";

import React from "react";
import Link from "next/link";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useCartStore } from "@/store/cart";
import { cartTotal } from "@/utils/cartTotal";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

const CheckoutContent = () => {
	const { cart } = useCartStore();
	return (
		<div className="checkout-area ptb-100">
			<div className="container">
				<>
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<div className="order-details">
								<h3 className="title">Summary</h3>

								<div className="order-table table-responsive">
									<table className="table table-bordered">
										<thead>
											<tr>
												<th scope="col">Courses</th>
												<th scope="col">Total</th>
											</tr>
										</thead>

										<tbody>
											{cart.map((item) => (
												<tr key={item.id}>
													<td className="product-name">
														<Link
															href={`/course/${item.slug}/${item.id}`}
														>
															{item.title}
														</Link>
													</td>

													<td className="product-total">
														<span className="subtotal-amount">
															$
															{item.regular_price}
														</span>
													</td>
												</tr>
											))}

											<tr>
												<td className="total-price">
													<span>Total</span>
												</td>

												<td className="product-subtotal">
													<span className="subtotal-amount">
														${cartTotal(cart)}
													</span>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<Elements stripe={stripePromise}>
							<PaymentForm />
						</Elements>
					</div>
				</>
			</div>
		</div>
	);
};

export default CheckoutContent;
