import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/routing/Home/Home";
import Navbar from "./components/routing/Navbar/Navbar";
import Login from "./components/routing/Login/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
