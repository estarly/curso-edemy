
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getTotal } from "@/actions/principal/getTotal";

const FunFacts = async () => {

	const funFacts = await getTotal();

	return (
		<>
			<div className="funfacts-area position-relative bg-f5f7fa">
				<div className="container">
					<div className="row text-center">
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>{funFacts ? funFacts.courses : 0}</h3>
								<p>cursos</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>{funFacts ? funFacts.instructors : 0}</h3>
								<p>instructores</p>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>{funFacts ? funFacts.students : 0}</h3>
								<p>estudiantes</p>
							</div>
						</div>
						{/*<div className="col-lg-3 col-md-6 col-sm-6">
							<div className="cw-funfacts single-funfacts-item">
								<h3>{funFacts ? funFacts.progress : 0} %</h3>
								<p>Progreso</p>
							</div>
						</div>*/}
					</div>
				</div>
				<div className="boxes-info">
					<p>{" "}<Link href="/courses">Ver todos los cursos</Link>
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
