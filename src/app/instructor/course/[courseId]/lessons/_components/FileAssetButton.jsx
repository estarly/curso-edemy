"use client";

import React, { useState } from "react";
import { Modal, Button, Tab, Nav } from "react-bootstrap";
import { MediaUpload } from "@/components/Instructor/MediaUpload";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function FileAssetButton({ courseId, lessonId }) {
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("subir");
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    try {
      const response = await axios.get(`/api/courses/${courseId}/lessons/${lessonId}/files-asset`);
      //nsole.log("API Response:", response.data);

      if (response.data.items) {
        setFiles(response.data.items);
      } else {
        console.error("No items field in response", response.data);
        setFiles([]);
      }
    } catch (error) {
      console.error("Error al obtener los archivos:", error);
      setFiles([]);
    }
  };

  const handleDeleteFile = async (fileId) => {
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Este archivo se eliminará de la base de datos.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        const response = await axios.delete(`/api/courses/${courseId}/lessons/${lessonId}/files-asset/${fileId}`);
        Swal.fire("Eliminado", "El archivo fue eliminado.", "success");
        setFiles((prev) => prev.filter((file) => file.id !== fileId));
      } catch (error) {
        console.error("Error al eliminar archivo:", error);
        Swal.fire("Error", "No se pudo eliminar el archivo.", "error");
      }
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast.error("Por favor selecciona un archivo");
      return;
    }

    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post(`/api/courses/${courseId}/lessons/${lessonId}/files-asset`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success(response.data.message || "Archivo subido exitosamente");
      setSelectedFile(null);
      await fetchFiles();
      setActiveTab("existentes");
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || "¡Algo salió mal!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleShow = async () => {
    setShow(true);
    await fetchFiles();
  };

  const handleClose = () => {
    setShow(false);
    setSelectedFile(null);
    setActiveTab("subir");
  };

  return (
    <>
      <button
        className="btn btn-default btn-sm btn-outline-primary"
        onClick={handleShow}
      >
        <i className="bx bx-file"></i>
      </button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Archivos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="subir">Subir archivo</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="existentes">Archivos existentes  ({files.length})</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="subir">
                <div className="row">
                  <div className="col-md-12">
                    <MediaUpload
                      assetType={3}
                      onFileSelect={setSelectedFile}
                      isLoading={isLoading}
                    />
                    <div className="mt-3 d-flex justify-content-end">
                      <Button
                        variant="primary"
                        onClick={handleSubmit}
                        disabled={isLoading || !selectedFile}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Subiendo...
                          </>
                        ) : (
                          <>
                            <i className="bx bx-upload"></i>
                            Subir archivo
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="existentes">
                <div className="row">
                  <div className="col-md-12">
                    {files.length > 0 ? (
                      <ul className="list-group">
                        {files.map((file) => (
                          <li key={file.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>Archivo {file.id}</span>
                            <div className="d-flex gap-2">
                              <a
                                href={file.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-outline-primary"
                                title="Descargar archivo"
                              >
                                <i className="bx bx-download"></i>
                              </a>
                              <button
                                className="btn btn-sm btn-danger"
                                title="Eliminar archivo"
                                onClick={() => handleDeleteFile(file.id)}
                              >
                                <i className="bx bx-trash"></i>
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-muted">No hay archivos disponibles.</div>
                    )}
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}