import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNum: "",
    username: "",
    password: "",
  });
  const { firstName, lastName, email, mobileNum, password, username } =
    inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true },
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      firstName: "",
      lastName: "",
      email: "",
      mobileNum: "",
      username: "",
      password: "",
    });
  };

  return (
    <section className="container py-4 py-md-5">
      <div className="row mx-auto justify-content-center">
        <h1 className="fs-4 mb-4 text-center fw-semibold">
          Create your account
        </h1>

        <div className="col-12 col-md-8 col-lg-6">
          <div className="card border border-1 shadow">
            <div className="card-body p-4 p-md-5">
              <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label text-muted">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-1"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    placeholder=""
                    autoComplete="given-name"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label text-muted">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-1"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    placeholder=""
                    autoComplete="family-name"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-12">
                  <label htmlFor="email" className="form-label text-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-1"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="you@example.com"
                    autoComplete="email"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="mobileNum" className="form-label text-muted">
                    Mobile No.
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">+91</span>

                    <input
                      type="tel"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength="10"
                      className="form-control rounded-1"
                      id="mobileNum"
                      name="mobileNum"
                      value={mobileNum}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-12">
                  <label htmlFor="username" className="form-label text-muted">
                    Username
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control rounded-1"
                      id="username"
                      name="username"
                      value={username}
                      onChange={handleOnChange}
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <label htmlFor="password" className="form-label text-muted">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-1"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    value={password}
                    onChange={handleOnChange}
                  />
                  <small className="text-muted">
                    Must be at least 8 characters
                  </small>
                </div>

                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-primary w-100 py-2">
                    Create account
                  </button>
                </div>
                <div className="col-12 text-center mt-3">
                  <span className="text-muted">
                    Already have an account?{" "}
                    <Link to="/login" className="text-decoration-none">
                      Login
                    </Link>
                  </span>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
