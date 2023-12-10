import { useState, useCallback, useEffect } from "react";
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
import { useProyect } from "../hooks/useProyect";
import "./tableStyles.css";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

const { Column } = Table;

export const AdminChoferes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { fetchProducts } = useProyect();
  const { q = "" } = queryString.parse(location.search);

  const [searchTerm, setSearchTerm] = useState(q);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [tableAnimationClass, setTableAnimationClass] = useState("");

  const showSearch = q.length === 0;
  const showError = q.length > 0 && selectedDriver?.length === 0;

  const estadosColores = {
    "En camino": "blue",
    Entregado: "green",
    Pendiente: "gold",
    "Con problemas": "red",
  };

  const handleSearch = async () => {
    try {
      // Realiza la búsqueda de productos
      const driverdata = await fetchProducts(searchTerm);

      // Actualiza la URL después de que se han obtenido los datos
      navigate(`?q=${searchTerm}`);

      // Elimina la clase de animación antes de actualizar los datos
      setTableAnimationClass("");

      // Actualiza el estado con los datos obtenidos
      setSelectedDriver(driverdata);

      // Agrega la clase de animación después de actualizar los datos
      setTableAnimationClass("animate__animated animate__fadeInUp");
    } catch (error) {
      // Manejo de errores si es necesario
      console.error("Error al buscar productos:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
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

  useEffect(() => {
    // Esta función se ejecuta al montar el componente
    return () => {
      // Esta función se ejecuta al desmontar el componente
      useLocation.search = ""; // Limpiar parámetros de consulta
    };
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
        status="500"
        title={`el chofer ${q} no existe`}
        subTitle="asegurese de escribir correctamente"
        style={{ display: showError ? "" : "none" }}
      />
      <Result
        status="404"
        subTitle="introduce un nombre de usuario"
        style={{ display: showSearch ? "" : "none" }}
      />

      {selectedDriver?.length > 0 && (
        <div className="driver-info-container">
          <div className="driver-info">
            <Space size={12}>
              <Image
                width={100}
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
              style={{ paddingLeft: 4, paddingTop: 12 }}
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
                title="Tareas"
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
