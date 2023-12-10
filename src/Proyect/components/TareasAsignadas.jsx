import { useCallback, useState } from "react";
import { Table, Tag, Space, Button, Modal, Form, Select } from "antd";
import { EditOutlined, ZoomInOutlined } from "@ant-design/icons";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useProyect } from "../hooks/useProyect";
import { useNavigate } from "react-router-dom";
import "./tableStyles.css";

export const TareasAsignadas = () => {
  const { user } = useAuthStore();
  const { products,cleanString } = useProyect();
  const { userName } = user;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const navigate = useNavigate();

  const estadosColores = {
    "En camino": "blue",
    Entregado: "green",
    Pendiente: "gold",
    "Con problemas": "red",
  };

  const columns = [
    {
      title: `ASIGNACIONES`,
      dataIndex: "descripcionProducto",
      key: "descripcionProducto",
    },
    {
      title: "ESTADO",
      dataIndex: "estado",
      key: "estado",
      render: (estado) => <Tag color={estadosColores[estado]}>{estado}</Tag>,
    },
    {
      title: "ACCIONES",
      key: "acciones",
      render: (_, record) => (
        <Space size="large">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Editar
          </Button>

          <Button
            type="dashed"
            icon={<ZoomInOutlined />}
            onClick={() => handleDetails(record)}
          >
            Detalles
          </Button>
        </Space>
      ),
    },
  ];

  const handleEdit = (record) => {
    setSelectedRow(record);
    setModalVisible(true);
  };

  const handleDetails = (record) => {
    navigate(`/product/${record.id}`);
  };

  const handleModalCancel = useCallback(() => {
    setSelectedRow(null);
    setModalVisible(false);
  }, []);


  const newProducts = useCallback(
    products
      ?.filter(
        (product) => cleanString(product.chofer) === cleanString(userName)
      )
      .map((filteredProduct) => ({ ...filteredProduct, key: Math.random() })),
    [products, userName]
  );

  return (
    <div style={{ overflowX: "auto" }}>
      <Table
        rowClassName="animate__animated animate__fadeInDown"
        columns={columns}
        dataSource={newProducts}
      />
      <Modal
        title="Cambia el estado"
        open={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        {/* Formulario para editar tarea */}
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={{
            tarea: selectedRow?.tarea || "",
            estado: selectedRow?.estado || "En camino", // Valor por defecto
          }}
          onFinish={(values) => {
            // Lógica para actualizar la tarea
            console.log("Tarea actualizada:", values);
            handleModalCancel();
          }}
        >
          <Form.Item
            label="Estado"
            name="estado"
            rules={[
              { required: true, message: "Por favor, selecciona el estado" },
            ]}
          >
            <Select>
              <Select.Option value="En camino">En camino</Select.Option>
              <Select.Option value="Entregado">Entregado</Select.Option>
              <Select.Option value="Con problemas">Con problemas</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
