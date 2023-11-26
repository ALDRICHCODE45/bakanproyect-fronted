import { ProyectLayout } from "../Layout/ProyectLayout";
import { PrivateView } from "../Routes/PrivateView";
import { useState } from "react";
import { UserTable } from "../components/UserTable";
import { FormCreateUser } from "../components/FormCreateUser";

export const ConfigPage = () => {
  const [data, setData] = useState([
    { key: Math.random(), name: "Gerardo", rol: "ventas" },
    { key: Math.random(), name: "Aldrich", rol: "admin" },
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
