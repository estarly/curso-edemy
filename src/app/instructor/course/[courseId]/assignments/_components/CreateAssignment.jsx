"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import AssignmentTypeSelect from "./AssignmentTypeSelect";
import Input from "@/components/FormHelpers/Input";

const CreateAssignment = ({ assignmentTypes, params }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      video_url: "",
      file_url: "",
      due_date: "",
      total_points: "",
      instructions: "",
      rubric: "",
      submission_type: "",
      assignmentType: null,
    },
  });

  const onSubmit = (data) => {
    if (!data.assignmentType) {
      toast.error("Por favor selecciona un tipo de tarea.");
      return;
    }

    let formData = {
      title: data.title,
      description: data.description,
      assignmentType: data.assignmentType.id
    };

    if (data.assignmentType.id === 1) {
      formData.submission_type = "truefalse";
      formData.total_points = data.total_points;
      formData.due_date = data.due_date;
    } else if (data.assignmentType.id === 2) {
      formData.submission_type = "multiplechoice";
      formData.total_points = data.total_points;
      formData.due_date = data.due_date;
    } else if (data.assignmentType.id === 3) {
      formData.submission_type = "fillinblank";
      formData.total_points = data.total_points;
      formData.due_date = data.due_date;
    }

    setIsLoading(true);

    if (!data.title) {
      toast.error("Por favor ingresa un título.");
      setIsLoading(false);
      return;
    }

    axios
      .post(`/api/courses/${params.courseId}/assignments`, formData)
      .then((response) => {
        toast.success(response.data.message || "Tarea creada exitosamente");
        router.refresh();
        reset();
      })
      .catch((error) => {
        toast.error("¡Algo salió mal!");
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const assignmentType = watch("assignmentType");

  const setCustomValue = (id, value) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-md-6">
              <Input
                label="Título"
                id="title"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            </div>
            <div className="col-md-6">
              <AssignmentTypeSelect
                label="Tipo de pregunta"
                value={assignmentType}
                onChange={(value) => setCustomValue("assignmentType", value)}
                options={assignmentTypes}
              />
            </div>
          </div>

          {assignmentType && (
            <div className="row mt-3">
              <div className="col-md-6">
                <Input
                  label="Fecha de entrega"
                  id="due_date"
                  type="date"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                />
              </div>
              <div className="col-md-6">
                <Input
                  label="Puntos totales"
                  id="total_points"
                  type="number"
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
          )}

          {assignmentType?.id === 1 && (
            <div className="row mt-3">
              <div className="col-12 mt-3">
                <p className="text-info">
                  Tipo de pregunta: Verdadero o Falso. Después de crear la tarea, podrás agregar las preguntas desde la sección de edición.
                </p>
              </div>
            </div>
          )}

          {assignmentType?.id === 2 && (
            <div className="row mt-3">
              <div className="col-12 mt-3">
                <p className="text-info">
                  Tipo de pregunta: Selección Simple. Después de crear la tarea, podrás agregar las preguntas desde la sección de edición.
                </p>
              </div>
            </div>
          )}

          {assignmentType?.id === 3 && (
            <div className="row mt-3">
              <div className="col-12 mt-3">
                <p className="text-info">
                  Tipo de pregunta: Completar. Después de crear la tarea, podrás agregar las preguntas desde la sección de edición.
                </p>
              </div>
            </div>
          )}

          <button type="submit" className="default-btn mt-4">
            <i className="flaticon-right-arrow"></i>
            {assignmentType?.id === 1 && "Crear Pregunta de Verdadero/Falso"}
            {assignmentType?.id === 2 && "Crear Pregunta de Selección Simple"}
            {assignmentType?.id === 3 && "Crear Pregunta de Completar"}
            {!assignmentType && "Guardar"}
            <span></span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateAssignment;