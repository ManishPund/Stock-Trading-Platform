import React from "react";
import Home from "../dashboard/Home";
import TopBar from "../dashboard/TopBar";
import "./DashboardPageRoutes.css";
import UserContext from "../dashboard/UserContext";

const DashboardPageRoutes = () => {
  return (
    <>
      <UserContext>
        <Home />
      </UserContext>
    </>
  );
};

export default DashboardPageRoutes;
