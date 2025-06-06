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
		template: "%s | eDemy ",
		default: "eDemy",
	},
	keywords: [
		"Online coding courses",
	],
	description:
		"Explore a world of knowledge with our online tutorial platform. Master coding languages, delve into effective marketing strategies, and elevate your skills in diverse courses. Join expert-led sessions for practical learning. Enroll now for a brighter future!",
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
		title: "eDemy | Unlock Your Potential with Expert-Led Online Courses | Learn Coding, Marketing, and More!",
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
				<Navbar currentUser={currentUser} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
