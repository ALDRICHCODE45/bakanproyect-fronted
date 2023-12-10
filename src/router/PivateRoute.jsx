import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

export const PrivateRoute = ({ children }) => {
  const { status } = useAuthStore();
  const { pathname } = useLocation();

  localStorage.setItem("lastPath", pathname);

  return status === "authenticated" ? children : <Navigate to="login" />;
};
