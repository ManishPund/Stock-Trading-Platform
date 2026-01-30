import React from "react";
import { Search } from "react-bootstrap-icons";

const Hero = () => {
  return (
    <section style={{ backgroundColor: "#f6f6f6" }}>
      <div className="container py-5">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-5">
          <h1 className="fs-2 fw-bold">Support Portal</h1>
          <button className="btn btn-primary px-4 py-2">My ticket</button>
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text  px-3 py-3" id="basic-addon1">
            <Search />
          </span>
          <input
            type="text"
            className="form-control  px-3 py-3"
            placeholder="Eg: How do i open my account, How do i activate F&O..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
