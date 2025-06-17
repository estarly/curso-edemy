import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(request, { params }) {
  const { courseId } = params;
  
  console.log('=== FIXING VIDEO URLS ===');
  console.log('Course ID:', courseId);
  
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { message: "Usuario no autorizado." },
        { status: 401 }
      );
    }

    // Obtener todos los videos del curso
    const videos = await prisma.asset.findMany({
      where: { 
        courseId: parseInt(courseId),
        assetTypeId: 1 // Videos
      }
    });

    console.log('Found videos:', videos.length);
    videos.forEach(video => {
      console.log('Video before fix:', {
        id: video.id,
        title: video.title,
        file_url: video.file_url,
        config_asset: video.config_asset
      });
    });

    const results = [];

    for (const video of videos) {
      try {
        console.log(`\nProcessing video ${video.id}: ${video.title}`);
        let needsUpdate = false;
        let updatedConfigAsset = { ...video.config_asset };
        let updatedFileUrl = video.file_url;

        // Función helper para corregir URL
        const fixUrl = (url) => {
          if (!url) return url;
          if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
          }
          return `https://${url}`;
        };

        // Corregir URL en config_asset.val
        if (video.config_asset?.val) {
          const fixedUrl = fixUrl(video.config_asset.val);
          if (fixedUrl !== video.config_asset.val) {
            console.log('Fixing config_asset.val:', video.config_asset.val, '->', fixedUrl);
            updatedConfigAsset.val = fixedUrl;
            needsUpdate = true;
          }
        }

        // Corregir file_url
        if (video.file_url) {
          const fixedFileUrl = fixUrl(video.file_url);
          if (fixedFileUrl !== video.file_url) {
            console.log('Fixing file_url:', video.file_url, '->', fixedFileUrl);
            updatedFileUrl = fixedFileUrl;
            needsUpdate = true;
          }
        }

        // Si config_asset.val está vacío pero file_url tiene valor, copiar file_url
        if (!video.config_asset?.val && video.file_url) {
          const fixedFileUrl = fixUrl(video.file_url);
          console.log('Copying file_url to config_asset.val:', fixedFileUrl);
          updatedConfigAsset = {
            val: fixedFileUrl,
            type: 'video'
          };
          needsUpdate = true;
        }

        if (needsUpdate) {
          console.log('Updating video in database...');
          const updatedVideo = await prisma.asset.update({
            where: { id: video.id },
            data: {
              file_url: updatedFileUrl,
              config_asset: updatedConfigAsset
            }
          });
          
          console.log('Video updated successfully:', {
            id: updatedVideo.id,
            new_file_url: updatedVideo.file_url,
            new_config_asset: updatedVideo.config_asset
          });
          
          results.push({
            id: video.id,
            title: video.title,
            status: 'success',
            message: 'URL corregida',
            oldUrl: video.config_asset?.val,
            newUrl: updatedConfigAsset.val
          });
        } else {
          console.log('No changes needed for this video');
          results.push({
            id: video.id,
            title: video.title,
            status: 'no-change',
            message: 'URL ya correcta'
          });
        }
      } catch (error) {
        console.error(`Error processing video ${video.id}:`, error);
        results.push({
          id: video.id,
          title: video.title,
          status: 'error',
          message: error.message
        });
      }
    }

    console.log('Final results:', results);

    return NextResponse.json({
      message: "URLs corregidas",
      results
    });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Error: " + error.message },
      { status: 500 }
    );
  }
} 