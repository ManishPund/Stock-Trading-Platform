import React from "react";

const Education = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/education.svg" alt="Varsity Image" />
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-2 my-5">Free and open market education</h1>
          <div className="my-5">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" className="text-decoration-none">
              Varsity <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="my-5">
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="" className="text-decoration-none">
              TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
