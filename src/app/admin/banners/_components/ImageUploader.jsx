"use client"

import { useState, useRef, useEffect } from "react"
import ImageCropper from "./ImageCropper"

const IMAGE_DIMENSIONS = {
  banner: { width: 843, height: 680, label: "Banner" },
  category: { width: 650, height: 433, label: "Categoría" },
  profile: { width: 200, height: 200, label: "Perfil" },
  course: { width: 750, height: 500, label: "Curso" },
}

export default function ImageUploader({ type = "banner", onChange,title=false }) {
  const imageType = IMAGE_DIMENSIONS[type] ? type : "banner"

  const [originalImage, setOriginalImage] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [croppedImageBlob, setCroppedImageBlob] = useState(null)
  const [error, setError] = useState(null)
  const fileInputRef = useRef(null)
  const [showCropper, setShowCropper] = useState(false)

  const isInitialMount = useRef(true)

  const dimensions = IMAGE_DIMENSIONS[imageType]

  useEffect(() => {
    resetState()
  }, [imageType])

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    if (croppedImageBlob && onChange) {
      onChange({
        blob: croppedImageBlob,
        url: selectedImage,
        type: imageType,
        dimensions: dimensions,
      })
    }
  }, [croppedImageBlob])

  const resetState = () => {
    setOriginalImage(null)
    setSelectedImage(null)
    setCroppedImageBlob(null)
    setError(null)
    setShowCropper(false)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleImageChange = async (e) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    const file = files[0]
    setError(null)
    setSelectedImage(null)
    setCroppedImageBlob(null)

    if (!file.type.startsWith("image/")) {
      setError("El archivo seleccionado no es una imagen.")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("La imagen no debe superar los 5MB.")
      return
    }

    setOriginalImage(URL.createObjectURL(file))
    setShowCropper(true)
  }

  const handleCropComplete = (blob) => {
    const croppedImageUrl = URL.createObjectURL(blob)
    setSelectedImage(croppedImageUrl)
    setCroppedImageBlob(blob)
    setShowCropper(false)
  }

  const handleCropCancel = () => {
    setShowCropper(false)
    setOriginalImage(null)
  }

  const handleRemoveImage = (e) => {
    e.stopPropagation()
    setSelectedImage(null)
    setCroppedImageBlob(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
    onChange && onChange(null)
  }

  if (showCropper && originalImage) {
    return (
      <div className="container py-4">
        {/*<button className="btn btn-link mb-4 p-0 text-decoration-none" onClick={handleCropCancel}>
          <i className="bi bi-arrow-left me-2"></i> Volver
        </button>
        */}

        <ImageCropper
          imageType={imageType}
          imageSrc={originalImage}
          onCropComplete={handleCropComplete}
          onCancel={handleCropCancel}
        />
      </div>
    )
  }

  return (
    <div className="container py-4">
      {title && (
        <h2 className="fw-bold mb-4">
          {dimensions.label} ({dimensions.width}x{dimensions.height}px)
        </h2>
      )}

      <div className="card mb-4">
        <div className="card-body p-4">
          <div className="d-flex flex-column align-items-center">
            <div
              className="border border-2 border-dashed rounded p-4 w-100 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
              style={{
                minHeight: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {selectedImage ? (
                <div className="position-relative w-100 d-flex justify-content-center">
                  <img
                    src={selectedImage || "/placeholder.svg"}
                    alt="Preview"
                    width={dimensions.width}
                    height={dimensions.height}
                    className="img-fluid"
                    style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
                  />
                  <button
                    className="position-absolute top-0 end-0 btn btn-danger"
                    style={{ margin: "8px" }}
                    onClick={handleRemoveImage}
                  >
                    <i className="flaticon-cancel"></i>
                  </button>
                </div>
              ) : (
                <>
                  <i className="bi bi-upload fs-1 text-secondary mb-2"></i>
                  <p className="text-secondary mb-1">Haz clic para seleccionar o arrastra una imagen</p>
                  <p className="text-secondary small">
                    {dimensions.label}: {dimensions.width} x {dimensions.height} px (Formato: JPG, PNG)
                  </p>
                  <p className="text-secondary small mt-1">Podrás recortar la imagen después de seleccionarla</p>
                </>
              )}
              <input
                type="file"
                ref={fileInputRef}
                className="d-none"
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
              />
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="alert alert-danger mb-4" role="alert">
          <i className="bi bi-exclamation-circle me-2"></i>
          {error}
        </div>
      )}
    </div>
  )
}
