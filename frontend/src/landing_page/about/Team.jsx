import React from "react";

const Team = () => {
  return (
    <section className="container p-lg-5 my-5 border-top">
      <div className="heading text-center mb-5">
        <h1 className="fs-3">People</h1>
      </div>
      <div className="row p-2 p-lg-5">
        <div className="col-12 col-lg-5 text-center">
          <div className="img ">
            <img
              src="media\images\nithinKamath.jpg"
              alt=""
              className="rounded-circle w-75"
            />
          </div>
          <div className="mt-3">
            <p>Nithin Kamath</p>
            <p className="text-muted small">Founder, CEO</p>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <p className="mb-4">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p className="mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p className="mb-4">Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="https://nithinkamath.me/" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a
              href="https://tradingqna.com/u/nithin/summary"
              className="text-decoration-none"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              href="https://twitter.com/Nithin0dha"
              className="text-decoration-none"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
