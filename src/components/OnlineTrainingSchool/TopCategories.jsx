"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopCategories = () => {
	return (
		<div className="categories-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Categories</span>
					<h2>Top Categories</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</p>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-categories-box">
							<Image
								src="/images/categories/categorie1.jpg"
								width={650}
								height={433}
								alt="image"
							/>

							<div className="content">
								<h3>Development</h3>
								<span>10 Courses</span>
							</div>

							<Link href="/courses" className="link-btn"></Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-categories-box">
							<Image
								src="/images/categories/categorie2.jpg"
								width={650}
								height={433}
								alt="image"
							/>

							<div className="content">
								<h3>Business</h3>
								<span>20 Courses</span>
							</div>

							<Link href="/courses" className="link-btn"></Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-categories-box">
							<Image
								src="/images/categories/categorie3.jpg"
								width={650}
								height={433}
								alt="image"
							/>

							<div className="content">
								<h3>IT & Software</h3>
								<span>15 Courses</span>
							</div>

							<Link href="/courses" className="link-btn"></Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-categories-box">
							<Image
								src="/images/categories/categorie4.jpg"
								width={650}
								height={433}
								alt="image"
							/>

							<div className="content">
								<h3>Design</h3>
								<span>11 Courses</span>
							</div>

							<Link href="/courses" className="link-btn"></Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-categories-box">
							<Image
								src="/images/categories/categorie5.jpg"
								width={650}
								height={433}
								alt="image"
							/>

							<div className="content">
								<h3>Lifestyle</h3>
								<span>10 Courses</span>
							</div>

							<Link href="/courses" className="link-btn"></Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-categories-box">
							<Image
								src="/images/categories/categorie6.jpg"
								width={650}
								height={433}
								alt="image"
							/>

							<div className="content">
								<h3>Photo & Flim</h3>
								<span>12 Courses</span>
							</div>

							<Link href="/courses" className="link-btn"></Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-categories-box">
							<Image
								src="/images/categories/categorie7.jpg"
								width={650}
								height={433}
								alt="image"
							/>

							<div className="content">
								<h3>Animation</h3>
								<span>05 Courses</span>
							</div>

							<Link href="/courses" className="link-btn"></Link>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6 col-md-6">
						<div className="single-categories-box">
							<Image
								src="/images/categories/categorie8.jpg"
								width={650}
								height={433}
								alt="image"
							/>

							<div className="content">
								<h3>Writing</h3>
								<span>20 Courses</span>
							</div>

							<Link href="/courses" className="link-btn"></Link>
						</div>
					</div>

					<div className="col-lg-12 col-sm-12 col-md-12">
						<div className="categories-btn-box">
							<Link href="/categories" className="default-btn">
								<i className="flaticon-user"></i> View All
								Categories <span></span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopCategories;
