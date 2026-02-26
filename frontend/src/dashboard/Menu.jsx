import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "./UserContext";

const Menu = () => {
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState();
  const [isProfileDropdownOpen, setIsProfileDropdownOp] = useState(false);

  const [userData] = useContext(UserDataContext);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handProfileClick = () => {
    setIsProfileDropdownOp((prev) => !prev);
  };

  const logout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {
        withCredentials: true,
      });
      sessionStorage.clear();
      navigate("/login");
    } catch (err) {
      console.error(err, "Logout failed");
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="/media/images/dashboard-logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/dashboard/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />

        <div className="profile-wrapper">
          <div className="profile" onClick={handProfileClick}>
            <div className="avatar">
              {userData?.firstName?.charAt(0).toUpperCase()}
              {userData?.lastName?.charAt(0).toUpperCase()}
            </div>
            <p className="username">{userData?.username}</p>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <Link to="/dashboard/profile" className="dropdown-item">
                Profile
              </Link>

              <button className="dropdown-item logout" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
