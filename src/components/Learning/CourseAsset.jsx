"use client";

import React from "react";

const CourseAsset = ({ assets }) => {
	console.log(assets, "assets");

	const handleOptionChange = (selectedOption, questionId) => {
		console.log(`Opción seleccionada para la pregunta ${questionId}: ${selectedOption}`);
	};

	return (
		<>
			<div className="courses-details-desc-style-two">
				<h3>{assets.title}</h3>
				<div dangerouslySetInnerHTML={{ __html: assets.description }} />
			</div>
			<div className="courses-details-desc-style-two">
				<div className="row justify-content-left">
					{assets.assignments.length && (
						assets.assignments.map((asst) => (
							<>
								<div className="col-md-4">
									<div className="card">
										<div className="card-body align-items-center">
											<h5 className="card-title d-flex justify-content-left ">
												<strong>{asst.title}</strong>
											</h5>
											<span className="text-muted">
												{asst.description}
											</span>
											<div>
												{asst.config_assignment.options.map((option, index) => {
													const inputId = `question-${asst.id}-option-${index}`;
													return (
														<div key={index}>
															<input
																type="radio"
																id={inputId}
																name={`question-${asst.id}`}
																value={option}
																onChange={() => handleOptionChange(option, asst.id)}
															/>
															<label htmlFor={inputId} className="ms-2">
																{option}
															</label>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>
							</>
						))

					)}
				</div>
			</div>
		</>
	);
};

export default CourseAsset;
