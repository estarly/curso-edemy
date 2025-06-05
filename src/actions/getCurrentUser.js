import { getServerSession } from "next-auth/next";
import { authHandler } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@libs/prismadb";


export async function getCurrentSession() {
	return await getServerSession(authHandler);
}

export async function getCurrentUser() {
	try {
		const session = await getCurrentSession();

		if (!session?.user?.email) {
			return null;
		}

		const currentUser = await prisma.user.findUnique({
			where: {
				email: session.user.email,
			},
			include: {
				profile: true,
				favourites: true,
			},
		});

		if (!currentUser) {
			return null;
		}

		return {
			...currentUser,
			created_at: currentUser.created_at.toISOString(),
			updated_at: currentUser.created_at.toISOString(),
			emailVerified: currentUser.created_at.toISOString() || null,
		};
	} catch (error) {
		return null;
	}
}

export async function validateDataUser() {
	try {
		// Obtenemos la sesión para identificar al usuario actual
		const session = await getCurrentSession();
		
		if (session || !session?.user?.email) {
			return false; // No hay usuario autenticado, consideramos que falta información
		}
		
		// Consultamos directamente las tablas de usuario y perfil
		const userData = await prisma.user.findUnique({
			where: {
				email: session.user.email,
			},
			include: {
				profile: true,
			},
		});
		
		// Si no se encuentra el usuario
		if (!userData) {
			return true;
		}
		
		// Validar campos principales del usuario
		const requiredUserFields = [
			'name',          // Nombre del usuario
			'image',          // Foto de perfil
			'designation'
		];
		
		// Validar campos del perfil extendido
		const requiredProfileFields = [
			'bio',            // Biografía
			'countryId',      // País
			'address',        // Dirección
			'phone',          // Teléfono
			'whatsapp'        // WhatsApp
		];
		
		// Verificar campos del usuario principal
		for (const field of requiredUserFields) {
			if (!userData[field] || userData[field].trim() === '') {
				console.log(`User incompleto: Falta campo ${field}`);
				return true; // Falta este campo
			}
		}
		
		// Verificar que profile existe
		if (!userData.profile) {
			console.log('Perfil incompleto: No existe el objeto profile');
			return true; // No hay perfil extendido
		}
		
		// Verificar campos del perfil extendido
		for (const field of requiredProfileFields) {
			if (!userData.profile[field] || userData.profile[field].toString().trim() === '') {
				console.log(`Perfil incompleto: Falta campo ${field} en el perfil`);
				return true; // Falta este campo
			}
		}
		
		// Si llegamos aquí, todos los campos necesarios están completos
		return false;
	} catch (error) {
		//console.error('Error al validar datos del usuario:', error.message);
		return false; // En caso de error, consideramos que falta información
	}
}

export async function getCountries() {
	try {
		const response = await fetch('https://api.example.com/countries');
		if (!response.ok) throw new Error('No se pudo obtener la lista de países');
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error obteniendo países:', error.message);
		return [];
	}
}