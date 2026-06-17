'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";

import AdminSideNav from "@/components/Admin/AdminSideNav";
import { InstructorModal } from "./InstructorModal";
import TablePagination from "./TablePagination";

export const ContentPage = ({ isAdmin }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveInstructor = async (instructorData) => {
    try {
      await axios.post("/api/instructrs", instructorData);

      setShowModal(false);
      setRefreshKey((prev) => prev + 1);
      router.refresh();

      Swal.fire("¡Éxito!", "El instructor ha sido registrado.", "success");
    } catch (error) {
      const message =
        error.response?.data?.message || "No se pudo registrar el instructor.";

      Swal.fire("Error", message, "error");
    }
  };

  return (
    <>
      <div className="main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <AdminSideNav isAdmin={isAdmin} />
            </div>

            <div className="col-lg-9 col-md-8">
              <div className="main-content-box">
                <div className="d-flex justify-content-between mb-3 nav-style1 p-1">
                  <li>
                    <Link href="/admin/instructors" className="active">
                      Instructores
                    </Link>
                  </li>

                  <button
                    className="btn btn-success btn-sm"
                    onClick={handleAddClick}
                  >
                    <i className="fas fa-plus me-1"></i> Registrar
                  </button>
                </div>

                <TablePagination refreshKey={refreshKey} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <InstructorModal
        show={showModal}
        onClose={handleCloseModal}
        onSave={handleSaveInstructor}
      />
    </>
  );
};
