'use client';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { ModuleModal } from "./ModuleModal";
import { ModulesByCourseTable } from "./ModulesByCourseTable";
import AdminSideNav from "@/components/Admin/AdminSideNav";
import DeleteConfirmationDialog from "@/components/Admin/DeleteConfirmationDialog";
import Header from "../../Header";
import CategorySelect from "@/components/FormHelpers/CategorySelect";

export const ContentPage = ({
  modules,
  isAdmin,
  categories,
  initialCourses,
  initialModuleId,
  initialCategoryId
}) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedModule, setSelectedModule] = useState(initialModuleId);
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryId);
  const [courses, setCourses] = useState(initialCourses);

  // Cargar cursos cuando cambia la categoría
  useEffect(() => {
    if (selectedCategory && selectedModule) {
      fetch('/api/courses/by-category', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ categoryId: selectedCategory, moduleId: selectedModule }),
      })
        .then((res) => res.json())
        .then((data) => setCourses(data.items))
        .catch(() => setCourses([]));
    }
  }, [selectedCategory, selectedModule]);

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedModule(null);
  };

  const handleCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
    setSelectedModule(null);
  };


  const handleConfirmDelete = async () => {
    const result = await Swal.fire({
      title: "¿Eliminar asignación?",
      text: "¿Estás seguro de que deseas eliminar la relación entre el curso y el módulo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        console.log("Eliminando módulo:", selectedModule);
        const response = await fetch("/api/course-modules/deleteAsign", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            courseId: selectedModule.courseId, // Asegúrate de tener estos datos
            moduleId: selectedModule.moduleId,
          }),
        });
        const data = await response.json();
        console.log('Relación eliminada:', data);
        if (response.ok) {
          Swal.fire("¡Eliminado!", "La relación ha sido eliminada.", "success");
        } else {
          Swal.fire("Error", data.error || "No se pudo eliminar la relación.", "error");
        }
      } catch (error) {
        console.error("Error al eliminar la relación:", error);
        Swal.fire("Error", "No se pudo eliminar la relación.", "error");
      }
      setShowDeleteDialog(false);
      setSelectedModule(null);
    }
  };

  const handleAssign = async (course) => {
    const result = await Swal.fire({
      title: "¿Asignar curso?",
      text: `¿Deseas asignar el curso "${course.title}" al módulo seleccionado?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, asignar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch("/api/course-modules/asign", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            courseId: course.id,
            moduleId: selectedModule,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          Swal.fire("¡Asignado!", "El curso ha sido asignado.", "success");
        } else {
          Swal.fire("Error", data.error || "No se pudo asignar el curso.", "error");
        }
      } catch (error) {
        Swal.fire("Error", "No se pudo asignar el curso.", "error");
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
                <Header />
                <div className="d-flex gap-3 mb-3">
                  <CategorySelect
                    label="Módulo:"
                    placeholder="Seleccione un módulo"
                    valueId={selectedModule}
                    data={modules}
                    onChange={setSelectedModule}
                  />
                  <CategorySelect
                    label="Categoría:"
                    placeholder="Seleccione una categoría"
                    valueId={selectedCategory}
                    data={categories}
                    onChange={setSelectedCategory}
                  />
                </div>

                <table className="table align-middle table-hover fs-14">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Curso</th>
                      <th>Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courses && courses.length > 0 ? (
                      courses.map((course) => (
                        <tr key={course.id}>
                          <td>
                            <img src={course.image} alt={course.title} width={100} height={100} className="img-fluid" />
                          </td>
                          <td>
                            <strong>{course.id} - {course.title}</strong>
                            <br />
                            <div className="max-300px max-height-60">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: course.description,
                                }}
                              />
                            </div>
                          </td>
                          <td>
                            <div className="d-flex gap-2">
                              {!course.isAssigned ? (
                                <button
                                  className="btn btn-primary btn-sm"
                                  onClick={() => handleAssign(course)}
                                >
                                  Asignar
                                </button>
                              ) : (
                                <button
                                  className="btn btn-danger btn-sm"
                                  onClick={() => handleDelete(course)}
                                >
                                  Eliminar
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="text-center">
                          No hay cursos disponibles
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para editar o añadir módulo */}
      {/*<ModuleModal
        show={showModal}
        onClose={handleCloseModal}
        module={selectedModule}
        onSave={handleSaveModule}
        isEditing={isEditing}
      />*/}

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