"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getTotal } from "@/app/api/principal/getTotal";
const FunFacts = () => {
	const [funFacts, setFunFacts] = useState(null);

		const fetchData = async () => {
			const data = await getTotal();
			console.log(data);
			setFunFacts(data);
		};
		
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div className="funfacts-area position-relative bg-f5f7fa">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>{funFacts ? funFacts.courses : 0}</h3>
								<p>Cursos</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>{funFacts ? funFacts.instructors : 0}</h3>
								<p>Instructores staff</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>{funFacts ? funFacts.students : 0}</h3>
								<p>Estudiantes</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>{funFacts ? funFacts.progress : 0}</h3>
								<p>Progreso</p>
							</div>
						</div>
					</div>
				</div>
				<div className="boxes-info">
					<p>
						Si quieres más?{" "}<Link href="/courses">Ver más cursos</Link>
					</p>
				</div>

				<Image
					src="/images/college-website/shape3.png"
					width={250}
					height={125}
					alt="shape3"
					className="cw-shape3"
				/>
				<Image
					src="/images/college-website/shape4.png"
					width={250}
					height={125}
					alt="shape4"
					className="cw-shape4"
				/>
			</div>
		</>
	);
};

export default FunFacts;
