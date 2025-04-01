"use client";

import React from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

const Header = () => {
	const pathname = usePathname();
	const params = useParams();
	return (
		<ul className="nav-style1">
			<li>
				<Link
					href="/instructor/courses/"
					className={
						pathname === "/instructor/courses" ? "active" : null
					}
				>
					Cursos
				</Link>
			</li>
			<li>
				<Link
					href="/instructor/course/create/"
					className={
						pathname == "/instructor/course/create"
							? "active"
							: null
					}
				>
					Crear un curso
				</Link>
			</li>
			{params && params.courseId && (
				<>
					<li>
						<Link
							href={`/instructor/course/${params.courseId}/edit`}
							className={
								pathname ==
								`/instructor/course/${params.courseId}/edit`
									? "active"
									: null
							}
						>
							Editando
						</Link>
					</li>
					<li>
						<Link
							href={`/instructor/course/${params.courseId}/lessons`}
							className={
								pathname ==
								`/instructor/course/${params.courseId}/lessons`
									? "active"
									: null
							}
						>
							Lecciones
						</Link>
					</li>
					<li>
						<Link
							href={`/instructor/course/${params.courseId}/videos`}
							className={
								pathname ==
								`/instructor/course/${params.courseId}/videos`
									? "active"
									: null
							}
						>
							Subir video
						</Link>
					</li>
					<li>
						<Link
							href={`/instructor/course/${params.courseId}/assets`}
							className={
								pathname ==
								`/instructor/course/${params.courseId}/assets`
									? "active"
									: null
							}
						>
							Subir archivos
						</Link>
					</li>
					
				</>
			)}
		</ul>
	);
};

export default Header;
