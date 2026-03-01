import { ToastContainer, toast } from "react-toastify";
import { useContext, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";
import { UserDataContext } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [, , removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const [, setUserData] = useContext(UserDataContext);

  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const verifyUser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/verify`,
          { withCredentials: true },
        );

        setUserData(res.data.user);

        if (!sessionStorage.getItem("welcomed")) {
          toast(`Welcome ${res.data.user.username}`, {
            position: "bottom-right",
          });
          sessionStorage.setItem("welcomed", "true");
        }
      } catch {
        removeCookie("token");
        sessionStorage.removeItem("welcomed");
        navigate("/login");
      }
    };

    verifyUser();
  }, [removeCookie, navigate, setUserData]);

  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
