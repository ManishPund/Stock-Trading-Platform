import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container p-3 px-lg-5 my-2 my-lg-5">
      <div className="row mx-auto text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5 h2">Invest in everything</h1>
        <p>
          Online Platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <Link to="/signup">
          <button className="mx-auto my-2 my-lg-4 w-50 m-auto py-2 btn btn-primary fs-4">
            Signup Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
