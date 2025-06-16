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
							{/*<span className="sub-title">Sobre nosotros</span>*/}
							<h2>
								Educacion Biblica de Calidad. Fórmate en la Verdad de Cristo, 100% Gratis.
							</h2>
							<p>
								¿Buscas crecer en tu conocimiento de la Biblia y en la verdad de Cristo? Creemos firmemente que la educación transformadora debe estar al alcance de todos, sin barreras económicas.

								Por eso, te ofrecemos acceso sin costo a una formación bíblica de excelencia. Nuestros cursos online están diseñados meticulosamente por expertos en teología y diversas disciplinas, garantizando contenido de alta calidad para que puedas profundizar en tu fe, comprender y vivir la verdad de Cristo, y aplicar principios transformadores en tu vida.

								<br /><strong>¡No tardes y comienza a avanzar en tu camino de fe hoy mismo!</strong>

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
