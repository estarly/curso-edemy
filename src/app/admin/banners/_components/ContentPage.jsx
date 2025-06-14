'use client';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

import Header from "../../courses/Header";
import { BannerModal } from "./BannerModal";
import { BannersTable } from "./BannersTable";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import DeleteConfirmationDialog from "@/components/Admin/DeleteConfirmationDialog";
import Link from "next/link";

export const ContentPage = ({ items, isAdmin }) => {
  const router = useRouter();
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
    try {
      let response;

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      };

      if (isEditing) {
        if (bannerData instanceof FormData && !bannerData.has('id')) {
          bannerData.append('id', selectedBanner.id);
        }

        response = await axios.put(
          `/api/banners/${selectedBanner.id}`,
          bannerData,
          config
        );
      } else {
        response = await axios.post(
          '/api/banners',
          bannerData,
          config
        );
      }

      setShowModal(false);
      setSelectedBanner(null);
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
      await axios.delete(`/api/banners/${selectedBanner.id}`);

      setShowDeleteDialog(false);
      setSelectedBanner(null);
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
                  <li>
                    <Link
                      href="/admin/banners"
                      className="active"
                    >
                      Banners
                    </Link>
                  </li>

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
        message={`¿Está seguro de que desea eliminar el banner "${selectedBanner?.name}"?  Esta acción no se puede deshacer.`}
      />
    </>
  );
};