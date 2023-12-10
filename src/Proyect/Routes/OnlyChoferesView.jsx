import { ROLES } from "../../auth/roles";
import { useAuthStore } from "../../hooks/useAuthStore";
import {AdminChoferes} from "../components/AdminChoferes";
import { Unauthorized } from "../components/unAuthorized";

export const OnlyChoferesView = ({ children }) => {
  const { user } = useAuthStore();
  const { rol } = user;
  return rol === ROLES.CHOFERES ? (
    children
  ) : rol === ROLES.ADMIN ? (
    <AdminChoferes />
  ) : (
    <Unauthorized pageName="choferes" />
  );
};
