import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/verify`, {
        withCredentials: true,
      })
      .then(() => {
        setAuthorized(true);
        setLoading(false);
      })
      .catch(() => {
        setAuthorized(false);
        setLoading(false);

        // 🔥 HARD redirect to frontend login
        window.location.replace(`${import.meta.env.VITE_FRONTEND_URL}/login`);
      });
  }, []);

  if (loading) return null;

  return authorized ? <Outlet /> : null;
};

export default ProtectedRoute;
