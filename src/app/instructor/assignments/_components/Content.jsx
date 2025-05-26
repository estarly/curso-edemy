'use client';
import React, { useState, useEffect } from "react";
import { Selectors } from "./Selectors";
import { myAssignmentsCourse } from "../_actions";

export const Content = ({ items }) => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
   
  // Cargar los cursos al montar el componente
 useEffect(() => {
   /*const fetchCourses = async () => {
      const result = await myAssignmentsCourse();
      setCourses(result.courses || []);
    };
    fetchCourses();*/
    setCourses(items);
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
      <div className="pb-1 pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <Selectors courses={courses} onConsult={handleConsult} />

            {students.length > 0 && (
              <div className="mt-4">
                <h4>Estudiantes relacionados</h4>
                <ul className="list-group">
                  {students.map((student) => (
                    <li key={student.id} className="list-group-item">
                      {student.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};