import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import AppRoutes from "./components/AppRoutes.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter позволяет управлять маршрутизацией в приложении */}
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
