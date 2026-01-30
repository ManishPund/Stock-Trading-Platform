import React from "react";

const Hero = () => {
  return (
    <div className="container p-5 my-5">
      <div className="row text-center">
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
        <button className="my-4 w-25 m-auto py-2 btn btn-primary fs-4">
          Signup Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
