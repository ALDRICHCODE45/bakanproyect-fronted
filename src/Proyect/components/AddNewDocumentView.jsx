import { useState } from "react";
import { Button, Space, Typography } from "antd";
import { PlusOutlined, FormOutlined } from "@ant-design/icons";
import { DocumentView } from "./DocumentView";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

export const AddNewDocumentView = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const mostrarForm = () => {
    setMostrarFormulario(true);
  };

  const cerrarModal = () => {
    setMostrarFormulario(false);
  };
  const navigate = useNavigate();

  return (
    <div
      style={{ textAlign: "center", padding: "20px" }}
      className="animate__animated animate__fadeInUp"
    >
      <Title level={2} style={{ marginBottom: "20px" }}>
        Crea un nuevo registro
      </Title>
      {mostrarFormulario ? (
        <DocumentView cerrarModal={() => cerrarModal()} />
      ) : (
        <Space size="large">
          <Button type="primary" icon={<PlusOutlined />} onClick={mostrarForm}>
            Nuevo Registro
          </Button>
          <Button
            type="default"
            onClick={() => navigate("/estado")}
            icon={<FormOutlined />}
            style={{ borderRadius: "8px" }}
          >
            Ver Registros
          </Button>
        </Space>
      )}
    </div>
  );
};
