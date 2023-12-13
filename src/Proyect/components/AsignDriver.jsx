import { useMemo } from "react";

import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Typography,
} from "antd";

import { ROLES } from "../../auth/roles";
import { useAuthStore } from "../../hooks/useAuthStore";
import { EmptyData } from "../components/EmptyData";

const { TextArea } = Input;
const { Option } = Select;
const { Title } = Typography;

export const AsignDriver = () => {
  const { user } = useAuthStore();
  const { rol } = user;

  const puedeAsignarChofer = useMemo(
    () => rol === ROLES.ADMIN || rol === ROLES.EMBARQUES,
    [rol]
  );

  return (
    <Card
      className="animate__animated animate__fadeInUp"
      style={{ marginTop: "20px" }}
    >
      <Title level={4}>Asignar Chofer</Title>
      {puedeAsignarChofer ? (
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
      ) : (
        <EmptyData text={"asignar chofer"} />
      )}
    </Card>
  );
};
