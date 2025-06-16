import React from "react";
import DeleteButton from "./../DeleteButton";
import FileAssetButton from "./FileAssetButton";
import AssignmentComponent from "@/app/instructor/course/[courseId]/lessons/_components/AssignmentComponent";

const AssetItem = ({ courseId, asset, assignmentsTypes, onEdit }) => {
  return (
    <div className="col-md-3" key={asset.id}>
      <div className="card h-100">
        {/* Video - Tipo 1 */}
        {asset.assetTypeId === 1 && asset.config_asset?.val && (
          <div className="video-container" style={{ height: "160px", overflow: "hidden" }}>
            <video width="100%" height="100%" style={{ objectFit: "cover" }} controls>
              <source
                src={asset.config_asset.val}
                type="video/mp4"
              />
              Tu navegador no soporta videos HTML.
            </video>
          </div>
        )}

        {/* Audio - Tipo 2 */}
        {asset.assetTypeId === 2 && asset.config_asset?.val && (
          <div className="audio-container" style={{ height: "160px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <i className="fas fa-music fa-3x mb-2 text-primary"></i>
            <audio controls className="w-100 px-3">
              <source src={asset.config_asset.val} type="audio/mpeg" />
              Tu navegador no soporta audio HTML.
            </audio>
          </div>
        )}

        {/* Documento - Tipo 3 */}
        {asset.assetTypeId === 3 && asset.config_asset?.val && (
          <div className="file-container" style={{ height: "160px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <i className="fas fa-file-alt fa-3x mb-3 text-info"></i>
            <a href={asset.config_asset.val} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Ver documento
            </a>
          </div>
        )}

        {/* Link Externo - Tipo 4 */}
        {asset.assetTypeId === 4 && asset.config_asset?.val && (
          <div className="link-container" style={{ height: "160px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <i className="fas fa-external-link-alt fa-3x mb-3 text-success"></i>
            <a href={asset.config_asset.val} className="btn btn-success" target="_blank" rel="noopener noreferrer">
              Visitar enlace
            </a>
          </div>
        )}

        {/* YouTube - Tipo 5 */}
        {asset.assetTypeId === 5 && asset.config_asset?.val && (
          <div className="youtube-container" style={{ height: "160px", overflow: "hidden" }}>
            <iframe
              width="100%"
              height="100%"
              src={asset.config_asset.val.replace('watch?v=', 'embed/')}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={asset.title}
            ></iframe>
          </div>
        )}

        {/* Online Session - Tipo 6 */}
        {asset.assetTypeId === 6 && asset.config_asset && (
          <div className="session-container" style={{ height: "160px", overflow: "auto", padding: "15px" }}>
            <div className="d-flex align-items-center mb-2">
              <strong className="me-2">Plataforma:</strong> {asset.config_asset.platform}
            </div>
            <div className="d-flex align-items-center mb-2">
              <strong className="me-2">URL:</strong>
              <a href={asset.config_asset.val} className="text-truncate">Acceder</a>
            </div>
            {asset.config_asset.meeting_id && (
              <div className="d-flex align-items-center mb-2">
                <strong className="me-2">ID:</strong> {asset.config_asset.meeting_id}
              </div>
            )}
            {asset.config_asset.credits?.host && (
              <div className="d-flex align-items-center mb-2">
                <strong className="me-2">Anfitrión:</strong> {asset.config_asset.credits.host}
              </div>
            )}
          </div>
        )}

        <div className="card-body d-flex flex-column justify-content-between ">
          <div>
            <h6 className="card-title text-truncate">
              {asset.title}
            </h6>
            {asset.description && (
              <div
                className="card-text small text-muted description-container"
                style={{
                  maxHeight: "60px",
                  overflow: "hidden",
                  marginBottom: "10px"
                }}
                dangerouslySetInnerHTML={{ __html: asset.description }}
              />
            )}
          </div>
          <div className="mt-2 d-flex gap-2">
            <button
              className="btn btn-primary btn-sm"
              onClick={() => onEdit(asset)}
            >
              <i className="bx bx-pencil"></i>
            </button>
            <AssignmentComponent
              idAsset={asset.id}
              assignmentsTypes={assignmentsTypes}
            />
            <FileAssetButton courseId={courseId} lessonId={asset.id} />
            <DeleteButton assetId={asset.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetItem;
