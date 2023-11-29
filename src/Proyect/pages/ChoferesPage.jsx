import { ProyectLayout } from "../Layout/ProyectLayout";
import { PrivateView } from "../Routes/PrivateView";
import { ROLES } from "../../auth/roles";
import {TareasAsignadas} from "../components/TareasAsignadas";

export const ChoferesPage = () => {
  return (
    <ProyectLayout>
      <PrivateView Rol={ROLES.CHOFERES} pageName="choferes">
        <TareasAsignadas/>
      </PrivateView>
    </ProyectLayout>
  );
};
