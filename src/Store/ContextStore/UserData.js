import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [User, setUser] = useState({
    isLoading: false,
    user: [],
    errorMessage: "",
    filterUser: [],
    SampleName: "Sample name",
  });
  return (
    <UserContext.Provider value={[User, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
