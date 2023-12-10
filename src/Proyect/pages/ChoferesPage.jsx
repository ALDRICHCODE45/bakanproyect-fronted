import { ProyectLayout } from "../Layout/ProyectLayout";
import { TareasAsignadas } from "../components/TareasAsignadas";
import { OnlyChoferesView } from "../Routes/OnlyChoferesView";

export const ChoferesPage = () => {
  return (
    <ProyectLayout>
      <OnlyChoferesView>
        <TareasAsignadas />
      </OnlyChoferesView>
    </ProyectLayout>
  );
};
