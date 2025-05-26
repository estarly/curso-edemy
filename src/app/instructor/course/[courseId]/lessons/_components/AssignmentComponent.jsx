"use client";

import React, { useState } from "react";
import { Modal, Button, Form, Tab, Nav } from "react-bootstrap";
import Swal from "sweetalert2";

const AssignmentComponent = ({ idAsset, assignmentsTypes }) => {
  const [show, setShow] = useState(false);
  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [assignments, setAssignments] = useState([]);

  // Estado para los valores de los inputs de cada pregunta
  const [formData, setFormData] = useState({
    question: "",
    description: "",
    options: [],
    correctOption: "",
    correctAnswer: "",
    correctOptions: [],
  });

  // Estado para la pestaña activa
  const [activeTab, setActiveTab] = useState("asignar");

  const onOpenModal = async () => {
    setShow(true);
    try {
      const res = await fetch(`/api/assignments/all/${idAsset}`);
      const data = await res.json();
      if (data.ok) {
        setAssignments(data.items);
      } else {
        console.error("Error al obtener las preguntas:", data.error);
      }
    } catch (error) {
      console.error("Error al obtener las preguntas:", error);
    }
  };

  const handleClose = () => {
    setShow(false);
    setSelectedTypeId(null);
    setFormData({
      question: "",
      description: "",
      options: [],
      correctOption: "",
      correctAnswer: "",
      correctOptions: [],
    });
  };

  // Cuando seleccionas un tipo de asignación
  const handleTypeChange = (e) => {
    const typeId = parseInt(e.target.value, 10);
    setSelectedTypeId(typeId);

    // Si el tipo tiene opciones, inicialízalas
    const selected = assignmentsTypes.find((a) => a.id === typeId);
    if (selected && selected.config_type.options) {
      setFormData((prev) => ({
        ...prev,
        options: [...selected.config_type.options], // Copia para poder editar
        correctOption: "",
        correctAnswer: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        options: [],
        correctOption: "",
        correctAnswer: "",
      }));
    }
  };

  // Manejar cambios en los inputs de pregunta
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Nuevo: Manejar cambios en las opciones de selección múltiple
  const handleOptionChange = (idx, value) => {
    setFormData((prev) => {
      const newOptions = [...prev.options];
      newOptions[idx] = value;
      return {
        ...prev,
        options: newOptions,
      };
    });
  };

  // Nuevo: Agregar una opción (máximo 6)
  const handleAddOption = () => {
    if (formData.options.length < 6) {
      setFormData((prev) => ({
        ...prev,
        options: [...prev.options, ""],
      }));
    }
  };

  // Nuevo: Eliminar una opción (mínimo 3)
  const handleRemoveOption = (idx) => {
    if (formData.options.length > 3) {
      setFormData((prev) => {
        const newOptions = prev.options.filter((_, i) => i !== idx);
        // También eliminamos la opción de correctOptions si estaba seleccionada
        const newCorrectOptions = prev.correctOptions.filter(opt => opt !== prev.options[idx]);
        return {
          ...prev,
          options: newOptions,
          correctOptions: newCorrectOptions,
        };
      });
    }
  };

  // Nuevo: Manejar selección múltiple de respuestas correctas
  const handleCorrectOptionsChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      let newCorrectOptions = [...prev.correctOptions];
      if (checked) {
        newCorrectOptions.push(value);
      } else {
        newCorrectOptions = newCorrectOptions.filter(opt => opt !== value);
      }
      return {
        ...prev,
        correctOptions: newCorrectOptions,
      };
    });
  };

  // Renderizar inputs según el tipo seleccionado
  const renderInputs = () => {
    const selected = assignmentsTypes.find((a) => a.id === selectedTypeId);
    if (!selected) return null;

    switch (selected.name) {
      case "Verdadero o Falso":
        return (
          <>
            <Form.Group className="mb-2">
              <Form.Label>Pregunta</Form.Label>
              <Form.Control
                type="text"
                name="question"
                value={formData.question}
                onChange={handleInputChange}
                placeholder="Escribe la pregunta"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descripción (opcional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Agrega una descripción para la pregunta (opcional)"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Selecciona la respuesta correcta</Form.Label>
              <Form.Select
                name="correctOption"
                value={formData.correctOption}
                onChange={handleInputChange}
              >
                <option value="">Selecciona una opción</option>
                {selected.config_type.options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </>
        );
      case "Selección múltiple":
        return (
          <>
            <Form.Group className="mb-2">
              <Form.Label>Pregunta</Form.Label>
              <Form.Control
                type="text"
                name="question"
                value={formData.question}
                onChange={handleInputChange}
                placeholder="Escribe la pregunta"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descripción (opcional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Agrega una descripción para la pregunta (opcional)"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Opciones</Form.Label>
              {formData.options.map((opt, idx) => (
                <div key={idx} className="d-flex align-items-center mb-1">
                  <Form.Control
                    type="text"
                    value={opt}
                    onChange={(e) => handleOptionChange(idx, e.target.value)}
                    placeholder={`Opción ${idx + 1}`}
                  />
                  {formData.options.length > 3 && (
                    <Button
                      variant="danger"
                      size="sm"
                      className="ms-2"
                      onClick={() => handleRemoveOption(idx)}
                      title="Eliminar opción"
                    >
                      <i className="bx bx-minus"></i>
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="success"
                size="sm"
                className="mt-2"
                onClick={handleAddOption}
                disabled={formData.options.length >= 6}
              >
                <i className="bx bx-plus"></i> Agregar opción
              </Button>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Selecciona las respuestas correctas</Form.Label>
              <div>
                {formData.options.map((opt, idx) => (
                  <Form.Check
                    key={idx}
                    type="checkbox"
                    label={opt}
                    value={opt}
                    checked={formData.correctOptions.includes(opt)}
                    onChange={handleCorrectOptionsChange}
                    disabled={!opt}
                  />
                ))}
              </div>
            </Form.Group>
          </>
        );
      case "Completar":
        return (
          <>
            <Form.Group className="mb-2">
              <Form.Label>Pregunta</Form.Label>
              <Form.Control
                type="text"
                name="question"
                value={formData.question}
                onChange={handleInputChange}
                placeholder="Escribe la pregunta"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Descripción (opcional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Agrega una descripción para la pregunta (opcional)"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Respuesta correcta</Form.Label>
              <Form.Control
                type="text"
                name="correctAnswer"
                value={formData.correctAnswer}
                onChange={handleInputChange}
                placeholder="Escribe la respuesta correcta"
              />
            </Form.Group>
          </>
        );
      default:
        return null;
    }
  };

  // Función para agregar pregunta
  const handleAgregarPregunta = async () => {
    const selected = assignmentsTypes.find((a) => a.id === selectedTypeId);
    if (!selected) return;

    let nuevaPregunta = {
      idAsset: idAsset,
      tipo: selected.name,
      tipoId: selected.id,
      pregunta: formData.question,
      descripcion: formData.description,
      opciones: formData.options,
      respuesta: selected.name === "Verdadero o Falso" 
        ? formData.correctOption 
        : selected.name === "Selección múltiple" 
        ? formData.correctOptions 
        : formData.correctAnswer,
    };

    try {
      const res = await fetch(`/api/assignments/save/${idAsset}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaPregunta),
      });
      const data = await res.json();

      if (data.ok) {
        Swal.fire("Guardado", "La pregunta fue guardada.", "success");
        // Limpiar el formulario
        setFormData({
          question: "",
          description: "",
          options: [],
          correctOption: "",
          correctAnswer: "",
          correctOptions: [],
        });
        // Opcional: recargar las preguntas
        // location.reload();
      } else {
        Swal.fire("Error", "No se pudo guardar la pregunta.", "error");
      }
    } catch (error) {
      console.error("Error al guardar la pregunta:", error);
      Swal.fire("Error", "Hubo un problema al guardar la pregunta.", "error");
    }
  };

  // Función para eliminar pregunta de la base de datos
  const handleEliminarPreguntaDB = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta pregunta se eliminará de la base de datos.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      const res = await fetch(`/api/assignments/delete/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.ok) {
        Swal.fire("Eliminado", "La pregunta fue eliminada.", "success");
        // Opcional: recarga la página o reconsulta las preguntas
        // location.reload();
      } else {
        Swal.fire("Error", "No se pudo eliminar la pregunta.", "error");
      }
    }
  };

  return (
    <>
      <button
			className="btn btn-info btn-sm" onClick={onOpenModal}>
        <i className="bx bx-task"></i>
      </button>

     

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Asignar tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="asignar">Asignar nueva tarea</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="listado">
                  Tareas asignadas{" "}
                  {assignments.length > 0 && (
                    <span>({assignments.length})</span>
                  )}
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="asignar">
                <div className="row">
                  <div className="col-md-12">
                    <Form.Group className="mb-3">
                      <Form.Label>Tipo de pregunta</Form.Label>
                      <Form.Select
                        value={selectedTypeId || ""}
                        onChange={handleTypeChange}
                      >
                        <option value="">Selecciona un tipo</option>
                        {assignmentsTypes.map((a) => (
                          <option key={a.id} value={a.id}>{a.name}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                    {selectedTypeId && (
                      <div className="mb-3">
                        <span style={{ fontWeight: "bold" }}>Nota: </span>
                        <span>
                          {
                            assignmentsTypes.find((a) => a.id === selectedTypeId)
                              ?.description
                          }
                        </span>
                      </div>
                    )}
                    {renderInputs()}
                    {/* Botón para agregar pregunta */}
                    {selectedTypeId && (
                      <div className="mb-3 d-flex justify-content-end">
                        <Button
                          variant="primary"
                          onClick={handleAgregarPregunta}
                          disabled={
                            !formData.question ||
                            (["Verdadero o Falso"].includes(
                              assignmentsTypes.find((a) => a.id === selectedTypeId)?.name
                            ) && !formData.correctOption) ||
                            (assignmentsTypes.find((a) => a.id === selectedTypeId)?.name === "Selección múltiple" &&
                              (formData.options.length < 3 ||
                                formData.options.some(opt => !opt) ||
                                formData.correctOptions.length === 0)
                            )
                            // Para "Completar" la respuesta NO es requerida
                          }
                        >
                          Agregar pregunta
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="listado">
                <div className="row">
                  <div className="col-md-12">
                    {assignments.length > 0 ? (
                      <div className="mt-2">
                        <h5>Preguntas:</h5>
                        <ul className="list-group">
                          {assignments.map((p) => (
                            <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
                              <span>
                                <strong>
                                  {p.assignmentTypeId === 1 && "Verdadero o Falso"}
                                  {p.assignmentTypeId === 2 && "Selección múltiple"}
                                  {p.assignmentTypeId === 3 && "Completar"}
                                </strong>
                                : {p.title}{" "}
                                <span className="text-success">
                                  {p.assignmentTypeId === 1 && p.config_assignment?.correct_option}
                                  {p.assignmentTypeId === 2 && Array.isArray(p.config_assignment?.correct_options)
                                    ? p.config_assignment.correct_options.join(", ")
                                    : ""}
                                  {p.assignmentTypeId === 3 && p.config_assignment?.correct_answer}
                                </span>
                                {/* Mostrar las opciones debajo de la respuesta correcta */}
                                <div className="mt-1">
                                  {p.assignmentTypeId === 2 && p.config_assignment?.options ? (
                                    <small className="text-muted">
                                      Opciones: {p.config_assignment.options.join(", ")}
                                    </small>
                                  ) : (
                                    <small className="text-muted">(Por revisar)</small>
                                  )}
                                </div>
                              </span>
                              <button
                                className="btn btn-sm btn-danger"
                                title="Eliminar"
                                onClick={() => handleEliminarPreguntaDB(p.id)}
                              >
                                <i className="bx bx-trash"></i>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="text-muted">No hay preguntas agregadas.</div>
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
};

export default AssignmentComponent;
