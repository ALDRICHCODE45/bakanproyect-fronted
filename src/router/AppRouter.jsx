import { Route, Routes } from "react-router-dom";
import { ProyectRouter } from "../Proyect/Routes/ProyectRouter";
import { PrivateRoute } from "./PivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LoginPage } from "../auth";

import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";
import { CheckAuthLoader } from "../ui/components/CheckAuthLoader";

export const AppRouter = () => {
  const { status } = useAuthStore();
  if (status === "checking") {
    return <CheckAuthLoader />;
  }

  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <ProyectRouter />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<Navigate to="login" />} />
      </Routes>
    </>
  );
};
