'use client';
import React, { useState, useEffect } from "react";
import { Selectors } from "./Selectors";
//import { myAssignmentsCourse } from "../_actions";

export const Content = ({items}) => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
   
  // Cargar los cursos al montar el componente
 useEffect(() => {
   /*const fetchCourses = async () => {
      const result = await myAssignmentsCourse();
      setCourses(result.courses || []);
    };
    fetchCourses();*/
    setCourses(items.courses);
    console.log(courses, "courses");
  }, []);

  // Función para manejar la consulta
  const handleConsult = (selectedCourse, selectedLesson, selectedAssignment) => {
    console.log("Consultar estudiantes para:", selectedCourse, selectedLesson, selectedAssignment);
    // Datos estáticos de estudiantes (simulación)
    setStudents([
      { id: 1, name: "Estudiante 1" },
      { id: 2, name: "Estudiante 2" },
      { id: 3, name: "Estudiante 3" },
    ]);
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