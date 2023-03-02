import React, { createContext, useState } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [tvShow, setTvShow] = useState([]);
  const [searchedResult, setSearchedResult] = useState([]);
  return (
    <AuthContext.Provider
      value={{ tvShow, searchedResult, setSearchedResult, setTvShow }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
