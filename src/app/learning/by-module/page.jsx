import Links from "../Links";
import { getCurrentUser, validateDataUser } from "@/actions/getCurrentUser";
import { byModule } from "@/actions/byModule";
import { redirect } from "next/navigation";
import ByModuleCourses from "./_components/ByModuleCourses";

function getModulesWithCourses(enrolments = []) {
	const modulesById = new Map();

	for (const enrolment of enrolments) {
		const module = enrolment.module;
		if (!module) continue;

		if (!modulesById.has(module.id)) {
			modulesById.set(module.id, {
				id: module.id,
				title: module.title,
				description: module.description,
				courses: [],
				courseIds: new Set(),
			});
		}

		const entry = modulesById.get(module.id);

		for (const courseModule of module.courseModules || []) {
			const course = courseModule.course;
			if (course && !entry.courseIds.has(course.id)) {
				entry.courseIds.add(course.id);
				entry.courses.push(course);
			}
		}
	}

	return Array.from(modulesById.values())
		.map(({ courseIds, ...mod }) => ({
			...mod,
			courses: mod.courses.sort((a, b) => a.title.localeCompare(b.title)),
		}))
		.sort((a, b) => a.title.localeCompare(b.title));
}

const Page = async () => {
	const currentUser = await getCurrentUser();
	const validateUser = await validateDataUser();

	if (currentUser && validateUser) {
		redirect("/profile/basic-information");
	}

	const result = await byModule();
	const modules = getModulesWithCourses(result?.enrolments);

	return (
		<>
			<div className="ptb-100">
				<div className="container">
					<Links currentUser={currentUser} />
					<ByModuleCourses modules={modules} currentUser={currentUser} />
				</div>
			</div>
		</>
	);
};

export default Page;
