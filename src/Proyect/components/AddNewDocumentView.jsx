import { useState } from "react";
import { Button, Space, Modal, Typography } from "antd";
import { PlusOutlined, FormOutlined } from "@ant-design/icons";
import { DocumentView } from "./DocumentView";
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

export const AddNewDocumentView = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const mostrarModal = () => {
    setMostrarFormulario(true);
  };

  const cerrarModal = () => {
    setMostrarFormulario(false);
  };
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Title level={3} style={{ marginBottom: "20px" }}>
        Crea un nuevo registro
      </Title>
      <Space size="large">
        <Button type="primary" icon={<PlusOutlined />} onClick={mostrarModal}>
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

      <Modal
        title="Introduce los campos"
        open={mostrarFormulario}
        onCancel={cerrarModal}
        footer=""
      >
        <DocumentView cerrarModal={cerrarModal} />
      </Modal>
    </div>
  );
};
