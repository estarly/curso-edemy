"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CourseAsset = ({ assets }) => {
	const [inputValues, setInputValues] = useState({});

	const handleOptionChange = async (selectedOption, questionId) => {
		// Mostrar confirmación antes de continuar
		const result = await Swal.fire({
			title: "¿Estás seguro?",
			text: "¿Quieres enviar esta respuesta?",
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "Sí, enviar",
			cancelButtonText: "Cancelar",
		});

		if (!result.isConfirmed) return;

		// Aquí iría la lógica para buscar la tarea, stateCourse, etc.
		try {
			const res = await fetch("/api/stateCourse/registerResponseAssignment", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					selectedOption,
					questionId,
					// Puedes agregar más datos aquí si los necesitas (por ejemplo, assetId, courseId, etc.)
				}),
			});
			const data = await res.json();
			if (data.ok) {
				Swal.fire("¡Respuesta guardada!", "", "success");
			} else {
				Swal.fire("Error", data.error || "No se pudo guardar la respuesta", "error");
			}
		} catch (error) {
			Swal.fire("Error", "Ocurrió un error al guardar la respuesta", "error");
		}

		console.log(`Opción seleccionada para la pregunta ${questionId}: ${selectedOption}`);
	};
	useEffect(() => {
		// Cuando cambian los assets, inicializa los valores de inputValues con las respuestas guardadas
		if (assets && assets.assignments) {
			const initialValues = {};
			assets.assignments.forEach(asst => {
				let userAnswer = null;
				if (asst.statecourse && asst.statecourse.length > 0) {
					const assignmentResult = asst.statecourse[0].assignmentresults?.[0];
					if (assignmentResult && assignmentResult.response) {
						userAnswer = assignmentResult.response.correct_answer;
					}
				}
				if (userAnswer !== null && userAnswer !== undefined) {
					initialValues[asst.id] = userAnswer;
				}
			});
			setInputValues(initialValues);
		}
		console.log(assets, "assets");
	}, [assets]);

	return (
		<>
			<div className="courses-details-desc-style-two">
				<h3>{assets.title}</h3>
				<div dangerouslySetInnerHTML={{ __html: assets.description }} />
			</div>
			<div className="courses-details-desc-style-two">
				<div className="row justify-content-left">
					{assets.assignments.length && (
						assets.assignments.map((asst) => {
							const options = asst.config_assignment.options || asst.config_assignment.create?.options || [];
							const correctOption = asst.config_assignment.correct_option || asst.config_assignment.create?.correct_option || null;

							// Obtener la respuesta del usuario desde el primer statecourse con assignmentresults
							let userAnswer = null;
							if (asst.statecourse && asst.statecourse.length > 0) {
								const assignmentResult = asst.statecourse[0].assignmentresults?.[0];
								if (assignmentResult && assignmentResult.response) {
									userAnswer = assignmentResult.response.correct_answer;
								}
							}

							// Agregar la respuesta del usuario al config_assignment para usarlo en el renderizado
							const configWithUserAnswer = {
								...asst.config_assignment,
								correct_answer: userAnswer,
							};

							return (
								<div className="col-md-4" key={asst.id}>
									<div className="card">
										<div className="card-body align-items-center">
											<h5 className="card-title d-flex justify-content-left">
												<strong>{asst.title}</strong>
											</h5>
											<span className="text-muted">{asst.description}</span>
											<div>
												{asst.assignmentTypeId === 3 ? (
													<div className="mt-2">
														<textarea
															className="form-control form-control-sm mb-2"
															placeholder="Escribe tu respuesta aquí"
															value={inputValues?.[asst.id] !== undefined ? inputValues[asst.id] : (configWithUserAnswer.correct_answer || "")}
															onChange={(e) => {
																setInputValues(prev => ({
																	...prev,
																	[asst.id]: e.target.value
																}));
															}}
															rows={3}
														/>
														<button
															className="btn btn-primary btn-sm w-100"
															disabled={
																!inputValues?.[asst.id] ||
																inputValues[asst.id].trim() === ""
															}
															onClick={() => handleOptionChange(inputValues[asst.id], asst.id)}
														>
															Enviar respuesta
														</button>
													</div>
												) : (
													options.map((option, index) => {
														const inputId = `question-${asst.id}-option-${index}`;
														const isCorrect = option === correctOption;
														const isSelected = option === configWithUserAnswer.correct_answer;

														return (
															<div key={index}>
																<input
																	type="radio"
																	id={inputId}
																	name={`question-${asst.id}`}
																	value={option}
																	onChange={() => handleOptionChange(option, asst.id)}
																	checked={isSelected}
																/>
																<label htmlFor={inputId} className={`ms-2 ${isCorrect ? "text-success" : ""}`}>
																	{option}
																</label>
															</div>
														);
													})
												)}
											</div>
										</div>
									</div>
								</div>
							);
						})
					)}
				</div>
			</div>
		</>
	);
};

export default CourseAsset;
