import React from "react";

const Awards = () => {
  return (
    <div className="container my-2 my-lg-5">
      <div className="row mx-auto">
        <div className="col-12 col-lg-6 p-3 p-lg-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker Image"
            className="w-100"
          />
        </div>
        <div className="col-12 col-lg-6 p-3 p-lg-5">
          <h1 className="my-3">Largest stock broker in india</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in india daily by trading and investing in:
          </p>
          <div className="row my-lg-5">
            <div className="col-12 col-md-6">
              <ul>
                <li>
                  <p>Future and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6">
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Gov. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media\images\pressLogos.png"
            alt="Press Logo"
            className="w-75"
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
