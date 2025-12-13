import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/Login" />;
}

export default PrivateRoute;
