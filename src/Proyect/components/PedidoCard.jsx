import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { Card } from "antd";
import { useEffect, useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import bakan from "../../assets/bakan6.png";
const { Meta } = Card;

export const PedidoCard = ({
  descripcionProducto,
  estado,
  id,
  avatar,
  entidadFederativaAlcaldia,
}) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const newTitle = useMemo(() => {
    return descripcionProducto.length > 17
      ? descripcionProducto.substring(0, 17) + "..."
      : descripcionProducto;
  }, [descripcionProducto]);

  const newDescription = useMemo(() => {
    return `${estado} | ${
      entidadFederativaAlcaldia.length > 10
        ? entidadFederativaAlcaldia.substring(0, 10) + "..."
        : entidadFederativaAlcaldia
    }`;
  }, [entidadFederativaAlcaldia]);

  return (
    <Card
      className="animate__animated animate__fadeIn "
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
      <Meta avatar={avatar} title={newTitle} description={newDescription} />
    </Card>
  );
};
