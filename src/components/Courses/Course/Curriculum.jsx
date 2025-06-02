"use client";

import React from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Curriculum = ({ assets }) => {

	return (
		<>
			<div className="courses-curriculum">
				<ul>
					{assets.map((asst) => (
						<li key={asst.id}>
							<a
								href="#"
								className="d-flex justify-content-between align-items-center"
							>
								<span className="courses-name">
									{asst.title}. <br />
									<span className="text-muted">Asignaturas: {asst.assignments.length}</span>
								</span>
									<div className="courses-meta">
										<span className="status locked">
											{/*<i className="flaticon-password"></i>*/}
											<FaEyeSlash />
										</span>
									</div>
								
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Curriculum;
