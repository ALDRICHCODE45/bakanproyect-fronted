import { useState } from "react";
import { ProyectLayout } from "../Layout/ProyectLayout";
import { useParams } from "react-router-dom";
import {
  Typography,
  Row,
  Col,
  Card,
  Form,
  Input,
  Upload,
  Button,
  DatePicker,
  Select,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useAuthStore } from "../../hooks/useAuthStore";
import { ROLES } from "../../auth/roles";
import {EmptyData} from "../components/EmptyData";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export const ProductDetail = () => {
  const { user } = useAuthStore();
  const { rol } = user;
  const disabled = rol === ROLES.ADMIN || rol === ROLES.CHOFERES;
  const [imageList, setImageList] = useState([]);

  const { id } = useParams();

  console.log(id);

  const handleImageUpload = (info) => {
    if (info.file.status === "done") {
      setImageList([...imageList, info.file.response.url]);
    }
  };

  return (
    <ProyectLayout>
      <div>
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          Detalles del Producto
        </Title>

        {/* Título del Producto */}
        <Card>
          <Title level={4}>Título del Producto</Title>
          <p>Fecha de Creación: 01/01/2023</p>
          {/* Otros detalles del producto */}
        </Card>

        {/* Subir Imágenes */}
        <Card style={{ marginTop: "20px" }}>
          <Title level={4}>Subir Imágenes</Title>
          {disabled ? (
            <Upload
              //action="/api/upload"
              listType="picture-card"
              showUploadList={false}
              //onChange={handleImageUpload}
            >
              {imageList.length < 5 && (
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Subir</div>
                </div>
              )}
            </Upload>
          ) : (
            <EmptyData/>
          )}
          {imageList.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Imagen ${index + 1}`}
              style={{ maxWidth: "100%", marginTop: "10px" }}
            />
          ))}
        </Card>

        {/* Asignar Chofer */}
        <Card style={{ marginTop: "20px" }}>
          <Title level={4}>Asignar Chofer</Title>
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Nombre del Chofer">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Número de Camioneta">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Fecha de Asignación">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              {/* Campos para asignar al chofer*/}
              <Col span={12}>
                <Form.Item label="Chofer">
                  <Select placeholder="Selecciona un Chofer">
                    <Option value="chofer1">Chofer 1</Option>
                    <Option value="chofer2">Chofer 2</Option>
                    {/* Puedes agregar más Options según tus necesidades */}
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Notas">
                  <TextArea rows={4} />
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary">Guardar Asignación</Button>
          </Form>
        </Card>
      </div>
    </ProyectLayout>
  );
};
