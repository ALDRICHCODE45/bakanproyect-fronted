import { useState } from "react";
import { Table, Tag, Space, Button, Modal, Form, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";

export const TareasAsignadas = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const estadosColores = {
    "En camino": "blue",
    Entregado: "green",
    Pendiente: "gold",
    "Con problemas": "red",
  };

  const columns = [
    {
      title: "TAREAS ASIGNADAS",
      dataIndex: "tarea",
      key: "tarea",
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
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      tarea: "Entregar paquetes",
      estado: "En camino",
    },
    {
      key: "2",
      tarea: "Recoger mercancía",
      estado: "Entregado",
    },
    {
      key: "3",
      tarea: "Realizar entrega especial",
      estado: "Pendiente",
    },
    {
      key: "4",
      tarea: "Revisar inventario",
      estado: "En camino",
    },
    {
      key: "5",
      tarea: "Coordinar logística de envíos",
      estado: "Pendiente",
    },
    {
      key: "6",
      tarea: "Visitar proveedores",
      estado: "Entregado",
    },
    {
      key: "7",
      tarea: "Organizar rutas de entrega",
      estado: "En camino",
    },
    {
      key: "8",
      tarea: "Atender llamadas de clientes",
      estado: "Pendiente",
    },
    {
      key: "9",
      tarea: "Resolver problemas de logística",
      estado: "Entregado",
    },
    {
      key: "10",
      tarea: "Planificar nuevas estrategias de entrega",
      estado: "Con problemas",
    },
    {
      key: "11",
      tarea: "Realizar análisis de mercado",
      estado: "En camino",
    },
    {
      key: "12",
      tarea: "Preparar informe de ventas",
      estado: "Pendiente",
    },
    {
      key: "13",
      tarea: "Coordinar reunión de equipo",
      estado: "En camino",
    },
    {
      key: "14",
      tarea: "Enviar propuestas a clientes",
      estado: "Pendiente",
    },
    {
      key: "15",
      tarea: "Actualizar documentación interna",
      estado: "Entregado",
    },
  ];

  const handleEdit = (record) => {
    setSelectedRow(record);
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setSelectedRow(null);
    setModalVisible(false);
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} />
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
