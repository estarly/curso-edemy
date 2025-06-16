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
		<footer className="footer-area" style={{paddingTop: '30px',textAlign: 'center'}}>
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="single-footer-widget">
							<Link href="/" className="logo">
								<Image
									src="/images/landing/logo/logo.png"
									width={133}
									height={36}
									alt="logo"
								/>
							</Link>

							<p>
							Educacion Biblica de Calidad. Fórmate en la Verdad de Cristo, 100% Gratis.
							</p>

							{/*
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
							</ul>*/
							}
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						{/*<div className="single-footer-widget">
							<h3>Contacto</h3>
							<ul className="footer-contact-info" style={{textAlign: 'center'}}>
								<li>
									<i className="bx bx-map"></i>
									Av. 27 de Febrero 1234, Santiago, Chile
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

							</ul>
						</div>*/}
					</div>
					
					<div className="col-lg-4 col-md-6 col-sm-6 justify-content-center">
						<div className="single-footer-widget">
							<h3>Explorar</h3>
							<ul className="footer-links-list">
								{/*<li>
									<Link href="/">Inicio</Link>
								</li>
								<li>
									<Link href="/about">Acerca de</Link>
								</li>*/}
								<li>
									<Link href="/courses">Cursos</Link>
								</li>
								<li>
									<Link href="/auth/register">Inscribirse</Link>
								</li>
								{/*<li>
									<Link href="/events">Eventos</Link>
								</li>
								<li>
									<Link href="/contact">Contact</Link>
								</li>*/}
							</ul>
						</div>
					</div>
					

					{/*
					<div className="col-lg-2 col-md-6 col-sm-6 hide">
						<div className="single-footer-widget">
							<h3>Recursos</h3>
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
					*/}

					
				</div>

				<div className="footer-bottom-area" style={{marginTop: '0px'}}>
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-6">
							<p>
								<i className="bx bx-copyright"></i>
								{currentYear}  - Pilar es una plataforma de aprendizaje en línea.
							</p>
						</div>

						<div className="col-lg-6 col-md-6">
							<ul>
								<li>
									<Link href="https://www.boomkend.com" target="_blank">
										Desarrollado por Boomkend
									</Link>
								</li>
								{/*<li>
									<Link href="/terms-of-service">
										Terms & Conditions
									</Link>
								</li>*/}
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="lines">
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>
		</footer>
	);
};

export default Footer;
