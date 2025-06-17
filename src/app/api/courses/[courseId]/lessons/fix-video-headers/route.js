import { NextResponse } from "next/server";
import prisma from "@libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";
import AWS from 'aws-sdk';

export async function POST(request, { params }) {
  const { courseId } = params;
  
  console.log('=== FIXING VIDEO HEADERS ===');
  console.log('Course ID:', courseId);
  
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return NextResponse.json(
        { message: "Usuario no autorizado." },
        { status: 401 }
      );
    }

    // Configurar DigitalOcean
    const spacesEndpoint = new AWS.Endpoint(process.env.DO_SPACES_ENDPOINT);
    const s3 = new AWS.S3({
      endpoint: spacesEndpoint,
      accessKeyId: process.env.DO_SPACES_ACCESS_KEY,
      secretAccessKey: process.env.DO_SPACES_SECRET_KEY,
      region: process.env.DO_SPACES_REGION
    });
    const bucket = process.env.DO_SPACES_BUCKET;

    // Obtener todos los videos del curso
    const videos = await prisma.asset.findMany({
      where: { 
        courseId: parseInt(courseId),
        assetTypeId: 1 // Videos
      }
    });

    console.log('Found videos:', videos.length);
    const results = [];

    for (const video of videos) {
      try {
        console.log(`\nProcessing video ${video.id}: ${video.title}`);
        
        // Obtener la clave del archivo desde la URL
        const videoUrl = video.config_asset?.val || video.file_url;
        if (!videoUrl) {
          console.log('No URL found for video');
          continue;
        }

        // Extraer la clave del archivo
        const urlParts = videoUrl.replace('https://', '').split('/');
        const key = urlParts.slice(1).join('/');
        
        console.log('File key:', key);

        // Headers CORS correctos para videos
        const corsHeaders = {
          'Content-Disposition': 'inline',
          'Cache-Control': 'public, max-age=31536000',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
          'Access-Control-Allow-Headers': 'Range, Accept, Accept-Encoding, Accept-Language, Cache-Control, Connection, Host, If-Modified-Since, If-None-Match, If-Range, Origin, Referer, User-Agent',
          'Access-Control-Expose-Headers': 'Accept-Ranges, Content-Length, Content-Range, Content-Type',
          'Access-Control-Max-Age': '86400'
        };

        // Copiar el objeto con los nuevos headers
        const copyParams = {
          Bucket: bucket,
          CopySource: `${bucket}/${key}`,
          Key: key,
          MetadataDirective: 'REPLACE',
          ContentType: 'video/mp4',
          ...corsHeaders
        };

        console.log('Copying object with new headers...');
        await s3.copyObject(copyParams).promise();
        
        console.log('Headers updated successfully');
        
        results.push({
          id: video.id,
          title: video.title,
          status: 'success',
          message: 'Headers CORS corregidos',
          key: key
        });
        
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
      message: "Headers CORS corregidos",
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