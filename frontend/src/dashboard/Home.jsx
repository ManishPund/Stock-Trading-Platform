import { ToastContainer, toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import UserContext, { UserDataContext } from "./UserContext";

const Home = () => {
  const [, , removeCookie] = useCookies(["token"]);

  const [, setUserData] = useContext(UserDataContext);

  useEffect(() => {
    const verifyUser = async () => {
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
      <TopBar />
      <Dashboard />

      <ToastContainer />
    </>
  );
};

export default Home;
