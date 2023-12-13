import { Empty } from "antd";

export const EmptyData = ({ text }) => (
  <Empty
    description={<span>no tienes los permisos necesarios para {text}</span>}
  ></Empty>
);
