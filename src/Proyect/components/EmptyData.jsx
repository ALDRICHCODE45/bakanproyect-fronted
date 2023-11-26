import { Empty } from "antd";

export const EmptyData = () => (
  <Empty
    // image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{}}
    description={
      <span style={{ color: "#e74c3c" }}>
        no tienes los permisos necesarios para subir imagenes
      </span>
    }
  ></Empty>
);
