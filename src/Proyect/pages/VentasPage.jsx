import { ROLES } from "../../auth/roles";
import { ProyectLayout } from "../Layout/ProyectLayout";
import { PrivateView } from "../Routes/PrivateView";
import { AddNewDocumentView } from "../components/AddNewDocumentView";

export const VentasPage = () => {
  return (
    <ProyectLayout>
      <PrivateView Rol={ROLES.VENTAS} pageName="ventas">
        <AddNewDocumentView />
      </PrivateView>
    </ProyectLayout>
  );
};
