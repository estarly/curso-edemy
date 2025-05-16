"use client"

import { useState, useRef } from "react"
import ReactCrop from "react-image-crop"
import "react-image-crop/dist/ReactCrop.css"

const IMAGE_DIMENSIONS = {
  banner: {
    width: 843,
    height: 680,
    label: "Banner",
    aspectRatio: 843 / 680,
  },
  category: {
    width: 650,
    height: 433,
    label: "Categoría",
    aspectRatio: 650 / 433,
  },
  profile: {
    width: 200,
    height: 200,
    label: "Perfil",
    aspectRatio: 200 / 200,
  },
  course: {
    width: 750,
    height: 500,
    label: "Curso",
    aspectRatio: 750 / 500,
  },
}

export default function ImageCropper({ imageType, imageSrc, onCropComplete, onCancel }) {
  const [crop, setCrop] = useState()
  const [completedCrop, setCompletedCrop] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const imgRef = useRef(null)
  const dimensions = IMAGE_DIMENSIONS[imageType]

  function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
    const centerX = mediaWidth / 2
    const centerY = mediaHeight / 2
    const cropWidth = mediaWidth * 0.9
    const cropHeight = cropWidth / aspect

    return {
      unit: "%",
      width: (cropWidth / mediaWidth) * 100,
      height: (cropHeight / mediaHeight) * 100,
      x: ((centerX - cropWidth / 2) / mediaWidth) * 100,
      y: ((centerY - cropHeight / 2) / mediaHeight) * 100,
    }
  }

  const onImageLoad = (e) => {
    const { width, height } = e.currentTarget
    setCrop(centerAspectCrop(width, height, dimensions.aspectRatio))
  }

  const generateCroppedImage = async () => {
    if (!imgRef.current || !completedCrop) return

    setIsProcessing(true)

    try {
      const image = imgRef.current
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")

      if (!ctx) {
        throw new Error("No 2d context")
      }

      canvas.width = dimensions.width
      canvas.height = dimensions.height

      const scaleX = image.naturalWidth / image.width
      const scaleY = image.naturalHeight / image.height

      ctx.drawImage(
        image,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        dimensions.width,
        dimensions.height,
      )

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            throw new Error("Canvas is empty")
          }
          onCropComplete(blob)
          setIsProcessing(false)
        },
        "image/jpeg",
        0.95,
      )
    } catch (e) {
      console.error("Error generating crop", e)
      setIsProcessing(false)
    }
  }

  return (
    <div className="container">
      <h3 className="mb-4 fw-semibold">
        Recortar ({dimensions.width}x{dimensions.height}px)
      </h3>

      <div className="card mb-4">
        <div className="card-body d-flex justify-content-center">
          <div className="overflow-auto">
            <ReactCrop
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={dimensions.aspectRatio}
              minWidth={100}
              className="mw-100"
            >
              <img
                ref={imgRef}
                src={imageSrc || "/placeholder.svg"}
                alt="Imagen para recortar"
                onLoad={onImageLoad}
                className="mw-100"
                style={{ maxHeight: "70vh", objectFit: "contain" }}
              />
            </ReactCrop>
          </div>
        </div>
      </div>

      <div className="d-flex gap-2 justify-content-end">
        <button className="btn btn-outline-secondary" onClick={onCancel} disabled={isProcessing}>
          Cancelar
        </button>
        <button className="btn btn-primary" onClick={generateCroppedImage} disabled={!completedCrop || isProcessing}>
          {isProcessing ? (
            <>
              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Procesando...
            </>
          ) : (
            <>
              <i className="bi bi-check me-2"></i>
              Aplicar recorte
            </>
          )}
        </button>
      </div>
    </div>
  )
}
