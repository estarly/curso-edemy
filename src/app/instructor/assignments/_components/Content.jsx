'use client';
import React, { useState, useEffect } from "react";
import { Selectors } from "./Selectors";
import { StudentResult } from "./StudentResult";

export const Content = ({items}) => {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
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
        setStudents(data.items);
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

            <StudentResult students={students} />
            
          </div>
        </div><br /><br /><br /><br />
      </div>
    </>
  );
};