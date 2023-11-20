import { ProyectLayout } from "../Layout/ProyectLayout";
import { PrivateView } from "../Routes/PrivateView";
import { ROLES } from "../../auth/roles";

import { Typography } from "antd";

export const EmbarquesPage = () => {
  return (
    <ProyectLayout>
      <PrivateView Rol={ROLES.EMBARQUES} pageName="embarques">
        <Typography.Title>Embarques Page</Typography.Title>
      </PrivateView>
    </ProyectLayout>
  );
};
