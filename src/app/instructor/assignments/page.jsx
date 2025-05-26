import React from "react";
import InstructorHeaderMini from "@/components/Instructor/InstructorHeaderMini";
import { myAssignmentsCourse } from "./_actions";
import { Content } from "./_components/Content";

const Page = async () => {
	const result = await myAssignmentsCourse();
	return (
		<>
			<Content items={result}/>
		</>
	);
};

export default Page;
