"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
	return (
		<div className="about-area bg-f5f7fa ptb-100">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="about-image text-center">
							<Image
								src="/images/landing/about/about01.png"
								width={542}
								height={458}
								alt="image"
							/>
						</div>
					</div>

					<div className="col-lg-6 col-md-12">
						<div className="about-content">
							<span className="sub-title">Sobre nosotros</span>
							<h2>
							Desarrolle sus habilidades, aprenda algo nuevo y mejore sus habilidades desde cualquier parte del mundo.
							</h2>
							<p>
							Entendemos mejor que el aprendizaje en línea puede hacer una significativa diferencia para llegar a estudiantes de todo el mundo. Ofrecer opciones de aprendizaje mejor siempre puede ofrecer los mejores resultados.
							</p>

							<ul className="features-list">
								<li>
									<span>
										<i className="flaticon-experience"></i>{" "}
										Profesores capacitados
									</span>
								</li>
								<li>
									<span>
										<i className="flaticon-time-left"></i>{" "}
										Cursos accesibles
									</span>
								</li>
								<li>
									<span>
										<i className="flaticon-tutorials"></i>{" "}
										Eficiente y flexible
									</span>
								</li>
								<li>
									<span>
										<i className="flaticon-self-growth"></i>{" "}
										Acceso de por vida
									</span>
								</li>
							</ul>

							<Link href="/auth/register" target="_blank" className="default-btn">
								<i className="flaticon-user"></i> Únete gratis{" "}
								<span></span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
