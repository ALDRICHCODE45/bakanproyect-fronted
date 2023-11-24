import { Button, Space, Modal } from "antd";
import { PlusOutlined, FormOutlined } from "@ant-design/icons";
import { DocumentView } from "./DocumentView";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <h1>Crea un nuevo registro</h1>
      <Space size="large">
        <Button type="primary" icon={<PlusOutlined />} onClick={mostrarModal}>
          Nuevo Registro
        </Button>
        <Button
          type="default"
          onClick={() => navigate("/estado")}
          icon={<FormOutlined />}
        >
          Ver Registros
        </Button>
      </Space>

      <Modal
        title="Mi Formulario"
        open={mostrarFormulario}
        onCancel={cerrarModal}
        footer=""
      >
        <DocumentView cerrarModal={cerrarModal} />
      </Modal>
    </div>
  );
};
