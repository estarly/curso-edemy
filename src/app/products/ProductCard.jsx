"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ mainClsAtts = "col-lg-4 col-md-6 col-sm-6" }) => {
	return (
		<div className={mainClsAtts}>
			<div className="single-products-box">
				<div className="products-image">
					<Link href="/products/details">
						<Image
							src="/images/products/product1.jpg"
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
						<Link href="/products/details">Note Book Mockup</Link>
					</h3>
					<div className="price">
						<span className="old-price">$321</span>
						<span className="new-price">$250</span>
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
	);
};

export default ProductCard;
