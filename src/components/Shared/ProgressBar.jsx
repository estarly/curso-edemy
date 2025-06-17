"use client";
import React from "react";

const ProgressBar = ({ progress = 0, status = "Subiendo...", showPercentage = true }) => {
  return (
    <div className="progress-container">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="text-sm text-muted">{status}</span>
        {showPercentage && (
          <span className="text-sm text-muted">{Math.round(progress)}%</span>
        )}
      </div>
      <div className="progress" style={{ height: "8px" }}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span className="sr-only">{progress}% completado</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar; 