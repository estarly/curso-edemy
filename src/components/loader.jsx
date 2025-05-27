import React from "react";

const Loader = ({ status, title }) => {
  if (!status) return null;

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(255, 255, 255, 0.67)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="text-center">
        <div className="spinner-grow" role="status" style={{ width: "4rem", height: "4rem" }}>
          <span className="sr-only"></span>
        </div>
        {title && (
          <div className="mt-2">
            <span style={{ fontSize: "2rem", fontWeight: "bold", color: "#222" }}>
              {title}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;
