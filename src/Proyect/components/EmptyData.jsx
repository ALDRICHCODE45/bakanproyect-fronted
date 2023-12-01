import { Empty } from "antd";

export const EmptyData = ({text}) => (
  <Empty
    // image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    imageStyle={{}}
    description={
      <span>
        no tienes los permisos necesarios para {text} 
      </span>
    }
  ></Empty>
);
