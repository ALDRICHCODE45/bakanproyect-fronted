import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Input,
  Table,
  Tag,
  Space,
  Modal,
  Form,
  Select,
  Divider,
  Typography,
  Button,
  Image,
  Result,
} from "antd";
import {
  SearchOutlined,
  EditOutlined,
  ZoomInOutlined,
} from "@ant-design/icons";

import "./tableStyles.css";
import { useSearch } from "../hooks/useSearch";

const { Column } = Table;

export const AdminChoferes = () => {
  const navigate = useNavigate();
  const {
    handleSearch,
    handleSearchInputChange,
    searchTerm,
    selectedDriver,
    tableAnimationClass,
  } = useSearch();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const estadosColores = {
    "En camino": "blue",
    Entregado: "green",
    Pendiente: "gold",
    "Con problemas": "red",
  };

  const handleEdit = (record) => {
    setSelectedRow(record);
    setModalVisible(true);
    console.log(selectedDriver);
  };

  const handleDetails = (record) => {
    navigate(`/product/${record.id}`, { replace: true });
  };

  const handleModalCancel = useCallback(() => {
    setModalVisible(false);
    setSelectedRow(null);
  }, []);

  return (
    <div className="admin-view-container">
      <div className="search-container">
        <Input
          placeholder="Buscar chofer"
          onPressEnter={handleSearch}
          onChange={handleSearchInputChange}
          addonBefore={<SearchOutlined />}
          style={{ marginBottom: 16 }}
        />
      </div>

      <Result
        status="404"
        title={`introduce un  nombre de usuario`}
        style={{ display: searchTerm === "" ? "" : "none" }}
      />
      <Result
        status="500"
        title={`el chofer ${searchTerm} no existe`}
        subTitle="asegúrese de escribir correctamente"
        style={{
          display: searchTerm && selectedDriver?.length === 0 ? "" : "none",
        }}
      />

      {selectedDriver?.length > 0 && (
        <div className="driver-info-container">
          <div className="driver-info">
            <Space style={{ display: "flex", justifyContent: "center" }}>
              <Image
                width={100}
                className={`animate__animated ${tableAnimationClass}`}
                src={
                  selectedDriver?.avatar ||
                  `https://cdn-icons-png.flaticon.com/512/4140/4140039.png`
                }
                placeholder={
                  <Image
                    preview={false}
                    src="https://cdn-icons-png.flaticon.com/512/4140/4140039.png "
                    width={200}
                  />
                }
              />
            </Space>
            <Typography.Title
              className={`animate__animated ${tableAnimationClass}`}
              style={{
                paddingTop: 12,
                display: "flex",
                justifyContent: "center",
              }}
              level={5}
            >
              {selectedDriver?.[0]?.chofer.toUpperCase()}
            </Typography.Title>
          </div>
          <Divider type="vertical" />
          <div className="tasks-table">
            <Table
              key={selectedDriver ? selectedDriver.length : 0}
              dataSource={selectedDriver}
              rowKey="id"
              className={`animate__animated ${tableAnimationClass}`}
              pagination={false}
            >
              <Column
                title="ASIGNACIONES"
                dataIndex="descripcionProducto"
                key="descripcionProducto"
              />
              <Column
                title="Estado"
                dataIndex="estado"
                key="estado"
                render={(estado) => (
                  <Tag color={estadosColores[estado]}>{estado}</Tag>
                )}
              />
              <Column
                title="Acompañantes"
                dataIndex="acompanantes"
                key="acompanantes"
                render={(acompanantes) => (
                  <Space size="middle">
                    {acompanantes.map((acompanante) => (
                      <span key={acompanante}>{acompanante}</span>
                    ))}
                  </Space>
                )}
              />
              <Column
                title="Acciones"
                key="acciones"
                render={(_, record) => (
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
                )}
              />
            </Table>
          </div>
        </div>
      )}

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
            estado: selectedRow?.estado || "En camino", // Valor por defecto
          }}
          onFinish={(values) => {
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
