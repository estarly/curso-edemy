"use client";
import React from "react";
import { useRouter } from "next/navigation";

const EditButton = ({ videoId, onEdit }) => {
  const router = useRouter();

  const handleEdit = (vdoId) => {
    if (onEdit) {
      onEdit(vdoId);
    } else {
      router.push(`/courses/edit-video/${vdoId}`);
    }
  };

  return (
    <button
      className="btn btn-primary btn-sm me-2"
      onClick={() => handleEdit(videoId)}
    >
      <i className="bx bx-edit"></i>
    </button>
  );
};

export default EditButton;