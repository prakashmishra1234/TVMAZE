import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "../component/Details";
import Home from "../component/Home";
import SearchedResult from "../component/SearchedResult";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/searched-result" element={<SearchedResult />} />
    </Routes>
  );
};

export default Navigation;
