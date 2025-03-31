'use client';
import React, { useState } from "react";
import axios from "axios";

import Header from "../../courses/Header";
import { CategoryModal } from "./CategoryModal";
import { CategoriesTable } from "./CategoriesTable";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import DeleteConfirmationDialog from "@/components/Admin/DeleteConfirmationDialog";

export const ContentPage = ({ categories, isAdmin }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleAddClick = () => {
    setSelectedCategory(null);
    setIsEditing(false);
    setShowModal(true);
  };

  const handleDeleteClick = (category) => {
    setSelectedCategory(category);
    setShowDeleteDialog(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  const handleCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
    setSelectedCategory(null);
  };

  const handleSaveCategory = async (categoryData) => {
    if (isEditing) {
      // Aquí implementarías la lógica para actualizar una categoría existente
      console.log("Actualizando categoría:", categoryData);
      const response = await axios.put(
        `/api/categories/${selectedCategory.id}`,
        categoryData
      );
      console.log('Categoría actualizada:', response.data);
    } else {
      const response = await axios.post(
        '/api/categories',
        categoryData
      );
      console.log('Categoría creada:', response.data);

      // Aquí implementarías la lógica para crear una nueva categoría
      console.log("Creando nueva categoría:", categoryData);
    }

    setShowModal(false);
    setSelectedCategory(null);
  };
  
  const handleConfirmDelete = async () => {
    console.log("Eliminando categoría:", selectedCategory);
    const response = await axios.put(
      `/api/categories/${selectedCategory.id}`,
      {
        status: 2,
      }
    );

   /* const response = await axios.delete(
      `/api/categories/${selectedCategory.id}`
    );*/
    console.log('Categoría eliminada:', response.data);

    // Aquí implementarías la lógica para eliminar la categoría

    setShowDeleteDialog(false);
    setSelectedCategory(null);
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
                <div className="d-flex justify-content-between mb-3">
                  <h4>Categorías</h4>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={handleAddClick}
                  >
                    <i className="fas fa-plus me-1"></i> Nueva Categoría
                  </button>
                </div>

                <CategoriesTable
                  categories={categories}
                  onEditClick={handleEditClick}
                  onDeleteClick={handleDeleteClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para editar o añadir categoría */}
      <CategoryModal
        show={showModal}
        onClose={handleCloseModal}
        category={selectedCategory}
        onSave={handleSaveCategory}
        isEditing={isEditing}
      />

      {/* Diálogo de confirmación para eliminar */}
      <DeleteConfirmationDialog
        show={showDeleteDialog}
        onClose={handleCloseDeleteDialog}
        onConfirm={handleConfirmDelete}
        title="Eliminar Categoría"
        message={`¿Está seguro de que desea eliminar la categoría "${selectedCategory?.name}"? Esta acción no se puede deshacer.`}
      />
    </>
  );
};
