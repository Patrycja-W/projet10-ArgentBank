import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  //Outlet permet de rendre les composants enfants de ProtectedRoute accessibles, c'est un composant de react-router-dom
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};
