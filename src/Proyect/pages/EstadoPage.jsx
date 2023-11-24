import { ProyectLayout } from "../Layout/ProyectLayout";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Flex } from "antd";
import { Avatar, Card } from "antd";
const { Meta } = Card;

export const EstadoPage = () => {
  return (
    <ProyectLayout>
      <Flex wrap="wrap" gap="large">
        {Array.from({ length: 20 }, (_, i) => (
          <Card
            hoverable
            key={i}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              }
              title="Pedido 2"
              description="asignado al chofer numero 3"
            />
          </Card>
        ))}
      </Flex>
    </ProyectLayout>
  );
};
