import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { fileUploadService } from "@/services/fileUpload";
import {processFormDataWithFile} from "@/utils/fileProcessing";

const ASSET_TYPES = {
  VIDEO: 1,
  AUDIO: 2,
  DOCUMENT: 3,
  LINK: 4,
  YOUTUBE: 5,
  ONLINE: 6
};

export async function POST(request, { params }) {
  const { courseId } = params;
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        {
          message: "Usuario no autorizado.",
        },
        { status: 401 }
      );
    }

    // Verificar que el curso exista y pertenezca al usuario
    const course = await prisma.course.findUnique({
      where: { id: parseInt(courseId) },
    });

    if (!course) {
      return NextResponse.json(
        {
          message: "Curso no encontrado.",
        },
        { status: 404 }
      );
    }

    if (course.userId !== currentUser.id && currentUser.role !== "ADMIN") {
      return NextResponse.json(
        {
          message: "No tienes permiso para agregar lecciones a este curso.",
        },
        { status: 403 }
      );
    }

    const { body, file: uploadedFile } = await processFormDataWithFile(request, 'file');
    const { title, file_url, video_url, url, platform, meeting_id, password, host, duration, participants, assetTypeId, description } = body;

    console.log('=== DEBUG INFO ===');
    console.log('Course ID:', courseId);
    console.log('Asset Type ID:', assetTypeId);
    console.log('Title:', title);
    console.log('Uploaded File:', uploadedFile ? {
      originalname: uploadedFile.originalname,
      mimetype: uploadedFile.mimetype,
      size: uploadedFile.size
    } : 'No file');
    console.log('Body:', body);

    // Validar datos según el tipo de asset
    if (!title) {
      return NextResponse.json(
        {
          message: "El título de la lección es obligatorio.",
        },
        { status: 400 }
      );
    }

    if (!assetTypeId) {
      return NextResponse.json(
        {
          message: "El tipo de asset es obligatorio.",
        },
        { status: 400 }
      );
    }

    // Configurar config_asset según el tipo
    let config_asset = null;
    let finalFileUrl = "";

    switch (parseInt(assetTypeId)) {
      case ASSET_TYPES.VIDEO:
        console.log('=== PROCESSING VIDEO ===');
        console.log({ video_url, file_url, uploadedFile });

        // Normalizar valores undefined a null o string vacío
        const normalizedVideoUrlForVideo = video_url || null;
        const normalizedFileUrlForVideo = file_url || null;
        const hasUploadedFileForVideo = uploadedFile && uploadedFile.size > 0;

        console.log('Normalized values:', {
          normalizedVideoUrlForVideo,
          normalizedFileUrlForVideo,
          hasUploadedFileForVideo
        });

        if (!normalizedVideoUrlForVideo && !normalizedFileUrlForVideo && !hasUploadedFileForVideo) {
          return NextResponse.json(
            {
              message: "La URL del video o un archivo es obligatorio.",
            },
            { status: 400 }
          );
        }

        let videoUrl = normalizedVideoUrlForVideo || normalizedFileUrlForVideo;

        if (hasUploadedFileForVideo) {
          console.log('=== UPLOADING VIDEO FILE ===');
          try {
            const timestamp = new Date().getTime();
            const fileName = `video-${courseId}-${timestamp}`;

            console.log('Upload options:', {
              fileName: fileName,
              mimetype: uploadedFile.mimetype,
              size: uploadedFile.size
            });

            const uploadResult = await fileUploadService.uploadFile(uploadedFile, {
              fileName: fileName,
              onProgress: (progress) => {
                // El progreso se maneja en el cliente a través de axios
                console.log('Progreso de subida:', progress);
              }
            });

            console.log('Upload result:', uploadResult);

            if (!uploadResult.success) {
              throw new Error(uploadResult.error || 'Error al subir el video');
            }

            videoUrl = uploadResult.url;
            finalFileUrl = uploadResult.url;
            
            console.log('Final video URL:', videoUrl);
          } catch (uploadError) {
            console.error('Error al subir el video:', uploadError);
            return NextResponse.json(
              { message: 'Error al subir el video: ' + uploadError.message },
              { status: 500 }
            );
          }
        }

        config_asset = {
          val: videoUrl,
          type: "video"
        };
        
        console.log('Final config_asset:', config_asset);
        break;

      case ASSET_TYPES.AUDIO:
        console.log({ video_url, file_url, uploadedFile });

        // Normalizar valores undefined a null o string vacío
        const normalizedVideoUrl = video_url || null;
        const normalizedFileUrl = file_url || null;
        const hasUploadedFile = uploadedFile && uploadedFile.size > 0;

        if (!normalizedVideoUrl && !normalizedFileUrl && !hasUploadedFile) {
          return NextResponse.json(
            {
              message: "La URL del audio o un archivo es obligatorio.",
            },
            { status: 400 }
          );
        }

        let audioUrl = normalizedVideoUrl || normalizedFileUrl;

        if (hasUploadedFile) {
          try {
            const timestamp = new Date().getTime();
            const fileName = `audio-${courseId}-${timestamp}`;

            const uploadResult = await fileUploadService.uploadFile(uploadedFile, {
              fileName: fileName,
              onProgress: (progress) => {
                // El progreso se maneja en el cliente a través de axios
                console.log('Progreso de subida:', progress);
              }
            });

            if (!uploadResult.success) {
              throw new Error(uploadResult.error || 'Error al subir el audio');
            }

            audioUrl = uploadResult.url;
            finalFileUrl = uploadResult.url;
          } catch (uploadError) {
            console.error('Error al subir el audio:', uploadError);
            return NextResponse.json(
              { message: 'Error al subir el audio: ' + uploadError.message },
              { status: 500 }
            );
          }
        }

        config_asset = {
          val: audioUrl,
          type: "audio"
        };
        break;

      case ASSET_TYPES.DOCUMENT:
        console.log({ video_url, file_url, uploadedFile });

        // Normalizar valores undefined a null o string vacío
        const normalizedVideoUrlForDocument = video_url || null;
        const normalizedFileUrlForDocument = file_url || null;
        const hasUploadedFileForDocument = uploadedFile && uploadedFile.size > 0;

        if (!normalizedVideoUrlForDocument && !normalizedFileUrlForDocument && !hasUploadedFileForDocument) {
          return NextResponse.json(
            {
              message: "La URL del documento o un archivo es obligatorio.",
            },
            { status: 400 }
          );
        }

        let documentUrl = normalizedVideoUrlForDocument || normalizedFileUrlForDocument;

        if (hasUploadedFileForDocument) {
          try {
            const timestamp = new Date().getTime();
            const fileName = `document-${courseId}-${timestamp}`;

            const uploadResult = await fileUploadService.uploadFile(uploadedFile, {
              fileName: fileName,
              onProgress: (progress) => {
                // El progreso se maneja en el cliente a través de axios
                console.log('Progreso de subida:', progress);
              }
            });

            if (!uploadResult.success) {
              throw new Error(uploadResult.error || 'Error al subir el documento');
            }

            documentUrl = uploadResult.url;
            finalFileUrl = uploadResult.url;
          } catch (uploadError) {
            console.error('Error al subir el documento:', uploadError);
            return NextResponse.json(
              { message: 'Error al subir el documento: ' + uploadError.message },
              { status: 500 }
            );
          }
        }

        config_asset = {
          val: documentUrl,
          type: "document"
        };
        break;

      case ASSET_TYPES.LINK:
        if (!url) {
          return NextResponse.json(
            {
              message: "La URL es obligatoria para links externos.",
            },
            { status: 400 }
          );
        }
        // Validar formato URL
        try {
          new URL(url);
        } catch (e) {
          return NextResponse.json(
            {
              message: "La URL proporcionada no es válida.",
            },
            { status: 400 }
          );
        }
        config_asset = {
          val: url,
          type: "link"
        };
        break;

      case ASSET_TYPES.YOUTUBE:
        if (!url) {
          return NextResponse.json(
            {
              message: "La URL de YouTube es obligatoria.",
            },
            { status: 400 }
          );
        }
        // Validar que sea URL de YouTube
        if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
          return NextResponse.json(
            {
              message: "La URL debe ser de YouTube.",
            },
            { status: 400 }
          );
        }
        config_asset = {
          val: url,
          type: "youtube"
        };
        break;

      case ASSET_TYPES.ONLINE:
        if (!url) {
          return NextResponse.json(
            {
              message: "La URL es obligatoria para sesiones online.",
            },
            { status: 400 }
          );
        }
        if (!platform) {
          return NextResponse.json(
            {
              message: "La plataforma es obligatoria para sesiones online.",
            },
            { status: 400 }
          );
        }
        // Validar formato URL
        try {
          new URL(url);
        } catch (e) {
          return NextResponse.json(
            {
              message: "La URL proporcionada no es válida.",
            },
            { status: 400 }
          );
        }
        config_asset = {
          val: url,
          type: "online",
          platform: platform,
          meeting_id: meeting_id || "",
          password: password || "",
          credits: {
            host: host || "",
            duration: duration || "",
            participants: participants || ""
          }
        };
        break;

      default:
        return NextResponse.json(
          {
            message: "Tipo de asset no válido.",
          },
          { status: 400 }
        );
    }

    console.log('=== CREATING ASSET IN DATABASE ===');
    console.log('Data to create:', {
      title,
      description: description || "",
      file_url: finalFileUrl,
      courseId: parseInt(courseId),
      assetTypeId: parseInt(assetTypeId),
      config_asset: config_asset
    });

    // Crear la lección en la base de datos
    const asset = await prisma.asset.create({
      data: {
        title,
        description: description || "",
        file_url: finalFileUrl,
        courseId: parseInt(courseId),
        assetTypeId: parseInt(assetTypeId),
        config_asset: config_asset
      },
    });

    console.log('=== ASSET CREATED ===');
    console.log('Created asset:', asset);

    // Incrementar el contador de lecciones del curso
    /*await prisma.course.update({
      where: { id: parseInt(courseId) },
      data: {
        lessons: {
          increment: 1
        }
      }
    });*/

    return NextResponse.json(
      {
        message: "Lección añadida correctamente.",
        asset
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        message: "Ocurrió un error: " + error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  const { courseId } = params;
  
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { message: "Usuario no autorizado." },
        { status: 401 }
      );
    }

    const assets = await prisma.asset.findMany({
      where: {
        courseId: parseInt(courseId)
      },
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json({
      assets
    });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Error: " + error.message },
      { status: 500 }
    );
  }
}