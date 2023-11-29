import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Card } from "antd";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import bakan from "../../assets/bakan6.png";
const { Meta } = Card;

export const PedidoCard = ({ titulo, estado, id, avatar }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <Card
      loading={loading}
      hoverable
      cover={
        <img
          onClick={() => navigate(`/product/${id}`)}
          style={{
            width: 275.64,
          }}
          alt="example"
          src={bakan}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta avatar={avatar} title={titulo} description={estado} />
    </Card>
  );
};
