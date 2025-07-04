/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		domains: [
			"res.cloudinary.com",
			"avatars.githubusercontent.com",
			"lh3.googleusercontent.com",
			"via.placeholder.com",
			"developers.google.com",
      "space-share.nyc3.digitaloceanspaces.com"
		],
	},
	env: {
		NEXTAUTH_SECRET: "b51afa1ed38dde0d5d8f21gftybjsygg458086548a7fe48e1a",
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dev-empty",
		NEXT_CLOUDINARY_PRESET: "vikings",
		STRIPE_PUBLISHABLE_KEY: "pk_test_ZaZZWZGlvdIn12yFleIqyjSI00G4e18Kf7",
		STRIPE_SECRET_KEY: "sk_test_2DqyjEwaU0Nq0PpEMVQ3qSAw00zgrbnfPk",
		CUSTOM_PORT: process.env.PORT || 3000,
	},
	serverRuntimeConfig: {
		port: process.env.PORT || 3000,
	},
	publicRuntimeConfig: {
		port: process.env.PORT || 3000,
	},
};

module.exports = nextConfig;
