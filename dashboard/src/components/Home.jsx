import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      // 1️⃣ Try URL token first (after login)
      const params = new URLSearchParams(window.location.search);
      let token = params.get("token");

      // 2️⃣ Fallback to stored token (refresh case)
      if (!token) {
        token = localStorage.getItem("dashboard_token");
      }

      // 3️⃣ No token → redirect to frontend login
      if (!token) {
        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
        return;
      }

      // 4️⃣ Save token (safe)
      localStorage.setItem("dashboard_token", token);

      // 5️⃣ Attach token to axios
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      // 6️⃣ Clean URL
      window.history.replaceState({}, document.title, "/dashboard");

      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/verify`,
        );

        setUserData(res.data.user);

        // Welcome toast only once per session
        if (!sessionStorage.getItem("welcomed")) {
          toast(`Welcome ${res.data.user.username}`, {
            position: "bottom-right",
          });
          sessionStorage.setItem("welcomed", "true");
        }
      } catch (err) {
        // ❌ Token invalid
        localStorage.removeItem("dashboard_token");
        delete axios.defaults.headers.common.Authorization;

        window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/login`;
      }
    };

    verifyUser();
  }, []);

  // Optional loading state
  if (!userData) return null;

  return (
    <>
      <TopBar userData={userData} />
      <Dashboard userData={userData} />
      <ToastContainer />
    </>
  );
};

export default Home;
