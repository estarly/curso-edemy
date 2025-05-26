"use client";
import React, { useState } from "react";

export const Selectors = ({ courses, onConsult }) => {
  // Estado para manejar los selectores
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const lessons = selectedCourse ? selectedCourse.assets : [];
  const assignments = selectedLesson ? selectedLesson.assignments : [];

  return (
    <>
      <div className="instructor-header">
        <div className="instructor-header-content box-shadow border rounded-3">
          <div className="col-md-6">
            <h4>Revision de asignaciones</h4>
          </div>
          <br />
          <div className="d-flex align-items-end gap-3">
            <div className="selector-fixed-width">
              <label className="form-label">Selecciona un curso</label>
              <select
                className="form-select"
                style={{ minWidth: 250 }}
                value={selectedCourse ? selectedCourse.id : ""}
                onChange={(e) => {
                  const course = courses.find((course) => course.id === parseInt(e.target.value));
                  setSelectedCourse(course);
                  setSelectedLesson(null); // Limpiar lección seleccionada
                  setSelectedAssignment(null); // Limpiar asignación seleccionada
                }}
              >
                <option value="">Selecciona un curso</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.id} - {course.title}
                  </option>
                ))}
              </select>
            </div>

            {selectedCourse && (
              <div className="selector-fixed-width">
                <label className="form-label">Selecciona una lección</label>
                <select
                  className="form-select"
                  style={{ minWidth: 250 }}
                  value={selectedLesson ? selectedLesson.id : ""}
                  onChange={(e) => {
                    const lesson = lessons.find((lesson) => lesson.id === parseInt(e.target.value));
                    setSelectedLesson(lesson);
                    setSelectedAssignment(null); // Limpiar asignación seleccionada
                  }}
                >
                  <option value="">Selecciona una lección</option>
                  {lessons.map((lesson) => (
                    <option key={lesson.id} value={lesson.id}>
                     {lesson.id} - {lesson.title}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selectedLesson && (
              <div className="selector-fixed-width">
                <label className="form-label">Selecciona una asignación</label>
                <select
                  className="form-select"
                  style={{ minWidth: 250 }}
                  value={selectedAssignment ? selectedAssignment.id : ""}
                  onChange={(e) => {
                    const assignment = assignments.find((assignment) => assignment.id === parseInt(e.target.value));
                    setSelectedAssignment(assignment);
                  }}
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

            {selectedAssignment && (
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => onConsult(selectedCourse, selectedLesson, selectedAssignment)}
                >
                  Consultar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};