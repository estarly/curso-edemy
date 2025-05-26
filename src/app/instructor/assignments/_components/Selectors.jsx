"use client"; 
import React, { useState } from "react";

export const Selectors = ({ courses, onConsult }) => {
  // Estado para manejar los selectores
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  // Obtener lecciones del curso seleccionado
  const lessons = selectedCourse ? selectedCourse.assets : [];

  // Obtener asignaciones de la lección seleccionada
  const assignments = selectedLesson ? selectedLesson.assignment : [];

  return (
    <>
      {/* Selector de cursos */}
      <div className="mb-4">
        <label className="form-label">Selecciona un curso</label>
        <select
          className="form-select"
          onChange={(e) => setSelectedCourse(courses.find((course) => course.id === parseInt(e.target.value)))}
        >
          <option value="">Selecciona un curso</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
      </div>

      {/* Selector de lecciones (solo visible si hay un curso seleccionado) */}
      {selectedCourse && (
        <div className="mb-4">
          <label className="form-label">Selecciona una lección</label>
          <select
            className="form-select"
            onChange={(e) => setSelectedLesson(lessons.find((lesson) => lesson.id === parseInt(e.target.value)))}
          >
            <option value="">Selecciona una lección</option>
            {lessons.map((lesson) => (
              <option key={lesson.id} value={lesson.id}>
                {lesson.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Selector de asignaciones (solo visible si hay una lección seleccionada) */}
      {selectedLesson && (
        <div className="mb-4">
          <label className="form-label">Selecciona una asignación</label>
          <select
            className="form-select"
            onChange={(e) => setSelectedAssignment(assignments.find((assignment) => assignment.id === parseInt(e.target.value)))}
          >
            <option value="">Selecciona una asignación</option>
            {assignments.map((assignment) => (
              <option key={assignment.id} value={assignment.id}>
                {assignment.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Botón "Consultar" (solo visible si hay una asignación seleccionada) */}
      {selectedAssignment && (
        <div className="mb-4">
          <button className="btn btn-primary" onClick={() => onConsult(selectedCourse, selectedLesson, selectedAssignment)}>
            Consultar
          </button>
        </div>
      )}
    </>
  );
};