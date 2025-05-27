'use client';
import React, { useState, useEffect } from "react";
import { Selectors } from "./Selectors";

export const Content = ({items}) => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([
    { id: 1, name: "Estudiante 1" },
    { id: 2, name: "Estudiante 2" },
    { id: 3, name: "Estudiante 3" },
    { id: 4, name: "Estudiante 4" },
    { id: 5, name: "Estudiante 5" },
    { id: 6, name: "Estudiante 6" },
    { id: 7, name: "Estudiante 7" },
    { id: 8, name: "Estudiante 8" },
    { id: 9, name: "Estudiante 9" },
    { id: 10, name: "Estudiante 10" }
  ]);
  const [assignments, setAssignments] = useState([]);
   
  // Cargar los cursos al montar el componente
 useEffect(() => {
    setCourses(items.courses);
    console.log(courses, "courses");
  }, []);

  // Nueva función para consultar estudiantes desde la API
  const fetchStudentsByAsset = async (courseId, lessonId, assignmentId) => {
    try {
      // Construir la URL con los parámetros de la query string
      const url = `/api/assignments/studiants?courseId=${courseId}&lessonId=${lessonId}&assignmentId=${assignmentId}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.ok) {
        console.log(data.items, "data.items");
        //setStudents(data.items);
      } else {
        setStudents([]);
        console.error("Error al obtener los estudiantes:", data.error);
      }
    } catch (error) {
      setStudents([]);
      console.error("Error al obtener los estudiantes:", error);
    }
  };

  // Modifica handleConsult para usar la nueva función
  const handleConsult = async (selectedCourse, selectedLesson, selectedAssignment) => {
    if (selectedCourse && selectedLesson) {
      await fetchStudentsByAsset(
        selectedCourse.id,
        selectedLesson.id,
        selectedAssignment ? selectedAssignment.id : ""
      );
    } else {
      setStudents([]);
    }
  };

  return (
    <>
      <div className="pb-1">
        <div className="container">
          <div className="row justify-content-center">
            <Selectors courses={courses} onConsult={handleConsult} />

            {students.length > 0 && (
              <div className="mt-3">
                <h4>Estudiantes relacionados</h4>
                <div className="accordion" id="studentsAccordion">
                  {students.map((student, idx) => (
                    <div className="accordion-item" key={student.id}>
                      <h2 className="accordion-header" id={`heading${student.id}`}>
                        <button
                          className={`accordion-button ${idx !== 0 ? "collapsed" : ""}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${student.id}`}
                          aria-expanded={idx === 0 ? "true" : "false"}
                          aria-controls={`collapse${student.id}`}
                        >
                          <img
                            src={student.image || "https://ui-avatars.com/api/?name=" + encodeURIComponent(student.name)}
                            alt={student.name}
                            style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 12 }}
                          />
                          {student.name}
                        </button>
                      </h2>
                      <div
                        id={`collapse${student.id}`}
                        className={`accordion-collapse collapse${idx === 0 ? " show" : ""}`}
                        aria-labelledby={`heading${student.id}`}
                        data-bs-parent="#studentsAccordion"
                      >
                        <div className="accordion-body">
                          <strong>Tareas realizadas:</strong>
                          <ul>
                            {(student.tasks || [
                              { id: 1, title: "Tarea 1", status: "Completada" },
                              { id: 2, title: "Tarea 2", status: "Pendiente" }
                            ]).map((task) => (
                              <li key={task.id}>
                                {task.title} - <span className={task.status === "Completada" ? "text-success" : "text-warning"}>{task.status}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div><br /><br /><br /><br />
      </div>
    </>
  );
};