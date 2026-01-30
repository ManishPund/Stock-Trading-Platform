import React from "react";

const Pricing = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-4 p-5">
          <h1 className="fs-2 mb-5">Unbeatable pricing</h1>
          <p className="mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="text-decoration-none">
            See Pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-8 p-5 my-auto">
          <div className="pricing row ">
            <div className="d-flex col-4">
              <img
                src="media\images\pricing0.svg"
                alt="Pricing Image"
                className="w-50"
              />
              <p style={{ fontSize: "10px" }} className="mt-auto">
                Free account
                <br /> opening
              </p>
            </div>
            <div className="d-flex col-4">
              <img
                src="media\images\pricing0.svg"
                alt="Pricing Image"
                className="w-50"
              />
              <p style={{ fontSize: "10px" }} className="mt-auto">
                Free equity delivery <br />
                and direct mutual funds
              </p>
            </div>
            <div className="d-flex col-4">
              <img
                src="media\images\other-trades.svg"
                alt="Pricing Image"
                className="w-50"
              />
              <p style={{ fontSize: "10px" }} className="mt-auto">
                Intraday and <br />
                F&O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
