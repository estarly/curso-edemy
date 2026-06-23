"use client";

import React, { useState } from "react";
import { Modal, Button, Form, Tab, Nav } from "react-bootstrap";
import Swal from "sweetalert2";

const AssignmentComponent = ({ idAsset, assignmentsTypes }) => {
  const [show, setShow] = useState(false);
  const [selectedTypeId, setSelectedTypeId] = useState(null);
  const [assignments, setAssignments] = useState([]);

  const [formData, setFormData] = useState({
    question: "",
    description: "",
    options: [],
    correctOption: "",
    correctAnswer: "",
    correctOptions: [],
  });

  const [activeTab, setActiveTab] = useState("asignar");

  const selectedType = assignmentsTypes.find((a) => a.id === selectedTypeId);

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

  const resetFormData = (type) => {
    if (type?.config_type?.options) {
      setFormData({
        question: "",
        description: "",
        options: [...type.config_type.options],
        correctOption: "",
        correctAnswer: "",
        correctOptions: [],
      });
    } else {
      setFormData({
        question: "",
        description: "",
        options: [],
        correctOption: "",
        correctAnswer: "",
        correctOptions: [],
      });
    }
  };

  const handleClose = () => {
    setShow(false);
    setSelectedTypeId(null);
    resetFormData(null);
  };

  const handleTypeChange = (e) => {
    const typeId = parseInt(e.target.value, 10);
    setSelectedTypeId(typeId || null);

    const selected = assignmentsTypes.find((a) => a.id === typeId);
    resetFormData(selected);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionChange = (idx, value) => {
    setFormData((prev) => {
      const oldValue = prev.options[idx];
      const newOptions = [...prev.options];
      newOptions[idx] = value;

      return {
        ...prev,
        options: newOptions,
        correctOption: prev.correctOption === oldValue ? value : prev.correctOption,
        correctOptions: prev.correctOptions.map((opt) => (opt === oldValue ? value : opt)),
      };
    });
  };

  const handleAddOption = () => {
    if (formData.options.length < 6) {
      setFormData((prev) => ({
        ...prev,
        options: [...prev.options, ""],
      }));
    }
  };

  const handleRemoveOption = (idx) => {
    if (formData.options.length > 3) {
      setFormData((prev) => {
        const removed = prev.options[idx];
        const newOptions = prev.options.filter((_, i) => i !== idx);
        return {
          ...prev,
          options: newOptions,
          correctOption: prev.correctOption === removed ? "" : prev.correctOption,
          correctOptions: prev.correctOptions.filter((opt) => opt !== removed),
        };
      });
    }
  };

  const handleCorrectOptionChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      correctOption: e.target.value,
    }));
  };

  const handleCorrectOptionsChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      correctOptions: checked
        ? [...prev.correctOptions, value]
        : prev.correctOptions.filter((opt) => opt !== value),
    }));
  };

  const renderOptionsGrid = (allowMultipleCorrect) => (
    <>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <Form.Label className="mb-0">Opciones</Form.Label>
        <button
          type="button"
          className="btn btn-sm btn-outline-success"
          onClick={handleAddOption}
          disabled={formData.options.length >= 6}
          title="Agregar opción"
        >
          <i className="bx bx-plus"></i>
        </button>
      </div>
      <div className="row">
        {formData.options.map((opt, idx) => (
          <div key={idx} className="col-md-6 mb-2">
            <div className="d-flex align-items-center">
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
                  className="ms-2 flex-shrink-0"
                  onClick={() => handleRemoveOption(idx)}
                  title="Eliminar opción"
                >
                  <i className="bx bx-minus"></i>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      <Form.Group className="mb-2 mt-2">
        <Form.Label>
          {allowMultipleCorrect
            ? "Selecciona las respuestas correctas"
            : "Selecciona la respuesta correcta"}
        </Form.Label>
        <div className="row">
          {formData.options.map((opt, idx) => (
            <div key={idx} className="col-md-6">
              <Form.Check
                type={allowMultipleCorrect ? "checkbox" : "radio"}
                name={allowMultipleCorrect ? `correct-multi-${idx}` : "correct-single"}
                label={opt || `Opción ${idx + 1}`}
                value={opt}
                checked={
                  allowMultipleCorrect
                    ? formData.correctOptions.includes(opt)
                    : formData.correctOption === opt
                }
                onChange={allowMultipleCorrect ? handleCorrectOptionsChange : handleCorrectOptionChange}
                disabled={!opt}
              />
            </div>
          ))}
        </div>
      </Form.Group>
    </>
  );

  const renderTypeSpecificInputs = () => {
    if (!selectedType) return null;

    switch (selectedType.name) {
      case "Verdadero o Falso":
        return (
          <Form.Group className="mb-2">
            <Form.Label>Selecciona la respuesta correcta</Form.Label>
            <Form.Select
              name="correctOption"
              value={formData.correctOption}
              onChange={handleInputChange}
            >
              <option value="">Selecciona una opción</option>
              {selectedType.config_type.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </Form.Select>
          </Form.Group>
        );
      case "Selección simple":
        return renderOptionsGrid(false);
      case "Selección múltiple":
        return renderOptionsGrid(true);
      case "Completar":
        return (
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
        );
      default:
        return null;
    }
  };

  const isFormValid = () => {
    if (!formData.question.trim() || !selectedType) return false;

    switch (selectedType.name) {
      case "Verdadero o Falso":
        return !!formData.correctOption;
      case "Selección simple":
        return (
          formData.options.length >= 3 &&
          formData.options.every((opt) => opt.trim()) &&
          !!formData.correctOption
        );
      case "Selección múltiple":
        return (
          formData.options.length >= 3 &&
          formData.options.every((opt) => opt.trim()) &&
          formData.correctOptions.length >= 2
        );
      case "Completar":
        return true;
      default:
        return false;
    }
  };

  const handleAgregarPregunta = async () => {
    if (!selectedType) return;

    const usesOptions = selectedType.id === 1 || selectedType.id === 2 || selectedType.id === 3;

    let respuesta;
    if (selectedType.name === "Verdadero o Falso" || selectedType.name === "Selección simple") {
      respuesta = formData.correctOption;
    } else if (selectedType.name === "Selección múltiple") {
      respuesta = formData.correctOptions;
    } else {
      respuesta = formData.correctAnswer;
    }

    const nuevaPregunta = {
      idAsset: idAsset,
      tipo: selectedType.name,
      tipoId: selectedType.id,
      pregunta: formData.question,
      descripcion: formData.description,
      opciones: usesOptions ? formData.options : [],
      respuesta,
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
        resetFormData(selectedType);

        const resAssignments = await fetch(`/api/assignments/all/${idAsset}`);
        const dataAssignments = await resAssignments.json();
        if (dataAssignments.ok) {
          setAssignments(dataAssignments.items);
        }
      } else {
        Swal.fire("Error", "No se pudo guardar la pregunta.", "error");
      }
    } catch (error) {
      console.error("Error al guardar la pregunta:", error);
      Swal.fire("Error", "Hubo un problema al guardar la pregunta.", "error");
    }
  };

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
        setAssignments((prev) => prev.filter((item) => item.id !== id));
      } else {
        Swal.fire("Error", "No se pudo eliminar la pregunta.", "error");
      }
    }
  };

  const getTypeLabel = (typeId) => {
    const labels = {
      1: "Verdadero o Falso",
      2: "Selección Simple",
      3: "Selección Múltiple",
      4: "Completar",
    };
    return labels[typeId] || "Desconocido";
  };

  return (
    <>
      <button
        className="btn btn-info btn-sm btn-outline-dark"
        onClick={onOpenModal}
      >
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
                    <div className="row mb-2">
                      <div className="col-md-4">
                        <Form.Group>
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
                      </div>
                      <div className="col-md-8">
                        <Form.Group>
                          <Form.Label>Pregunta</Form.Label>
                          <Form.Control
                            type="text"
                            name="question"
                            value={formData.question}
                            onChange={handleInputChange}
                            placeholder="Escribe la pregunta"
                            disabled={!selectedTypeId}
                          />
                        </Form.Group>
                      </div>
                    </div>

                    {selectedTypeId && (
                      <>
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

                        {selectedType?.description && (
                          <div className="mb-3">
                            <span style={{ fontWeight: "bold" }}>Nota: </span>
                            <span>{selectedType.description}</span>
                          </div>
                        )}

                        {renderTypeSpecificInputs()}

                        <div className="mb-3 d-flex justify-content-end">
                          <Button
                            variant="primary"
                            onClick={handleAgregarPregunta}
                            disabled={!isFormValid()}
                          >
                            Agregar pregunta
                          </Button>
                        </div>
                      </>
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
                                <strong>{getTypeLabel(p.assignmentTypeId)}</strong>
                                : {p.title}{". "}
                                <span className="text-success">
                                  {p.assignmentTypeId === 4 && p.config_assignment?.correct_answer}
                                  {(p.assignmentTypeId === 1 || p.assignmentTypeId === 2 || p.assignmentTypeId === 3) &&
                                    Array.isArray(p.config_assignment?.correct_options) &&
                                    " (" + p.config_assignment.correct_options.join(", ") + ")"}
                                </span>
                                <div className="mt-1">
                                  {(p.assignmentTypeId === 1 || p.assignmentTypeId === 2 || p.assignmentTypeId === 3) &&
                                  p.config_assignment?.options ? (
                                    <small className="text-muted">
                                      <strong>Opciones</strong>: {p.config_assignment.options.join(", ")}
                                    </small>
                                  ) : p.assignmentTypeId === 4 ? null : (
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
