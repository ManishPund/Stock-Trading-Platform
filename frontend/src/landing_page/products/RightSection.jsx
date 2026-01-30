import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  linkText,
  linkURL,
}) => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-12 col-lg-4 p-2 p-lg-5  my-5 d-flex flex-column justify-content-center order-2 order-lg-1">
          <h1 className="fs-3 mb-4">{productName}</h1>
          <p className="mb-4">{productDescription}</p>
          <div className="mb-4">
            <a href={linkURL} className="text-decoration-none">
              {linkText} <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-7 col-12 offset-lg-1 p-2 p-lg-5 text-center order-1 order-lg-2">
          <img src={imageURL} alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default RightSection;
