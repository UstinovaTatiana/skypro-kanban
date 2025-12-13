import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NewCardPage from "../pages/NewCard";
import CardPage from "../pages/Card";
import BrowsePage from "../pages/Browse";
import MainPage from "../pages/Main";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import NotFoundPage from "../pages/NotFound";
import PrivateRoute from "../pages/PrivateRoute";
import HeaderPage from "../pages/Header";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <Routes>
      {/* Главная страница */}
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage loading={loading} />} />
        <Route path="card/add" element={<NewCardPage />} />
        <Route path="card/:id" element={<CardPage />} />
        <Route path="/browse" element={<BrowsePage />} />
      </Route>
      {/* Страница входа */}
      <Route path="/Login" element={<LoginPage setIsAuth={setIsAuth} />} />
      {/* Страница регистрации */}
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/exit" element={<HeaderPage setIsAuth={setIsAuth} />} />
    </Routes>
  );
}

export default AppRoutes;
