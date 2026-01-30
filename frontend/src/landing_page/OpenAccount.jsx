import React from "react";
import { Link } from "react-router-dom";

const OpenAccount = () => {
  return (
    <div className="container p-5 my-5">
      <div className="row text-center">
        <h1 className=" h2">Open a Zerodha account</h1>
        <p className="my-3">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to="/signup">
          <button className="my-4 w-25 m-auto py-2 btn btn-primary fs-5">
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OpenAccount;
