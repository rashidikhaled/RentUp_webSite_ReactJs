import React from "react";
import Header from "../common/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};

export default Pages;
