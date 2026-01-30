import React from "react";

const UniverseProduct = ({ href, img, desc }) => {
  return (
    <div className="card h-100 border-0 text-center">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-decoration-none text-reset h-100 d-flex flex-column"
      >
        {/* Logo container */}
        <div
          className="card-img-top d-flex align-items-center justify-content-center"
          style={{ minHeight: "90px", maxHeight: "90px" }}
        >
          <img
            src={img}
            alt=""
            className="img-fluid"
            style={{
              maxHeight: "60px",
              minWidth: "80%",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Text */}
        <div className="card-body px-3">
          <p className="card-text text-muted small">{desc}</p>
        </div>
      </a>
    </div>
  );
};

export default UniverseProduct;
