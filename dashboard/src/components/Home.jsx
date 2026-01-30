import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies(["token"]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const verifyUser = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      if (!token) {
        // no token → redirect to frontend login
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        return;
      }

      // store token safely (temporary solution)
      localStorage.setItem("dashboard_token", token);

      // set axios header
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      // OPTIONAL: clean URL (remove token from address bar)
      window.history.replaceState({}, document.title, "/dashboard");

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/verify`,
          {
            withCredentials: true,
          },
        );

        setUserData(res.data.user);

        const hasWelcomed = sessionStorage.getItem("welcomed");

        if (!hasWelcomed) {
          toast(`Welcome ${res.data.user.username}`, {
            position: "bottom-right",
          });
          sessionStorage.setItem("welcomed", "true");
        }
      } catch {
        removeCookie("token");
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
      }
    };

    verifyUser();
  }, [removeCookie]);

  return (
    <>
      <TopBar userData={userData} />
      <Dashboard userData={userData} />
      <ToastContainer />
    </>
  );
};

export default Home;
