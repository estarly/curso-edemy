"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TopCategories = ({ categories }) => {
	const [categoriess, setCategories] = useState([]);

	useEffect(() => {
		setCategories(categories);
	}, [categoriess]);

	return (
		<div className="categories-area pt-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Categorías</span>
					<h2>Categorías Principales</h2>
					<p>
						Estas son las categorías principales de los cursos que tenemos disponibles.
					</p>
				</div>

				<div className="row" key={categories.length}>

					{categoriess.map((category) => (
						<div className="col-lg-3 col-sm-6 col-md-6">
							<div className="single-categories-box">
								<Image
									src={category.logo || "/images/landing/categories/categorie01.jpg"}
									width={650}
									height={433}
									alt="image"
								/>

								<div className="content">
									<h3>{category.name}</h3>
									<span>{category.courseCount} Cursos</span>
								</div>

								<Link href={`/courses?category=${category.id}`} target="_blank" className="link-btn"></Link>
							</div>
						</div>
					)
					)}

					{/*<div className="col-lg-12 col-sm-12 col-md-12">
						<div className="categories-btn-box">
							<Link href="/categories" className="default-btn">
								<i className="flaticon-user"></i> Ver todas las categorías
								<span></span>
							</Link>
						</div>
					</div>*/}
				</div>
			</div>
		</div>
	);
};

export default TopCategories;
