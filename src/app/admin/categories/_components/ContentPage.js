'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

import Header from "../../courses/Header";
import { CategoryModal } from "./CategoryModal";
import { CategoriesTable } from "./CategoriesTable";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import DeleteConfirmationDialog from "@/components/Admin/DeleteConfirmationDialog";

export const ContentPage = ({ categories, isAdmin }) => {
  const router = useRouter();
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
    try {
      let response;

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      if (isEditing) {
        if (categoryData instanceof FormData && !categoryData.has('id')) {
          categoryData.append('id', selectedCategory.id);
        }

        response = await axios.put(
          `/api/categories/${selectedCategory.id}`,
          categoryData,
          config
        );
      } else {
        response = await axios.post(
          '/api/categories',
          categoryData,
          config
        );
      }

      setShowModal(false);
      setSelectedCategory(null);
      router.refresh();

    } catch (error) {
      if (error.response) {
        console.error('Respuesta del servidor:', error.response.data);
      } else if (error.request) {
        console.error('No se recibió respuesta del servidor');
      }
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.put(
        `/api/categories/${selectedCategory.id}`,
        {
          status: 2,
        }
      );

      setShowDeleteDialog(false);
      setSelectedCategory(null);
      router.refresh();
    } catch (error) {
      if (error.response) {
        console.error('Respuesta del servidor:', error.response.data);
      }
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

      <CategoryModal
        show={showModal}
        onClose={handleCloseModal}
        category={selectedCategory}
        onSave={handleSaveCategory}
        isEditing={isEditing}
      />

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
