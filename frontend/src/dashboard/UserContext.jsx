import React, { useState } from "react";
import { createContext } from "react";

export const UserDataContext = createContext();

const UserContext = (props) => {
  const [userData, setUserData] = useState({});
  return (
    <>
      <UserDataContext.Provider value={[userData, setUserData]}>
        {props.children}
      </UserDataContext.Provider>
    </>
  );
};

export default UserContext;
