import { Navigate, Route, Routes } from "react-router-dom";
import { ChoferesPage, EmbarquesPage, VentasPage } from "../pages";

export const ProyectRouter = () => {
  return (
    <Routes>
      <Route path="ventas" element={<VentasPage />} />
      <Route path="embarques" element={<EmbarquesPage />} />
      <Route path="choferes" element={<ChoferesPage />} />
      <Route path="/*" element={<Navigate to="/ventas" />} />
    </Routes>
  );
};
