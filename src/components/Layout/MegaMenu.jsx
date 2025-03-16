"use client";

import React from "react";
import Link from "next/link";

const MegaMenu = () => {
	return (
		<li className="nav-item megamenu">
			<Link href="#" className="nav-link">
				Mega <i className="bx bx-chevron-down"></i>
			</Link>

			<ul className="dropdown-menu">
				<li className="nav-item">
					<div className="container">
						<div className="row">
							<div className="col">
								<ul className="megamenu-submenu">
									<li className="nav-item">
										<Link href="#" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>
								</ul>
							</div>

							<div className="col">
								<ul className="megamenu-submenu">
									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>
								</ul>
							</div>

							<div className="col">
								<ul className="megamenu-submenu">
									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>
								</ul>
							</div>

							<div className="col">
								<ul className="megamenu-submenu">
									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/" className="nav-link">
											Example Menu
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="d-none d-lg-block">
							<div className="row m-0">
								<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
									<div className="single-category-widget">
										<div className="icon">
											<i className="bx bx-code-alt"></i>
										</div>
										<h3>Development</h3>
										<span className="sub-title">
											60 Courses
										</span>

										<Link href="/">
											<div className="link-btn"></div>
										</Link>
									</div>
								</div>

								<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
									<div className="single-category-widget">
										<div className="icon">
											<i className="bx bx-camera"></i>
										</div>
										<h3>Photography</h3>
										<span className="sub-title">
											21 Courses
										</span>

										<Link href="/">
											<div className="link-btn"></div>
										</Link>
									</div>
								</div>

								<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
									<div className="single-category-widget">
										<div className="icon">
											<i className="bx bx-layer"></i>
										</div>
										<h3>Design</h3>
										<span className="sub-title">
											58 Courses
										</span>

										<Link href="/">
											<div className="link-btn"></div>
										</Link>
									</div>
								</div>

								<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
									<div className="single-category-widget">
										<div className="icon">
											<i className="bx bxs-flag-checkered"></i>
										</div>
										<h3>Language</h3>
										<span className="sub-title">
											99 Courses
										</span>

										<Link href="/">
											<div className="link-btn"></div>
										</Link>
									</div>
								</div>

								<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
									<div className="single-category-widget">
										<div className="icon">
											<i className="bx bx-health"></i>
										</div>
										<h3>Fitness</h3>
										<span className="sub-title">
											21 Courses
										</span>

										<Link href="/">
											<div className="link-btn"></div>
										</Link>
									</div>
								</div>

								<div className="col-lg-2 col-sm-4 col-md-4 col-6 p-0">
									<div className="single-category-widget">
										<div className="icon">
											<i className="bx bx-line-chart"></i>
										</div>
										<h3>Business</h3>
										<span className="sub-title">
											49 Courses
										</span>

										<Link href="/">
											<div className="link-btn"></div>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</li>
	);
};

export default MegaMenu;
