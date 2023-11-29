import { ProyectLayout } from "../Layout/ProyectLayout";
import { PrivateView } from "../Routes/PrivateView";
import { useState } from "react";
import { UserTable } from "../components/UserTable";
import { FormCreateUser } from "../components/FormCreateUser";
import { ROLES } from "../../auth/roles";

export const ConfigPage = () => {
  const [data, setData] = useState([
    { key: Math.random(), name: "Aldrich", rol: ROLES.ADMIN },
    { key: Math.random(), name: "Gerardo", rol: ROLES.CHOFERES },
  ]);

  return (
    <ProyectLayout>
      <PrivateView pageName="configuracion">
        <FormCreateUser setData={setData} />
        <UserTable data={data} setData={setData} />
      </PrivateView>
    </ProyectLayout>
  );
};
