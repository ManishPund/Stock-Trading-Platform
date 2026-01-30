import React from "react";

const Hero = () => {
  return (
    <section className="container my-5 p-2 p-lg-5">
      <div className="row text-center">
        <h1 className="fs-3">Charges</h1>
        <p className="my-3 fs-5 text-muted">List of all charges and taxes</p>
      </div>
      <div className="row my-5 text-center  row-cols-sm-2">
        <div className="col-12 col-lg ">
          <img
            src="media/images/pricingEquity.svg"
            alt=""
            className="img-fluid p-5"
          />
          <h2 className="fs-3 mb-4">Free equity delivery</h2>
          <p className="f-6 text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-12 col-lg ">
          <img
            src="media/images/intradayTrades.svg"
            alt=""
            className="img-fluid p-5"
          />
          <h2 className="fs-3 mb-4">Intraday and F&O trades</h2>
          <p className="f-6 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-12 col-lg ">
          <img
            src="media/images/pricingMF.svg"
            alt=""
            className="img-fluid p-5"
          />
          <h2 className="fs-3 mb-4">Free direct MF</h2>
          <p className="f-6 text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
