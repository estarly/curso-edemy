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
	const touchRef = useRef({ fromIndex: null, overIndex: null });

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

	const applyReorder = async (fromIndex, toIndex) => {
		const reorderedRows = reorderRows(fromIndex, toIndex);
		if (!reorderedRows) return;

		setRows(reorderedRows);
		await persistOrder(reorderedRows);
	};

	const clearDragState = () => {
		setDraggingIndex(null);
		setOverIndex(null);
		dragIndexRef.current = null;
		touchRef.current = { fromIndex: null, overIndex: null };
	};

	const handleDragStart = (event, index) => {
		event.stopPropagation();
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
		clearDragState();

		await applyReorder(fromIndex, index);
	};

	const handleDragEnd = () => {
		clearDragState();
	};

	const findRowIndexFromPoint = (clientX, clientY) => {
		const element = document.elementFromPoint(clientX, clientY);
		const row = element?.closest("[data-row-index]");

		if (!row) return null;

		const index = parseInt(row.getAttribute("data-row-index"), 10);
		return Number.isNaN(index) ? null : index;
	};

	const handleHandleTouchStart = (event, index) => {
		if (isSaving) return;

		event.stopPropagation();
		touchRef.current = { fromIndex: index, overIndex: index };
		setDraggingIndex(index);
		setOverIndex(index);
	};

	const handleHandleTouchMove = (event) => {
		if (touchRef.current.fromIndex === null) return;

		event.preventDefault();
		event.stopPropagation();

		const touch = event.touches[0];
		const targetIndex = findRowIndexFromPoint(touch.clientX, touch.clientY);

		if (targetIndex !== null) {
			touchRef.current.overIndex = targetIndex;
			setOverIndex(targetIndex);
		}
	};

	const handleHandleTouchEnd = async (event) => {
		event.stopPropagation();

		const { fromIndex, overIndex: toIndex } = touchRef.current;
		clearDragState();

		if (fromIndex === null || toIndex === null) return;

		await applyReorder(fromIndex, toIndex);
	};

	return (
		<div className="banner-table-wrapper">
			<p className="banner-table-hint text-muted small mb-2">
				<i className="bx bx-menu me-1"></i>
				Usa el icono de rayitas para arrastrar y cambiar el orden
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
									data-row-index={index}
									onDragOver={(event) => handleDragOver(event, index)}
									onDrop={(event) => handleDrop(event, index)}
									className={[
										"banner-table__row",
										draggingIndex === index ? "banner-table__row--dragging" : "",
										overIndex === index && draggingIndex !== null && draggingIndex !== index
											? "banner-table__row--over"
											: "",
									]
										.filter(Boolean)
										.join(" ")}
								>
									<td>
										<div className="d-flex align-items-center gap-2">
											<span
												className={[
													"banner-table__handle",
													draggingIndex === index ? "banner-table__handle--active" : "",
												]
													.filter(Boolean)
													.join(" ")}
												role="button"
												tabIndex={0}
												aria-label="Arrastrar para reordenar"
												draggable={!isSaving}
												onDragStart={(event) => handleDragStart(event, index)}
												onDragEnd={handleDragEnd}
												onTouchStart={(event) => handleHandleTouchStart(event, index)}
												onTouchMove={handleHandleTouchMove}
												onTouchEnd={handleHandleTouchEnd}
												onTouchCancel={handleHandleTouchEnd}
											>
												<i className="bx bx-menu" aria-hidden="true"></i>
											</span>
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
