import { ToastContainer, toast } from "react-toastify";
import { useContext, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import UserContext, { UserDataContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
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
        navigate("/login");
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
