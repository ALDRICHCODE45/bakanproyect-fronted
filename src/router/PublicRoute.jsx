import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

export const PublicRoute = ({ children }) => {
  const { status } = useAuthStore();
  const lastPath = localStorage.getItem("lastPath") || "/";
  return status === "authenticated" ? <Navigate to={lastPath} /> : children;
};
