import { Toaster } from "sonner";
import { AppRouter } from "./router/AppRouter";

export const ProyectApp = () => {
  return (
    <>
      <Toaster expand richColors position="top-center" />
      <AppRouter />
    </>
  );
};
