import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import { GlobalStorage } from "./UserContext";
import User from "./Components/User/User";
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="conta/*" element={<User />} />
        </Routes>
        <Footer />
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default App;
