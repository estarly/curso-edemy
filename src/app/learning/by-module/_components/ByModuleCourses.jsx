"use client";

import { useState } from "react";
import CourseCard from "@/components/Shared/CourseCard";

const ByModuleCourses = ({ modules, currentUser }) => {
	const [activeModuleId, setActiveModuleId] = useState(modules[0]?.id);

	if (!modules.length) {
		return (
			<div className="col-lg-12 col-md-12">
				<div className="text-center fs-5 border p-3">
					No tienes cursos asignados por módulo
				</div>
			</div>
		);
	}

	const activeModule =
		modules.find((mod) => mod.id === activeModuleId) || modules[0];

	return (
		<>
			{modules.length > 1 && (
				<ul className="nav-style1 mb-4">
					{modules.map((mod) => (
						<li key={mod.id}>
							<a
								href="#"
								role="button"
								className={activeModule.id === mod.id ? "active" : ""}
								onClick={(e) => {
									e.preventDefault();
									setActiveModuleId(mod.id);
								}}
							>
								{mod.title}
							</a>
						</li>
					))}
				</ul>
			)}

			<div className="row">
				{activeModule.courses.length > 0 ? (
					activeModule.courses.map((course) => (
						<CourseCard
							key={course.id}
							{...course}
							currentUser={currentUser}
							urlDefault="/learning/course"
						/>
					))
				) : (
					<div className="col-lg-12 col-md-12">
						<div className="text-center fs-5 border p-3">
							Este módulo no tiene cursos asignados
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default ByModuleCourses;
