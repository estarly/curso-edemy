"use client";

import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const DeleteButton = ({ videoId }) => {
	const router = useRouter();
	const handleDelete = (vdoId) => {
		axios
			.delete(`/api/courses/${vdoId}/video`)
			.then((response) => {
				toast.success(response.data.message);
				router.refresh();
			})
			.catch((error) => {
				toast.error("Something went wrong!");
			});
	};
	return (
		<button
			className="btn btn-danger btn-sm"
			onClick={() => handleDelete(videoId)}
		>
			<i className="bx bx-trash"></i>
		</button>
	);
};

export default DeleteButton;
