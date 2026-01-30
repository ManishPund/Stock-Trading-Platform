import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/login`,
        {
          ...inputValue,
        },
      );
      console.log(data);
      const { success, message, token } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.open(
            `${import.meta.env.VITE_DASHBOARD_URL}/dashboard?token=${token}`,
            "_blank",
            "noopener,noreferrer",
          );
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <section className="container py-4 py-md-5">
      <div className="row justify-content-center">
        <h1 className="fs-4 mb-4 text-center fw-semibold">
          Login to your account
        </h1>

        <div className="col-12 col-md-8 col-lg-6">
          <div className="card border border-1 shadow">
            <div className="card-body p-4 p-md-5">
              <form className="row g-3" onSubmit={handleSubmit}>
                {/* EMAIL */}
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

                {/* PASSWORD */}
                <div className="col-12">
                  <label htmlFor="password" className="form-label text-muted">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control rounded-1"
                    id="password"
                    name="password"
                    value={password}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    onChange={handleOnChange}
                  />
                </div>

                {/* LOGIN BUTTON */}
                <div className="col-12 mt-4">
                  <button type="submit" className="btn btn-primary w-100 py-2">
                    Login
                  </button>
                </div>

                {/* SIGNUP LINK */}
                <div className="col-12 text-center mt-3">
                  <span className="text-muted">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-decoration-none">
                      Create account
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

export default Login;
