import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request, { params }) {
  const { courseId } = params;
  
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { message: "Usuario no autorizado." },
        { status: 401 }
      );
    }

    // Obtener el video más reciente del curso
    const video = await prisma.asset.findFirst({
      where: { 
        courseId: parseInt(courseId),
        assetTypeId: 1 // Videos
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    if (!video) {
      return NextResponse.json({
        message: "No se encontraron videos en este curso"
      });
    }

    console.log('=== TESTING VIDEO URL ===');
    console.log('Video found:', {
      id: video.id,
      title: video.title,
      file_url: video.file_url,
      config_asset: video.config_asset
    });

    // Probar la URL del video
    const videoUrl = video.config_asset?.val || video.file_url;
    
    if (!videoUrl) {
      return NextResponse.json({
        message: "No se encontró URL del video",
        video: video
      });
    }

    console.log('Testing URL:', videoUrl);

    try {
      // Hacer una petición HEAD para verificar si la URL es accesible
      const response = await fetch(videoUrl, {
        method: 'HEAD',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      return NextResponse.json({
        message: "Prueba de URL completada",
        video: {
          id: video.id,
          title: video.title,
          url: videoUrl,
          status: response.status,
          statusText: response.statusText,
          contentType: response.headers.get('content-type'),
          contentLength: response.headers.get('content-length'),
          headers: Object.fromEntries(response.headers.entries())
        }
      });

    } catch (fetchError) {
      console.error('Error testing URL:', fetchError);
      return NextResponse.json({
        message: "Error al probar la URL",
        video: {
          id: video.id,
          title: video.title,
          url: videoUrl,
          error: fetchError.message
        }
      });
    }

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Error: " + error.message },
      { status: 500 }
    );
  }
} 