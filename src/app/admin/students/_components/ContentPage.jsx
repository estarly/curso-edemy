'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";

import AdminSideNav from "@/components/Admin/AdminSideNav";
import { StudentModal } from "./StudentModal";
import TablePagination from "./TablePagination";

export const ContentPage = ({ isAdmin }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddClick = () => {
    setSelectedItem(null);
    setIsEditing(false);
    setShowModal(true);
  };

  const handleEditClick = (student) => {
    setSelectedItem(student);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setIsEditing(false);
  };

  const handleSaveStudent = async (studentData) => {
    try {
      if (isEditing) {
        await axios.put(`/api/students/${selectedItem.id}`, studentData);
        Swal.fire("¡Éxito!", "El estudiante ha sido actualizado.", "success");
      } else {
        await axios.post("/api/students", studentData);
        Swal.fire("¡Éxito!", "El estudiante ha sido registrado.", "success");
      }

      setShowModal(false);
      setSelectedItem(null);
      setIsEditing(false);
      setRefreshKey((prev) => prev + 1);
      router.refresh();
    } catch (error) {
      const message =
        error.response?.data?.message ||
        (isEditing
          ? "No se pudo actualizar el estudiante."
          : "No se pudo registrar el estudiante.");

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
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <ul className="nav-style1 mb-0">
                    <li>
                      <Link href="/admin/students" className="active">
                        Estudiantes
                      </Link>
                    </li>
                    <li>
                      <Link href="/admin/students/assign-module">
                        Asignar módulo
                      </Link>
                    </li>
                  </ul>

                  <button
                    className="btn btn-success btn-sm"
                    onClick={handleAddClick}
                  >
                    <i className="fas fa-plus me-1"></i> Registrar
                  </button>
                </div>

                <TablePagination
                  refreshKey={refreshKey}
                  onEditClick={handleEditClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <StudentModal
        show={showModal}
        onClose={handleCloseModal}
        onSave={handleSaveStudent}
        item={selectedItem}
        isEditing={isEditing}
      />
    </>
  );
};
