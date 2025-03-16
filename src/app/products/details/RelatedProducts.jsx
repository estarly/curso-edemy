"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const RelatedProducts = () => {
	return (
		<div className="products-area pt-100 pb-70 bg-f5f1ed">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Our Shop</span>
					<h2>Related Products</h2>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-products-box">
							<div className="products-image">
								<Link href="/products/details">
									<Image
										src="/images/products/product4.jpg"
										width={670}
										height={800}
										className="main-image"
										alt="image"
									/>
								</Link>

								<div className="products-button">
									<ul>
										<li>
											<div className="wishlist-btn">
												<Link href="#">
													<i className="bx bx-heart"></i>
													<span className="tooltip-label">
														Add to Wishlist
													</span>
												</Link>
											</div>
										</li>
									</ul>
								</div>
							</div>

							<div className="products-content">
								<h3>
									<Link href="/products/details">
										Stop and Take a Second
									</Link>
								</h3>
								<div className="price">
									<span className="new-price">$150</span>
								</div>
								<div className="star-rating">
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
								</div>
								<Link href="#" className="add-to-cart">
									Add to Cart
								</Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-products-box">
							<div className="products-image">
								<Link href="/products/details">
									<Image
										src="/images/products/product5.jpg"
										width={670}
										height={800}
										className="main-image"
										alt="image"
									/>
								</Link>

								<div className="products-button">
									<ul>
										<li>
											<div className="wishlist-btn">
												<Link href="#">
													<i className="bx bx-heart"></i>
													<span className="tooltip-label">
														Add to Wishlist
													</span>
												</Link>
											</div>
										</li>
									</ul>
								</div>
							</div>

							<div className="products-content">
								<h3>
									<Link href="/products/details">
										Real Life Fairytale
									</Link>
								</h3>
								<div className="price">
									<span className="new-price">$240</span>
								</div>
								<div className="star-rating">
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
								</div>
								<Link href="#" className="add-to-cart">
									Add to Cart
								</Link>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-products-box">
							<div className="products-image">
								<Link href="/products/details">
									<Image
										src="/images/products/product6.jpg"
										width={670}
										height={800}
										className="main-image"
										alt="image"
									/>
								</Link>

								<div className="products-button">
									<ul>
										<li>
											<div className="wishlist-btn">
												<Link href="#">
													<i className="bx bx-heart"></i>
													<span className="tooltip-label">
														Add to Wishlist
													</span>
												</Link>
											</div>
										</li>
									</ul>
								</div>

								<div className="new-tag">New!</div>
							</div>

							<div className="products-content">
								<h3>
									<Link href="/products/details">
										Running From Me
									</Link>
								</h3>
								<div className="price">
									<span className="old-price">$150</span>
									<span className="new-price">$100</span>
								</div>
								<div className="star-rating">
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
									<i className="bx bxs-star"></i>
								</div>
								<Link href="#" className="add-to-cart">
									Add to Cart
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RelatedProducts;
