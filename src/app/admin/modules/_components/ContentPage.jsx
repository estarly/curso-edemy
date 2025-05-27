'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { ModuleModal } from "./ModuleModal";
import { ModulesTable } from "./ModulesTable";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import DeleteConfirmationDialog from "@/components/Admin/DeleteConfirmationDialog";
import Header from "../Header";
import Loader from "@/components/loader";

export const ContentPage = ({ modules, isAdmin }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [modulesRefresh, setModulesRefresh] = useState(modules);
  const [loading, setLoading] = useState(false);

  const getActiveModules = async () => {
    setLoading(true);
    const response = await fetch('/api/modules/getActive', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setModulesRefresh(data);
    setLoading(false);
  }
  const handleEditClick = (module) => {
    setSelectedModule(module);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleAddClick = () => {
    setSelectedModule(null);
    setIsEditing(false);
    setShowModal(true);
  };

  const handleDeleteClick = (module) => {
    setSelectedModule(module);
    setShowDeleteDialog(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedModule(null);
  };

  const handleCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
    setSelectedModule(null);
  };

  const handleSaveModule = async (moduleData) => {
    setLoading(true);
    if (isEditing) {
      try {
        const response = await axios.put(
          `/api/modules/${selectedModule.id}`,
          moduleData
        );
        await getActiveModules();
        setShowModal(false);
        setSelectedModule(null);
      } catch (error) {
        if (error.response && error.response.status === 409) {
          toast.error(error.response.data.message || "Ya existe otro módulo con este título.");
        } else {
          toast.error("Error al actualizar el módulo.");
          console.error("Error al actualizar el módulo:", error);
        }
        setLoading(false);
        return;
      }
    } else {
      try {
        const response = await axios.post(
          '/api/modules',
          moduleData
        );
        await getActiveModules();
        setShowModal(false);
        setSelectedModule(null);
      } catch (error) {
        if (error.response && error.response.status === 409) {
          toast.error(error.response.data.message || "Ya existe otro módulo con este título.");
        } else {
          toast.error("Error al crear el módulo.");
          console.error("Error al crear el módulo:", error);
        }
        setLoading(false);
        return;
      }
    }
    setLoading(false);
  };

  const handleConfirmDelete = async () => {
    setLoading(true);
    try {
      console.log("Eliminando módulo:", selectedModule);
      const response = await axios.put(
        `/api/modules/${selectedModule.id}`,
        {
          status: 2,
        }
      );
      await getActiveModules();
      //console.log('Módulo eliminado:', response.data);
    } catch (error) {
      console.error("Error al eliminar el módulo:", error);
    }

    setShowDeleteDialog(false);
    setSelectedModule(null);
    setLoading(false);
  };

  return (
    <>
     <Loader status={loading} title="Cargando módulos..." />
      <div className="main-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <AdminSideNav isAdmin={isAdmin} />
            </div>

            <div className="col-lg-9 col-md-8">
              <div className="main-content-box">
                <Header />
               
                <div className="d-flex justify-content-between mb-3">
                  <h4></h4>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={handleAddClick}
                  >
                    <i className="fas fa-plus me-1"></i> Nuevo Módulo
                  </button>
                </div>

                <ModulesTable
                  items={modulesRefresh}
                  onEditClick={handleEditClick}
                  onDeleteClick={handleDeleteClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para editar o añadir módulo */}
      <ModuleModal
        show={showModal}
        onClose={handleCloseModal}
        module={selectedModule}
        onSave={handleSaveModule}
        isEditing={isEditing}
      />

      {/* Diálogo de confirmación para eliminar */}
      <DeleteConfirmationDialog
        show={showDeleteDialog}
        onClose={handleCloseDeleteDialog}
        onConfirm={handleConfirmDelete}
        title="Eliminar Módulo"
        message={`¿Está seguro de que desea eliminar el módulo "${selectedModule?.title}"? Esta acción no se puede deshacer.`}
      />
    </>
  );
};