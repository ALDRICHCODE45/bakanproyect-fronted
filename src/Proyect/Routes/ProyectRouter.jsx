import { Navigate, Route, Routes } from "react-router-dom";
import { ChoferesPage, EmbarquesPage, VentasPage, ConfigPage,EstadoPage,ProductDetail } from "../pages";

export const ProyectRouter = () => {
  return (
    <Routes>
      <Route path="ventas" element={<VentasPage />} />
      <Route path="embarques" element={<EmbarquesPage />} />
      <Route path="choferes" element={<ChoferesPage />} />
      <Route path="config" element={<ConfigPage/>} />
      <Route path="estado" element={<EstadoPage/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path="/*" element={<Navigate to="/ventas" />} />
    </Routes>
  );
};
