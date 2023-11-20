import { Result } from "antd";

export const Unauthorized = ({ pageName }) => {
  const message = `No tienes los permisos necesarios para acceder a la pagina de ${pageName.toUpperCase()}`;
  return <Result status="403" title="):" subTitle={message} />;
};
