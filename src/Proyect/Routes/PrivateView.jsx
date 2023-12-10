import { useAuthStore } from "../../hooks/useAuthStore";
import { Unauthorized } from "../components/unAuthorized";

export const PrivateView = ({ children, Rol = "admin", pageName }) => {
  const { user } = useAuthStore();
  const { rol } = user;

  return rol === Rol || rol === "admin" ? (
    children
  ) : (
    <Unauthorized pageName={pageName} />
  );
};
