import React from "react";
import Header from "../common/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../home/Home";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Pages;
