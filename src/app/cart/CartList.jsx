"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart";

const CartList = ({ id, title, slug, regular_price, image }) => {
	const { remove } = useCartStore();
	return (
		<tr>
			<td className="product-thumbnail">
				<Link href="#">
					<Image src={image} width={670} height={800} alt="item" />
				</Link>
			</td>

			<td className="product-name">
				<Link href={`/course/${slug}/${id}`}>{title}</Link>
			</td>

			<td className="product-price">
				<span className="unit-amount">${regular_price}</span>
			</td>

			<td className="product-subtotal">
				<button className="remove" onClick={() => remove(id)}>
					<i className="bx bx-trash"></i>
				</button>
			</td>
		</tr>
	);
};

export default CartList;
