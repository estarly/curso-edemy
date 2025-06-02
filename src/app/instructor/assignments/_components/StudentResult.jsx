'use client';
import React, { useState } from "react";

export const StudentResult = ({ students = [] }) => {
  const [search, setSearch] = useState("");

  // Filtrar estudiantes por nombre
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {students.length > 0 && (
        <div className="mt-3">
          <h4>Estudiantes relacionados</h4>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Buscar por nombre..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="accordion" id="studentsAccordion">
            {filteredStudents.map((student, idx) => (
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
                      {student.StateCourse?.[0]?.assignmentresults?.length > 0 ? (
                        student.StateCourse[0].assignmentresults.map((result) => (
                          <li key={result.id} className="mb-3">
                            <div><strong>{result.response?.title}</strong></div>
                            {result.response?.options ? (
                              <ul>
                                {result.response.options.map((option, idx) => {
                                  const esCorrecta = result.response.correct_options?.includes(option);
                                  const esRespuestaUsuario = result.response.correct_answer === option;
                                  return (
                                    <li
                                      key={idx}
                                      style={{
                                        fontWeight: esCorrecta ? "bold" : "normal",
                                        color: esCorrecta
                                          ? "green"
                                          : esRespuestaUsuario
                                          ? "blue"
                                          : "inherit",
                                      }}
                                    >
                                      {option}
                                      {esCorrecta && <span> ✔️ (Correcta)</span>}
                                      {esRespuestaUsuario && !esCorrecta && <span> (Respuesta del usuario)</span>}
                                    </li>
                                  );
                                })}
                              </ul>
                            ) : (
                              <div>
                                <div>
                                  <strong>Respuesta correcta:</strong> {result.response?.correct_answer}
                                </div>
                              </div>
                            )}
                            <div>
                              Estado:{" "}
                              <span className={result.complete ? "text-success" : "text-warning"}>
                                {result.complete ? "Completada" : "Pendiente"}
                              </span>
                            </div>
                          </li>
                        ))
                      ) : (
                        <li>No hay resultados de tareas.</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            {filteredStudents.length === 0 && (
              <div className="alert alert-info mt-3">No se encontraron estudiantes con ese nombre.</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default StudentResult;
