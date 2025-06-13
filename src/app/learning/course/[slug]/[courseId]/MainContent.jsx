"use client";

import React, { useEffect, useState, useRef } from "react";
import Content from "./Content";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const MainContent = ({ course }) => {
	const router = useRouter();
	const [myAsset, setMyAsset] = useState(course.assets[0]);
	const [reviews, setReviews] = useState(course.reviews);
	const [assetIndex, setAssetIndex] = useState(0);
	const [activeTab, setActiveTab] = useState(1);
	const [assetConsult, setAssetConsult] = useState(null);
	const [hasRedirectedToPending, setHasRedirectedToPending] = useState(false);
	const [isManualSelection, setIsManualSelection] = useState(false);
	
	const isFirstLoad = useRef(true);
	const isFetching = useRef(false);

	useEffect(() => {
		const fetchWithDelay = () => {
			if (isFetching.current) return; // No hacer nada si ya hay una petición en curso
			isFetching.current = true;

			const delay = isFirstLoad.current ? 2000 : 1000;

			setTimeout(() => {
				fetch("/api/stateCourse/registerInit", {
					method: "POST",
					body: JSON.stringify({ myAsset, courseId: course.id }),
				})
					.then(res => res.json())
					.then(data => {
						if (data.ok) {
							if (data.items && data.items.pendiente && data.items.assetPendiente) {
								if (myAsset.id !== data.items.assetPendiente && !hasRedirectedToPending && !isManualSelection) {
									const assetPendiente = course.assets.find(asset => asset.id === data.items.assetPendiente);
									if (assetPendiente) {
										toast.error(data.items.message, {
											position: "top-right",
										});
										setTimeout(() => {
											const pendienteIndex = course.assets.findIndex(asset => asset.id === assetPendiente.id);
											setMyAsset(assetPendiente);
											setAssetIndex(pendienteIndex);
											setActiveTab(1);
											setHasRedirectedToPending(true);
										}, 1000);
									}
								}
							} else {
								// Buscar la primera lección pendiente
								let firstPendingIndex = -1;
								for (let i = 0; i < course.assets.length; i++) {
									const asset = course.assets[i];
									// Si no tiene asignaciones, revisa si tiene statecourse y si está completado
									if (!asset.assignments || asset.assignments.length === 0) {
										// Si no hay statecourse o su state !== 1, está pendiente
										if (!asset.statecourse || asset.statecourse.length === 0 || asset.statecourse[0].state !== 1) {
											firstPendingIndex = i;
											break;
										}
									} else {
										// Si tiene asignaciones, todas deben estar completadas
										const allAssignmentsCompleted = asset.assignments.every(asst =>
											asst.statecourse && asst.statecourse.length > 0 && asst.statecourse[0].state === 1
										);
										if (!allAssignmentsCompleted) {
											firstPendingIndex = i;
											break;
										}
									}
								}
								if (firstPendingIndex !== -1 && !hasRedirectedToPending && !isManualSelection) {
									console.log("Redirigiendo a la primera lección pendiente:", course.assets[firstPendingIndex]);
									setTimeout(() => {
										setMyAsset(course.assets[firstPendingIndex]);
										setAssetIndex(firstPendingIndex);
										setActiveTab(1);
										setHasRedirectedToPending(true);
									}, 1000);
								} else {
									// Si todas están completas, dejar la última o mostrar mensaje
									if (!hasRedirectedToPending && !isManualSelection) {
										console.log("Todas las lecciones están completas. Mostrando la última.");
										setTimeout(() => {
											setMyAsset(course.assets[course.assets.length - 1]);
											setAssetIndex(course.assets.length - 1);
											setActiveTab(1);
										}, 1000);
									}
								}
							}
						} else {
							toast.error(data.error);
						}
					})
					.finally(() => {
						isFetching.current = false;
						isFirstLoad.current = false; // Ya no es la primera vez
					});
			}, delay);
		};

		if (myAsset.id) {
			fetchWithDelay();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [myAsset.id]);
	
	//crear una funcion para buscar el asset
	const findAssetConsult = async (assetId) => {
		// Llamar al API en vez de la función findAsset
		const response = await fetch("/api/asset/findAsset", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ assetId: assetId.id }),
		});
		let asset = await response.json();
		setMyAsset(asset);
		return asset;
	};

	const setMyAssetFunction = async (asset) => {
		setIsManualSelection(true); // Marcar como selección manual
		await findAssetConsult(asset);
		setTimeout(() => {
			setIsManualSelection(false); // Volver a automático después de un pequeño delay
		}, 500);
		/*
		setAssetIndex(1);
		setMyAsset(assetConsult);
		setActiveTab(1);
		*/
	};

	const handleContinueFromChild = (assetIdContinue, answer) => {
		console.log("Valor recibido desde el hijo:", assetIdContinue);
		console.log("Valor recibido desde el hijo:", answer);

		// Buscar el índice del asset actual
		const currentIndex = course.assets.findIndex(asset => asset.id === assetIdContinue);

		// Obtener el siguiente asset
		const nextIndex = currentIndex + 1;
		if (nextIndex < course.assets.length) {
			const nextAsset = course.assets[nextIndex];
			// Llamar a findAssetConsult con el id del siguiente asset
			findAssetConsult(nextAsset);
		} else {
			// Si no hay siguiente asset, puedes mostrar un mensaje o finalizar el curso
			if(answer === "no_assignments"){
				
				fetch("/api/stateCourse/completeAsset", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ assetId: assetIdContinue, courseId: course.id, answer: answer }),
				}).then(res => res.json()).then(data => {
					if(data.ok){
						toast.success("¡Has terminado todas las lecciones!");
						//redirigir a la pagina de cursos
						router.push("/learning/my-courses");
					}else{
						toast.error("No se pudo completar la lección.");
					}
				});
			}
		}
	};

	return (
		<div className="row">
			<div className="col-lg-9 col-md-8">
				<div className="video-content">
					<Content
						{...course}
						indexAsset={assetIndex}
						assets={myAsset}
						reviews={reviews}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						onContinue={handleContinueFromChild}
					/>
				</div>
			</div>
			{/*sidebar left*/}
			<div className="col-lg-3 col-md-4">
				<div className="video-sidebar">
					<div className="course-video-list">
						<h4 className="title mb-3">{course.title}</h4>
						<ul>
							{course.assets.map((asset, index) => (
								<li
									key={asset.id}
									onClick={() => {
										setMyAssetFunction(asset);
									}}
									className={`${myAsset.id === asset.id ? "active" : ""}`}
									style={{ cursor: "pointer" }}
								>
									{(index+1)} - {asset.title} 
									<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
										<span className="d-block text-muted fs-13 mt-1">
											<i className={`bx ${asset.assetTypeId === 1 ? 'bx-play-circle' : asset.assetTypeId === 2 ? 'bx-play' : 'bx-link'}`}></i>{" "}
											{asset.assetType.name}
										</span>
										{asset.assignments.length > 0 && (
											<span className="d-block text-muted fs-13 mt-1">
												<i className="bx bx-list-check"></i> Asignaciones
											</span>
										)}
										{asset.files.length > 0 && (
											<span className="d-block text-muted fs-13 mt-1">
												<i className="bx bx-file"></i> D. Documentos
											</span>
										)}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
