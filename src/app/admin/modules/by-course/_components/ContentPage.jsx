'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";

import { ModuleModal } from "./ModuleModal";
import { ModulesByCourseTable } from "./ModulesByCourseTable";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import DeleteConfirmationDialog from "@/components/Admin/DeleteConfirmationDialog";
import Header from "../../Header";
import CategorySelect from "@/components/FormHelpers/CategorySelect";

export const ContentPage = ({ modules, isAdmin, courseModules, moduleId }) => {  
  const [showModal, setShowModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);


  const handleModuleChange = (module) => {
    setSelectedModule(module);
  };

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
    if (isEditing) {
      try {
        // Actualizar un módulo existente
        console.log("Actualizando módulo:", moduleData);
        const response = await axios.put(
          `/api/modules/${selectedModule.id}`,
          moduleData
        );
        console.log('Módulo actualizado:', response.data);
      } catch (error) {
        console.error("Error al actualizar el módulo:", error);
      }
    } else {
      try {
        // Crear un nuevo módulo
        const response = await axios.post(
          '/api/modules',
          moduleData
        );
        console.log('Módulo creado:', response.data);
      } catch (error) {
        console.error("Error al crear el módulo:", error);
      }
    }

    setShowModal(false);
    setSelectedModule(null);
  };

  const handleConfirmDelete = async () => {
    try {
      console.log("Eliminando módulo:", selectedModule);
      const response = await axios.put(
        `/api/modules/${selectedModule.id}`,
        {
          status: 2,
        }
      );
      console.log('Módulo eliminado:', response.data);
    } catch (error) {
      console.error("Error al eliminar el módulo:", error);
    }

    setShowDeleteDialog(false);
    setSelectedModule(null);
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
                <Header />
                <div className="d-flex justify-content-end mb-3">
                  <CategorySelect label="Filtrar por módulo:" placeholder="Seleccione un módulo" valueId={selectedModule} data={modules} onChange={handleModuleChange}/>
                </div>

                <ModulesByCourseTable
                  items={courseModules}
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