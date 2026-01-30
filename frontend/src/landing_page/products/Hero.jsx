import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="container p-2 p-lg-5 my-5 border-bottom">
      <div className="row text-center">
        <h1 className=" fs-3">Zerodha Products</h1>
        <p className="my-3 fs-5 text-muted">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p>
          Check out our{" "}
          <a href="" className="text-decoration-none">
            investment offerings{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
