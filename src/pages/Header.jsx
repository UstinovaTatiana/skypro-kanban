import { useNavigate } from "react-router-dom";
import React from "react";
import Header from "../components/header/Header";

const HeaderPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    console.log("handleLogout вызвана");
    setIsAuth(false);
    navigate("/Login");
  }
  return <Header onLogout={handleLogout} />;
};

export default HeaderPage;
