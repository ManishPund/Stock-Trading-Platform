import React from "react";

const Awards = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker Image"
          />
        </div>
        <div className="col-6 p-5">
          <h1 className="mb-3">Largest stock broker in india</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in india daily by trading and investing in:
          </p>
          <div className="row my-5">
            <div className="col-6">
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
            <div className="col-6">
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
