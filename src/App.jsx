import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login/Login";
import { GlobalStorage } from "./UserContext";
import User from "./Components/User/User";
import Photo from "./Components/Photo/Photo";
import UserProfile from "./Components/User/UserProfile";
import NotFound from "./Components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <Route path="conta/*" element={<User />} />
          <Route path="foto/:id" element={<Photo />} />
          <Route path="perfil/:user" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </GlobalStorage>
    </BrowserRouter>
  );
};

export default App;
