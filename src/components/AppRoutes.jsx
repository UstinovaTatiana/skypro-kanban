import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NewCardPage from "../pages/NewCard";
import CardPage from "../pages/Card";
import BrowsePage from "../pages/Browse";
import MainPage from "../pages/Main";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import NotFoundPage from "../pages/NotFound";
import PrivateRoute from "../pages/PrivateRoute";

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
      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      {/* Страница регистрации */}
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="\*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
