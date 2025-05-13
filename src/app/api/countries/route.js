import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET() {
  try {
    // Construir la ruta al archivo JSON
    const filePath = path.join(process.cwd(), 'public', 'countries.json');
    
    // Leer el archivo JSON
    const fileContents = await fs.readFile(filePath, 'utf8');
    
    // Parsear el contenido JSON
    const countries = JSON.parse(fileContents);
    
    // Filtrar solo países con status = 1 y agregar URL de imagen
    const activeCountries = countries
      .filter(country => country.status === 1)
      .map(country => ({
        ...country,
        img: `https://cdn.jsdelivr.net/gh/stefangabos/world_countries/data/flags/48x48/${country.alpha2}.png`
      }));
    
    // Devolver los países como respuesta JSON
    return NextResponse.json({ 
      countries: activeCountries || [], 
      success: true 
    });
    
  } catch (error) {
    console.error('Error al cargar los países:', error);
    
    // Devolver respuesta de error
    return NextResponse.json(
      { 
        error: 'No se pudieron cargar los países', 
        success: false 
      },
      { status: 500 }
    );
  }
}
