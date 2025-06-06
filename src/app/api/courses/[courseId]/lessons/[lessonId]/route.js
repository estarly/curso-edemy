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

export async function PUT(request, { params }) {
  const { courseId, lessonId } = params;
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
          message: "No tienes permiso para editar lecciones de este curso.",
        },
        { status: 403 }
      );
    }


    const existingLesson = await prisma.asset.findUnique({
      where: { id: parseInt(lessonId) },
    });

    if (!existingLesson) {
      return NextResponse.json(
        {
          message: "Lección no encontrada.",
        },
        { status: 404 }
      );
    }


    if (existingLesson.courseId !== parseInt(courseId)) {
      return NextResponse.json(
        {
          message: "La lección no pertenece a este curso.",
        },
        { status: 400 }
      );
    }

    const { body, file: uploadedFile } = await processFormDataWithFile(request, 'file');
    const { title, file_url, video_url, url, platform, meeting_id, password, host, duration, participants, assetTypeId, description } = body;


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

    let config_asset = null;
    let finalFileUrl = "";
    let shouldUpdateConfigAsset = false;

    switch (parseInt(assetTypeId)) {
      case ASSET_TYPES.VIDEO:
        console.log({ video_url, file_url, uploadedFile });

        const normalizedVideoUrlForVideo = video_url || null;
        const normalizedFileUrlForVideo = file_url || null;
        const hasUploadedFileForVideo = uploadedFile && uploadedFile.size > 0;

        /* (!normalizedVideoUrlForVideo && !normalizedFileUrlForVideo && !hasUploadedFileForVideo) {
          return NextResponse.json(
            {
              message: "La URL del video o un archivo es obligatorio.",
            },
            { status: 400 }
          );
        }*/

        let videoUrl = normalizedVideoUrlForVideo || normalizedFileUrlForVideo;

        if (hasUploadedFileForVideo) {
          try {
            const timestamp = new Date().getTime();
            const fileName = `video-${courseId}-${timestamp}`;

            const uploadResult = await fileUploadService.uploadFile(uploadedFile, {
              fileName: fileName
            });

            if (!uploadResult.success) {
              throw new Error(uploadResult.error || 'Error al subir el video');
            }

            videoUrl = uploadResult.url;
            finalFileUrl = uploadResult.url;
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
        if (hasUploadedFileForVideo || normalizedVideoUrlForVideo || normalizedFileUrlForVideo) {
          shouldUpdateConfigAsset = true;
        }
        break;

      case ASSET_TYPES.AUDIO:
        console.log({ video_url, file_url, uploadedFile });

        const normalizedVideoUrl = video_url || null;
        const normalizedFileUrl = file_url || null;
        const hasUploadedFile = uploadedFile && uploadedFile.size > 0;

        /* (!normalizedVideoUrl && !normalizedFileUrl && !hasUploadedFile) {
          return NextResponse.json(
            {
              message: "La URL del audio o un archivo es obligatorio.",
            },
            { status: 400 }
          );
        }*/

        let audioUrl = normalizedVideoUrl || normalizedFileUrl;

        if (hasUploadedFile) {
          try {
            const timestamp = new Date().getTime();
            const fileName = `audio-${courseId}-${timestamp}`;

            const uploadResult = await fileUploadService.uploadFile(uploadedFile, {
              fileName: fileName
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
        if (hasUploadedFile || normalizedVideoUrl || normalizedFileUrl) {
          shouldUpdateConfigAsset = true;
        }
        break;

      case ASSET_TYPES.DOCUMENT:
        console.log({ video_url, file_url, uploadedFile });

        const normalizedVideoUrlForDocument = video_url || null;
        const normalizedFileUrlForDocument = file_url || null;
        const hasUploadedFileForDocument = uploadedFile && uploadedFile.size > 0;

        /*if (!normalizedVideoUrlForDocument && !normalizedFileUrlForDocument && !hasUploadedFileForDocument) {
          return NextResponse.json(
            {
              message: "La URL del documento o un archivo es obligatorio.",
            },
            { status: 400 }
          );
        }*/

        let documentUrl = normalizedVideoUrlForDocument || normalizedFileUrlForDocument;

        if (hasUploadedFileForDocument) {
          try {
            const timestamp = new Date().getTime();
            const fileName = `document-${courseId}-${timestamp}`;

            const uploadResult = await fileUploadService.uploadFile(uploadedFile, {
              fileName: fileName
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
        if (hasUploadedFileForDocument || normalizedVideoUrlForDocument || normalizedFileUrlForDocument) {
          shouldUpdateConfigAsset = true;
        }
        break;

      case ASSET_TYPES.LINK:
        /* (!url) {
          return NextResponse.json(
            {
              message: "La URL es obligatoria para links externos.",
            },
            { status: 400 }
          );
        }*/
        try {
          new URL(url);
        } catch (e) {
          console.log(e);
         /*eturn NextResponse.json(
            {
              message: "La URL proporcionada no es válida.",
            },
            { status: 400 }
          );*/
        }
        config_asset = {
          val: url,
          type: "link"
        };
        if (url) {
          shouldUpdateConfigAsset = true;
        }
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
        if (url) {
          shouldUpdateConfigAsset = true;
        }
        break;

      case ASSET_TYPES.ONLINE:
        /*if (!url) {
          return NextResponse.json(
            {
              message: "La URL es obligatoria para sesiones online.",
            },
            { status: 400 }
          );
        }*/
        if (!platform) {
          return NextResponse.json(
            {
              message: "La plataforma es obligatoria para sesiones online.",
            },
            { status: 400 }
          );
        }
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
        if (url && platform) {
          shouldUpdateConfigAsset = true;
        }
        break;

      default:
        return NextResponse.json(
          {
            message: "Tipo de asset no válido.",
          },
          { status: 400 }
        );
    }

    const dataToUpdate = {
      title,
      description: description || "",
      file_url: finalFileUrl,
      assetTypeId: parseInt(assetTypeId),
    };
    if (shouldUpdateConfigAsset) {
      dataToUpdate.config_asset = config_asset;
    }

    const asset = await prisma.asset.update({
      where: { id: parseInt(lessonId) },
      data: dataToUpdate,
    });

    return NextResponse.json(
      {
        message: "Lección editada correctamente.",
        asset
      },
      { status: 200 }
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