"use client";

import React, { useEffect, useRef, useState } from "react";
import { formatDateForInput } from "@/utils/bannerUtils";
import "./BannersTable.css";

export const BannersTable = ({ items, onEditClick, onDeleteClick, onReorder }) => {
	const [rows, setRows] = useState(items || []);
	const [draggingIndex, setDraggingIndex] = useState(null);
	const [overIndex, setOverIndex] = useState(null);
	const [isSaving, setIsSaving] = useState(false);
	const dragIndexRef = useRef(null);

	useEffect(() => {
		setRows(items || []);
	}, [items]);

	const reorderRows = (fromIndex, toIndex) => {
		if (fromIndex === null || toIndex === null || fromIndex === toIndex) {
			return null;
		}

		const updated = [...rows];
		const [moved] = updated.splice(fromIndex, 1);
		updated.splice(toIndex, 0, moved);

		return updated.map((item, index) => ({
			...item,
			order: index,
		}));
	};

	const persistOrder = async (reorderedRows) => {
		if (!onReorder) return;

		setIsSaving(true);
		try {
			await onReorder(
				reorderedRows.map((item) => ({
					id: item.id,
					order: item.order,
				}))
			);
		} finally {
			setIsSaving(false);
		}
	};

	const handleDragStart = (event, index) => {
		if (event.target.closest("button, a, input, textarea, select")) {
			event.preventDefault();
			return;
		}

		dragIndexRef.current = index;
		setDraggingIndex(index);
		event.dataTransfer.effectAllowed = "move";
		event.dataTransfer.setData("text/plain", String(index));
	};

	const handleDragOver = (event, index) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
		setOverIndex(index);
	};

	const handleDrop = async (event, index) => {
		event.preventDefault();

		const fromIndex = dragIndexRef.current;
		const reorderedRows = reorderRows(fromIndex, index);

		setDraggingIndex(null);
		setOverIndex(null);
		dragIndexRef.current = null;

		if (!reorderedRows) return;

		setRows(reorderedRows);
		await persistOrder(reorderedRows);
	};

	const handleDragEnd = () => {
		setDraggingIndex(null);
		setOverIndex(null);
		dragIndexRef.current = null;
	};

	return (
		<div className="banner-table-wrapper">
			<p className="banner-table-hint text-muted small mb-2">
				<i className="bx bx-move me-1"></i>
				Arrastra una fila para cambiar el orden de los banners
				{isSaving ? " · guardando..." : ""}
			</p>

			<div className="table-responsive">
				<table className="table align-middle table-hover fs-14 banner-table">
					<thead>
						<tr>
							<th scope="col">Orden</th>
							<th scope="col">Vista previa</th>
							<th scope="col">Vigencia</th>
							<th scope="col">Acciones</th>
						</tr>
					</thead>

					<tbody>
						{rows.length > 0 ? (
							rows.map((item, index) => (
								<tr
									key={item.id}
									draggable={!isSaving}
									onDragStart={(event) => handleDragStart(event, index)}
									onDragOver={(event) => handleDragOver(event, index)}
									onDrop={(event) => handleDrop(event, index)}
									onDragEnd={handleDragEnd}
									className={[
										"banner-table__row",
										draggingIndex === index ? "banner-table__row--dragging" : "",
										overIndex === index && draggingIndex !== index
											? "banner-table__row--over"
											: "",
									]
										.filter(Boolean)
										.join(" ")}
								>
									<td>
										<div className="d-flex align-items-center gap-2">
											<i
												className="bx bx-menu banner-table__handle text-muted"
												title="Arrastrar para reordenar"
												aria-hidden="true"
											></i>
											<span>{item.order}</span>
										</div>
									</td>
									<td>
										{item.image ? (
											<div className="d-flex flex-column align-items-start gap-1">
												{item.image.toLowerCase().includes(".mp4") ? (
													<video
														src={item.image}
														width="120"
														height="66"
														className="rounded"
														muted
														playsInline
													/>
												) : (
													<img
														src={item.image}
														alt={`Banner ${item.id}`}
														width="120"
														height="66"
														className="rounded object-fit-cover"
													/>
												)}
												<div
													className="d-flex align-items-center justify-content-between"
													style={{ width: "120px" }}
												>
													{item.url ? (
														<a
															href={item.url}
															target="_blank"
															rel="noopener noreferrer"
															className="small text-primary text-decoration-underline"
															draggable={false}
														>
															ver enlace
														</a>
													) : (
														<span />
													)}
													{item.status === 1 ? (
														<i
															className="bx bx-check-circle text-success fs-5"
															title="Activo"
															aria-label="Activo"
														></i>
													) : (
														<i
															className="bx bx-error-circle text-warning fs-5"
															title="Inactivo"
															aria-label="Inactivo"
														></i>
													)}
												</div>
											</div>
										) : (
											<span className="text-muted">Sin media</span>
										)}
									</td>
									<td>
										<small>
											{item.date_start
												? formatDateForInput(item.date_start).replace("T", " ")
												: "Sin inicio"}
											<br />
											{item.date_end
												? formatDateForInput(item.date_end).replace("T", " ")
												: "Sin fin"}
										</small>
									</td>
									<td>
										<div className="d-flex flex-column flex-sm-row gap-2">
											<button
												type="button"
												className="btn btn-primary btn-sm"
												onClick={() => onEditClick(item)}
											>
												Editar
											</button>
											<button
												type="button"
												className="btn btn-danger btn-sm"
												onClick={() => onDeleteClick(item)}
											>
												Eliminar
											</button>
										</div>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan="4">
									<div className="text-center">No hay banners disponibles</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};
