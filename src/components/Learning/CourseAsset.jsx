"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import StudentAssetViewer from "@/app/learning/course/[slug]/[courseId]/StudentAssetViewer";



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
		if(assets?.assignments?.length > 0){
			if(!allAnswered){
				Swal.fire("¡No puedes continuar!", "Debes responder todas las preguntas.", "error");
				return;
			}
		}else{
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
      <StudentAssetViewer asset={assets} />
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
												<strong>{assets.id} - 	{asst.id} - {asst.title}</strong>
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
						Continuar
					</button>
				</div>
			</div>
		</>
	);
};

export default CourseAsset;
