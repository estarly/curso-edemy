import Content from "@/components/Blog/Content";
import PageBanner from "@/components/Shared/PageBanner";

const page = () => {
	return (
		<>
			<PageBanner
				pageTitle="Blog Grid (2 en fila)"
				homePageUrl="/"
				homePageText="Inicio"
				activePageText="Blog Grid (2 en fila)"
			/>
			<Content />
		</>
	);
};

export default page;
