"use client";

import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ApproveNowBtn = ({ courseId }) => {
	const router = useRouter();
	const handleApprove = (approveId) => {
		axios
			.post(`/api/courses/approve/${approveId}`)
			.then((response) => {
				toast.success("Approved!");
				router.refresh();
			})
			.catch((error) => {
				toast.error("Something went wrong!");
				// router.refresh();
			});
	};
	return (
		<div
			className="css-bbq5bh"
			style={{
				fontSize: "12px",
			}}
		>
			<button
				type="button"
				className="btn btn-success btn-sm fs-12 ms-2"
				onClick={() => handleApprove(courseId)}
			>
				Approve Now
			</button>
		</div>
	);
};

export default ApproveNowBtn;
