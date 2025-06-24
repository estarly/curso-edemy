import { Nunito } from "next/font/google";
import "./globals.css";
import "../app/styles/bootstrap.min.css";
import "../app/styles/animate.min.css";
import "../app/styles/boxicons.min.css";
import "../app/styles/meanmenu.min.css";
import "../app/styles/flaticon.css";
import "react-modal-video/css/modal-video.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-tabs/style/react-tabs.css";
import "react-18-image-lightbox/style.css";
import "swiper/css";
import "swiper/css/bundle";
// Global Styles
import "../app/styles/style.css";
// Global Responsive Styles
import "../app/styles/responsive.css";
// Global Dashboard Styles
import "../app/styles/dashboard.css";

import TosterProvider from "@/providers/TosterProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { getCurrentUser } from "@/actions/getCurrentUser";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
	metadataBase: new URL("https://edemy-react.envytheme.com"),
	alternates: {
		canonical: "/",
	},
	title: {
		template: "%s | Pilar - Fundamento de Fe y Conocimiento",
		default: "Pilar - Tu Guía en el Camino de la Fe",
	},
	keywords: [
		"Estudios bíblicos",
		"Formación espiritual",
		"Cursos bíblicos online",
		"Educación cristiana",
		"Conocimiento bíblico",
		"Guía espiritual",
		"Fundamento de fe"
	],
	description:
		"Pilar: Tu fundamento en el camino de la fe y el conocimiento bíblico. Ofrecemos una plataforma educativa que sirve como soporte y guía en tu crecimiento espiritual. Únete a nuestra comunidad para fortalecer tu fe y expandir tu comprensión de las enseñanzas bíblicas.",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	openGraph: {
		title: "Pilar | Tu Fundamento en el Camino de la Fe y el Conocimiento Bíblico",
		url: "https://edemy-react.envytheme.com",
		images: [
			"https://res.cloudinary.com/dev-empty/image/upload/v1707717581/znronmo1rj2gexfrmnmy.jpg",
		],
		locale: "es_ES",
		type: "website",
	},
};

export default async function RootLayout({ children }) {
	const currentUser = await getCurrentUser();
	//console.log(currentUser,'RootLayout');
	return (
		<html lang="es">
			<head>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</head>
			<body className={nunito.className} suppressHydrationWarning={true}>
				<TosterProvider />
				<LanguageProvider>
					<Navbar currentUser={currentUser} />
					{children}
					<Footer />
				</LanguageProvider>
			</body>
		</html>
	);
}
