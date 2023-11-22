import { ProyectLayout } from "../Layout/ProyectLayout";
import { PrivateView } from "../Routes/PrivateView";

export const ConfigPage = () => {
  return (
    <ProyectLayout>
      <PrivateView pageName="configuracion">
        <h1>ConfigPage</h1>
      </PrivateView>
    </ProyectLayout>
  );
};
