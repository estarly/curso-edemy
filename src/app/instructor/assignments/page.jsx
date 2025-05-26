import React from "react";
import InstructorHeaderMini from "@/components/Instructor/InstructorHeaderMini";
import { myAssignmentsCourse } from "./_actions";


const Page = async () => {
	const result = await myAssignmentsCourse();
	console.log(result.courses[0].assets, "result");
	return (
		<>
			<InstructorHeaderMini />
		</>
	);
};

export default Page;
