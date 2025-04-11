import React from "react";
import Header from "../../Header";
import { getAssignmentTypes } from "@/app/instructor/actions";
import CreateAssignment from "@/app/instructor/course/[courseId]/assignments/_components/CreateAssignment";

const Page = async ({ params }) => {
  const { items: assignments } = await getAssignmentTypes();
  return (
    <div className="ptb-100">
      <div className="container">
        <h2 className="fw-bold mb-4">
          Asignaciones
        </h2>

        <Header />

        <div className="create-course-form">
          <CreateAssignment assignmentTypes={assignments} params={params} />
        </div>
      </div>
    </div>
  );
};

export default Page;
