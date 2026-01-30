import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  coin,
  googlePlay,
  appStore,
}) => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col-12 col-lg-7 p-2 p-lg-5 text-center">
          <img src={imageURL} alt="" className="img-fluid" />
        </div>
        <div className="col-12 col-lg-4 offset-lg-1 p-2 p-lg-5 my-5 d-flex flex-column justify-content-center">
          <h1 className="fs-3 mb-4">{productName}</h1>
          <p className="mb-4">{productDescription}</p>
          <div className="mb-4">
            {tryDemo && (
              <a href={tryDemo} className="text-decoration-none me-2">
                Try Demo <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
            {learnMore && (
              <a href={learnMore} className="text-decoration-none">
                Learn More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
            {coin && (
              <a href={coin} className="text-decoration-none">
                Coin <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            )}
          </div>
          <div className="mb-4">
            <a href={googlePlay} className="text-decoration-none me-2">
              <img src="media\images\googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore} className="text-decoration-none">
              <img src="media\images\appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSection;
