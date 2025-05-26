"use client";

import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Swal from 'sweetalert2';

const DeleteButton = ({ assetId }) => {
	const router = useRouter();
	const handleDelete = (assetId) => {
		Swal.fire({
			title: '¿Estás seguro?',
			text: "¡No podrás revertir esta acción!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sí, eliminar',
			cancelButtonText: 'Cancelar',
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`/api/courses/${assetId}/delete`)
					.then((response) => {
						toast.success(response.data.message);
						router.refresh();
					})
					.catch((error) => {
						toast.error("¡Algo salió mal!");
					});
			}
		});
	};
	return (
		<button
			className="btn btn-danger btn-sm"
			onClick={() => handleDelete(assetId)}
		>
			<i className="bx bx-trash"></i>
		</button>
	);
};

export default DeleteButton;
