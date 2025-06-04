"use client";

import React, { useEffect, useState } from "react";
import Player from "@/components/Learning/Player";
import Content from "./Content";
import MixedFiles from "@/components/Learning/MixedFiles";
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
	
	useEffect(() => {
		if (myAsset.id) {
			console.log(myAsset.id, "myAsset");
			fetch("/api/stateCourse/registerInit", {
				method: "POST",
				body: JSON.stringify({ myAsset, courseId: course.id }),
			})
				.then(res => res.json())
				.then(data => {
					if (data.ok) {
						if (data.items && data.items.pendiente && data.items.assetPendiente) {
							// Solo redirigir si no hemos redirigido antes
							if (myAsset.id !== data.items.assetPendiente && !hasRedirectedToPending) {
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
										setHasRedirectedToPending(true); // Marcamos que ya redirigimos
									}, 1000);
								}
							}
							// Si ya estamos en la lección pendiente o ya redirigimos, NO hacer nada
						} else {
							// Si NO hay lección pendiente, pasar a la siguiente lección si existe
							const currentIndex = course.assets.findIndex(asset => asset.id === myAsset.id);
							const nextIndex = currentIndex + 1;
							if (nextIndex < course.assets.length && !hasRedirectedToPending) {
								setTimeout(() => {
									setMyAsset(course.assets[nextIndex]);
									setAssetIndex(nextIndex);
									setActiveTab(1);
								}, 1000);
							}
							// Si ya redirigimos, no hacer nada
						}
					} else {
						toast.error(data.error);
					}
				});
		}
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
		console.log(asset, "assetConsult");
		setMyAsset(asset);
		return asset;
	};

	const setMyAssetFunction = async (asset) => {
		//llamar a la funcion para buscar el asset
		await findAssetConsult(asset);
		console.log(assetConsult);
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
					{<MixedFiles assetFile={myAsset} />}
					<br />
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
									<span className="d-block text-muted fs-13 mt-1">
										<i className={`bx ${asset.assetTypeId === 1 ? 'bx-play-circle' : asset.assetTypeId === 2 ? 'bx-file' : 'bx-link'}`}></i>{" "}
										
										{asset.assetType.name}
									</span>
									{asset.assignments.length > 0 && (
										<span className="d-block text-muted fs-13 mt-1">
											<i className="bx bx-file"></i> Assignments
										</span>
									)}
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
