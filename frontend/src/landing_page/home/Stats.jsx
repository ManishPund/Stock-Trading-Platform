import React from "react";

const Stats = () => {
  return (
    <div className="container my-2 my-lg-5">
      <div className="row mx-auto">
        <div className="col-12 col-lg-5 p-3 p-lg-5 my-2 my-lg-4">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="mb-4">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.{" "}
            <a href="" className="text-decoration-none">
              Our philosophies.
            </a>
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="mb-4">
            With initiatives like{" "}
            <a href="" className="text-decoration-none">
              Nudge
            </a>{" "}
            and{" "}
            <a href="" className="text-decoration-none">
              Kill Switch
            </a>
            , we don't just facilitate transactions, but actively help you do
            better with your money.
          </p>
        </div>
        <div className="col-12 col-lg-7 p-5 text-center">
          <img
            src="media\images\ecosystem.png"
            alt="Ecosystem Image"
            className="img-fluid "
          />
          <div className="d-flex align-items-center justify-content-center gap-4">
            <a href="" className="text-decoration-none">
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="" className="text-decoration-none">
              Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
