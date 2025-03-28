'use client';
import React, { useState } from "react";
import axios from "axios";

import Header from "../../courses/Header";
import { BannerModal } from "./BannerModal";
import { BannersTable } from "./BannersTable";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import DeleteConfirmationDialog from "@/components/Admin/DeleteConfirmationDialog";

export const ContentPage = ({ items, isAdmin }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (banner) => {
    setSelectedBanner(banner);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleAddClick = () => {
    setSelectedBanner(null);
    setIsEditing(false);
    setShowModal(true);
  };

  const handleDeleteClick = (banner) => {
    setSelectedBanner(banner);
    setShowDeleteDialog(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBanner(null);
  };

  const handleCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
    setSelectedBanner(null);
  };

  const handleSaveBanner = async (bannerData) => {
    if (isEditing) {
      try {
        const response = await axios.put(
          `/api/banners/${selectedBanner.id}`,
          bannerData
        );
        console.log('Banner actualizado:', response.data);
      } catch (error) {
        console.error("Error al actualizar el banner:", error);
      }
    } else {
      try {
        const response = await axios.post(
          '/api/banners',
          bannerData
        );
        console.log('Banner creado:', response.data);
      } catch (error) {
        console.error("Error al crear el banner:", error);
      }
    }

    setShowModal(false);
    setSelectedBanner(null);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await axios.delete(
        `/api/banners/${selectedBanner.id}`
      );
      console.log('Banner eliminado:', response.data);
    } catch (error) {
      console.error("Error al eliminar el banner:", error);
    }

    setShowDeleteDialog(false);
    setSelectedBanner(null);
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
                  <h4>Banners</h4>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={handleAddClick}
                  >
                    <i className="fas fa-plus me-1"></i> Nuevo Banner
                  </button>
                </div>

                <BannersTable
                  items={items}
                  onEditClick={handleEditClick}
                  onDeleteClick={handleDeleteClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BannerModal
        show={showModal}
        onClose={handleCloseModal}
        banner={selectedBanner}
        onSave={handleSaveBanner}
        isEditing={isEditing}
      />

      <DeleteConfirmationDialog
        show={showDeleteDialog}
        onClose={handleCloseDeleteDialog}
        onConfirm={handleConfirmDelete}
        title="Eliminar Banner"
        message={`¿Está seguro de que desea eliminar el banner "${selectedBanner?.name}"? Esta acción no se puede deshacer.`}
      />
    </>
  );
};