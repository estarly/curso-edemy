export async function getCountries() {
	try {
		// Determinar la URL base en función del entorno
		const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
					   (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000');
		
		// Llamada a la API de países con URL absoluta
		const response = await fetch(`${baseUrl}/api/countries`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			cache: 'no-store',  // Para asegurar datos frescos
		});

		if (!response.ok) {
			throw new Error(`Error en la respuesta: ${response.status}`);
		}

		// Parsear la respuesta JSON
		const data = await response.json();
		
		// Verificar y devolver los países
		if (data.success && data.countries) {
			return data.countries;
		} else {
			throw new Error('Formato de respuesta inesperado');
		}
	} catch (error) {
		console.error("Error obteniendo países:", error);
		return [];  // Devolver array vacío en caso de error
	}
}

