"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import StudentAssetViewer from "@/app/learning/course/[slug]/[courseId]/StudentAssetViewer";
import { FaDownload } from "react-icons/fa";

const isAnswerComplete = (assignmentTypeId, value) => {
	if (assignmentTypeId === 3) {
		return Array.isArray(value) && value.length > 0;
	}
	return value !== null && value !== undefined && value.toString().trim() !== "";
};

const getSavedAnswer = (asst) => {
	if (!asst.statecourse?.length) return null;
	const assignmentResult = asst.statecourse[0].assignmentresults?.[0];
	if (!assignmentResult?.response) return null;
	return assignmentResult.response.correct_answer ?? null;
};

const isAssignmentSubmitted = (asst) => {
	const saved = getSavedAnswer(asst);
	if (saved === null || saved === undefined) return false;
	if (Array.isArray(saved)) return saved.length > 0;
	return saved.toString().trim() !== "";
};

const CourseAsset = ({ assets, onContinue }) => {
	const [inputValues, setInputValues] = useState({});

	const handleOptionChange = async (selectedOption, questionId) => {
		const assignment = assets.assignments?.find((a) => a.id === questionId);
		if (assignment && isAssignmentSubmitted(assignment)) return;

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
				toast.success("¡Respuesta guardada!");
				setInputValues(prev => ({
					...prev,
					[questionId]: selectedOption
				}));
			}
		} catch (error) {
			Swal.fire("Error", "Ocurrió un error al guardar la respuesta", "error");
		}
	};

	const handleMultipleToggle = (option, questionId) => {
		const assignment = assets.assignments?.find((a) => a.id === questionId);
		if (assignment && isAssignmentSubmitted(assignment)) return;

		setInputValues((prev) => {
			const current = Array.isArray(prev[questionId]) ? prev[questionId] : [];
			const next = current.includes(option)
				? current.filter((item) => item !== option)
				: [...current, option];
			return { ...prev, [questionId]: next };
		});
	};

	useEffect(() => {
		if (assets && assets.assignments) {
			const initialValues = {};
			assets.assignments.forEach(asst => {
				const userAnswer = getSavedAnswer(asst);
				if (userAnswer !== null && userAnswer !== undefined) {
					initialValues[asst.id] = userAnswer;
				}
			});
			setInputValues(initialValues);
		}
	}, [assets]);

	const allAnswered = assets?.assignments?.length > 0 &&
		assets.assignments.every((asst) =>
			isAssignmentSubmitted(asst) ||
			isAnswerComplete(asst.assignmentTypeId, inputValues[asst.id])
		);

	const handleContinue = async () => {
		if (assets?.assignments?.length > 0 && !allAnswered) {
			Swal.fire("¡No puedes continuar!", "Debes responder todas las preguntas.", "error");
			return;
		}
		onContinue(assets.id, assets?.assignments?.length > 0 ? undefined : "no_assignments");
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
									const savedAnswer = getSavedAnswer(asst);
									const alreadySubmitted = isAssignmentSubmitted(asst);

									return (
										<div className="col-md-4" key={asst.id}>
											<div className="card">
												<div className="card-body align-items-center">
													<h5 className="card-title d-flex justify-content-between align-items-start gap-2">
														<strong>{asst.title}</strong>
														{alreadySubmitted && (
															<span className="badge bg-success flex-shrink-0">Enviada</span>
														)}
													</h5>
													<span className="text-muted">{asst.description}</span>
													<div>
														{asst.assignmentTypeId === 4 ? (
															<div className="mt-2">
																<textarea
																	className="form-control form-control-sm mb-2"
																	placeholder="Escribe tu respuesta aquí"
																	value={inputValues?.[asst.id] !== undefined ? inputValues[asst.id] : (savedAnswer || "")}
																	onChange={(e) => {
																		if (alreadySubmitted) return;
																		setInputValues(prev => ({
																			...prev,
																			[asst.id]: e.target.value
																		}));
																	}}
																	disabled={alreadySubmitted}
																	readOnly={alreadySubmitted}
																	rows={3}
																/>
																{!alreadySubmitted && (
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
																)}
															</div>
														) : asst.assignmentTypeId === 3 ? (
															<div className="mt-2">
																{options.map((option, index) => {
																	const inputId = `question-${asst.id}-option-${index}`;
																	const selected = Array.isArray(inputValues?.[asst.id])
																		? inputValues[asst.id]
																		: (Array.isArray(savedAnswer) ? savedAnswer : []);
																	const isSelected = selected.includes(option);

																	return (
																		<div key={index}>
																			<input
																				type="checkbox"
																				id={inputId}
																				value={option}
																				onChange={() => handleMultipleToggle(option, asst.id)}
																				checked={isSelected}
																				disabled={alreadySubmitted}
																			/>
																			<label htmlFor={inputId} className="ms-2">
																				{option}
																			</label>
																		</div>
																	);
																})}
																{!alreadySubmitted && (
																	<button
																		className="btn btn-primary btn-sm w-100 mt-2"
																		disabled={!Array.isArray(inputValues?.[asst.id]) || inputValues[asst.id].length === 0}
																		onClick={() => handleOptionChange(inputValues[asst.id], asst.id)}
																	>
																		Enviar respuesta
																	</button>
																)}
															</div>
														) : (
															options.map((option, index) => {
																const inputId = `question-${asst.id}-option-${index}`;
																const isSelected = inputValues?.[asst.id] === option;

																return (
																	<div key={index}>
																		<input
																			type="radio"
																			id={inputId}
																			name={`question-${asst.id}`}
																			value={option}
																			onChange={() => {
																				if (!alreadySubmitted) {
																					handleOptionChange(option, asst.id);
																				}
																			}}
																			checked={isSelected}
																			disabled={alreadySubmitted}
																		/>
																		<label htmlFor={inputId} className="ms-2">
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
