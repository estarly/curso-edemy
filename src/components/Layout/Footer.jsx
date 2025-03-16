"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const pathname = usePathname();
	if (pathname === "/coming-soon") {
		return;
	}

	return (
		<footer className="footer-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<Link href="/" className="logo">
								<Image
									src="/images/logo2.png"
									width={87}
									height={24}
									alt="logo"
								/>
							</Link>

							<p>
								Working to bring significant changes in
								online-based learning by doing extensive
								research for course curriculum preparation,
								student engagements, and looking forward to the
								flexible education!
							</p>

							<ul className="social-link">
								<li>
									<a
										href="#"
										className="d-block"
										target="_blank"
									>
										<i className="bx bxl-facebook"></i>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="d-block"
										target="_blank"
									>
										<i className="bx bxl-twitter"></i>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="d-block"
										target="_blank"
									>
										<i className="bx bxl-instagram"></i>
									</a>
								</li>
								<li>
									<a
										href="#"
										className="d-block"
										target="_blank"
									>
										<i className="bx bxl-linkedin"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-2 col-md-6 col-sm-6">
						<div className="single-footer-widget pl-5">
							<h3>Explore</h3>
							<ul className="footer-links-list">
								<li>
									<Link href="/">Home</Link>
								</li>
								<li>
									<Link href="/about">About</Link>
								</li>
								<li>
									<Link href="/courses">Courses</Link>
								</li>
								<li>
									<Link href="/events">Events</Link>
								</li>
								<li>
									<Link href="/contact">Contact</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-2 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<h3>Resources</h3>
							<ul className="footer-links-list">
								<li>
									<Link href="#">Student Success</Link>
								</li>
								<li>
									<Link href="#">Scholarships</Link>
								</li>
								<li>
									<Link href="#">For Business</Link>
								</li>
								<li>
									<Link href="#">Go Premium</Link>
								</li>
								<li>
									<Link href="#">Team Plans</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<h3>Address</h3>
							<ul className="footer-contact-info">
								<li>
									<i className="bx bx-map"></i>
									2750 Quadra Street Golden Victoria Road, New
									York, USA
								</li>
								<li>
									<i className="bx bx-phone-call"></i>
									<a href="tel:+44587154756">
										+1 (123) 456 7890
									</a>
								</li>
								<li>
									<i className="bx bx-envelope"></i>
									<a href="mailto:hello@edemy.com">
										hello@edemy.com
									</a>
								</li>
								<li>
									<i className="bx bxs-inbox"></i>
									<a href="tel:+557854578964">
										+55 785 4578964
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="footer-bottom-area">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<p>
								<i className="bx bx-copyright"></i>
								{currentYear} eDemy is Proudly Powered by{" "}
								<a
									target="_blank"
									href="https://envytheme.com/"
								>
									EnvyTheme
								</a>
							</p>
						</div>

						<div className="col-lg-6 col-md-6">
							<ul>
								<li>
									<Link href="/privacy-policy">
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link href="/terms-of-service">
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="lines">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</footer>
	);
};

export default Footer;
