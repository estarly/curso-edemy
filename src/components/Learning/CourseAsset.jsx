"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import StudentAssetViewer from "@/app/learning/course/[slug]/[courseId]/StudentAssetViewer";
import { FaDownload } from "react-icons/fa";



const CourseAsset = ({ assets, onContinue }) => {
	const [inputValues, setInputValues] = useState({});

	const handleOptionChange = async (selectedOption, questionId) => {
		// Mostrar confirmación antes de continuar
		/*const result = await Swal.fire({
			title: "¿Estás seguro?",
			text: "¿Quieres enviar esta respuesta?",
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "Sí, enviar",
			cancelButtonText: "Cancelar",
		});

		if (!result.isConfirmed) return;*/

		try {
			const res = await fetch("/api/stateCourse/registerResponseAssignment", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					selectedOption,
					questionId,
				}),
			});
			const data = await res.json();
			if (data.ok) {
				//Swal.fire("¡Respuesta guardada!", "", "success");
				toast.success("¡Respuesta guardada!", {
					position: "bottom-center",
				});
				// Mantener la opción seleccionada en el estado
				setInputValues(prev => ({
					...prev,
					[questionId]: selectedOption
				}));
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
		console.log(assets, "CourseAsset:assets");
	}, [assets]);

	const allAnswered = assets?.assignments?.length > 0 &&
		assets.assignments.every(asst => inputValues[asst.id] && inputValues[asst.id].toString().trim() !== "");

	const handleContinue = async () => {
		if (assets?.assignments?.length > 0) {
			if (!allAnswered) {
				Swal.fire("¡No puedes continuar!", "Debes responder todas las preguntas.", "error");
				return;
			}
		} else {
			onContinue(assets.id, "no_assignments"); // Puedes enviar cualquier dato aquí
			return;
		}

		/*const result = await Swal.fire({
			title: "¿Quieres continuar?",
			text: "Has respondido todas las preguntas. ¿Deseas continuar?",
			icon: "question",
			showCancelButton: true,
			confirmButtonText: "Sí, continuar",
			cancelButtonText: "Cancelar",
		});
		if (result.isConfirmed) {
			Swal.fire("¡Continuando!", "Has confirmado continuar.", "success");
			if (onContinue) {
				onContinue(assets.id); // Puedes enviar cualquier dato aquí
			}
		}*/
	};

	return (
		<>
			
			<div className="card-body  p-4 rounded-3" style={{ backgroundColor: "#f4f4f4", border: "1px solid rgb(167 167 167)" }}>
			<StudentAssetViewer asset={assets} />
			<br />
				<h5 className="card-title text-truncate ">
					{assets.title}
				</h5>
				{assets.description && (
					<div
					className="card-text small text-muted description-container"
					style={{
						maxHeight: "60px",
						overflow: "hidden",
						marginBottom: "10px"
					}}
					dangerouslySetInnerHTML={{ __html: assets.description }}
					/>
				)}
			</div>
			<br />
			<ul className="nav nav-tabs" id="courseTabs" role="tablist">
				<li className="nav-item" role="presentation">
					<button className="nav-link active" id="descargables-tab" data-bs-toggle="tab" data-bs-target="#descargables" type="button" role="tab" aria-controls="descargables" aria-selected="true">
						Descargables
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button className="nav-link" id="asignaciones-tab" data-bs-toggle="tab" data-bs-target="#asignaciones" type="button" role="tab" aria-controls="asignaciones" aria-selected="false">
						Asignaciones
					</button>
				</li>
			</ul>
			<div className="tab-content bg-white border-bottom border-start border-end rounded-2" id="courseTabsContent">
				<div className="tab-pane fade show active" id="descargables" role="tabpanel" aria-labelledby="descargables-tab">
					<div className="p-3">
						{assets.files.length ? (
							assets.files.map((file, index) => {
								// Extraer el nombre del archivo de la URL
								const fileName = file.url.split("/").pop();
								return (
									<div key={file.id} className="d-flex align-items-center mb-2">
										<a
											href={file.url}
											download={fileName}
											target="_blank"
											rel="noopener noreferrer"
											className="d-flex align-items-center text-decoration-none"
										>
											
											<span>{(index + 1)} - {fileName}&nbsp;&nbsp;&nbsp;&nbsp;</span><FaDownload className="me-2 text-primary" />
										</a>
									</div>
								);
							})
						) : (
							<p>No hay archivos descargables</p>
						)}
					</div>
				</div>
				<div className="tab-pane fade" id="asignaciones" role="tabpanel" aria-labelledby="asignaciones-tab">
					<div className="p-4">
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
														<strong>{assets.id} - {asst.id} - {asst.title}</strong>
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
																// Usar inputValues para reflejar la selección en tiempo real
																const isSelected = inputValues?.[asst.id] === option;

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
						<div className="mt-4 d-flex justify-content-end">
							<button
								className={`btn btn-success ${(assets?.assignments?.length > 0 && !allAnswered) ? "disabled" : ""}`}
								onClick={handleContinue}
							>
								Continuar lección
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseAsset;
