import { Typography } from "antd";
import { ProyectLayout } from "../Layout/ProyectLayout";
import { PrivateView } from "../Routes/PrivateView";
import { ROLES } from "../../auth/roles";

export const ChoferesPage = () => {
  return (
    <ProyectLayout>
      <PrivateView Rol={ROLES.CHOFERES} pageName="choferes">
        <Typography.Title>CHOFERES PAGE</Typography.Title>
      </PrivateView>
    </ProyectLayout>
  );
};
