import {
  Button,
  Form,
  Input,
  DatePicker,
  Row,
  Space,
  notification,
  Modal,
  Col,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

export const DocumentView = ({ cerrarModal }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Valores del formulario:", values);
    // Puedes realizar acciones con los valores del formulario aquí

    confirm({
      title: `Se requiere confirmacion`,
      icon: <ExclamationCircleOutlined />,
      okText: "Confirmar",
      okType: "primary",
      cancelText: "cancelar",
      onOk() {
        cerrarModal();
        form.resetFields();
        notification.success({
          message: `Registro creado`,
          description:
            "puedes consultar los registros en el apartado de ESTADO",
        });
      },
    });
  };

  const handleCancel = () => {
    confirm({
      title: `¿Seguro que quieres cancelar este registro?`,
      icon: <ExclamationCircleOutlined />,
      okText: "Sí",
      okType: "danger",
      cancelText: "No",
      onOk() {
        cerrarModal();
        notification.error({
          message: `Registro cancelado`,
        });
      },
    });
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Nombre del documento"
            name="nombreDocumento"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese el nombre del documento",
              },
            ]}
          >
            <Input className="animate__animated animate__fadeIn" />
          </Form.Item>

          <Form.Item
            label="campo3"
            name="campo3"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese el campo3",
              },
            ]}
          >
            <Input className="animate__animated animate__fadeIn" />
          </Form.Item>

          <Form.Item
            label="campo5"
            name="campo5"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese el campo5",
              },
            ]}
          >
            <Input className="animate__animated animate__fadeIn" />
          </Form.Item>

          <Form.Item
            label="campo7"
            name="campo7"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese el campo7",
              },
            ]}
          >
            <Input className="animate__animated animate__fadeIn" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Fecha del documento"
            name="fechaDocumento"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese la fecha del documento",
              },
            ]}
          >
            <DatePicker
              style={{ width: "100%" }}
              className="animate__animated animate__fadeIn"
            />
          </Form.Item>

          <Form.Item
            label="campo4"
            name="campo4"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese el campo4",
              },
            ]}
          >
            <Input className="animate__animated animate__fadeIn" />
          </Form.Item>

          <Form.Item
            label="campo6"
            name="campo6"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese el campo6",
              },
            ]}
          >
            <Input className="animate__animated animate__fadeIn" />
          </Form.Item>

          <Form.Item
            label="campo8"
            name="campo8"
            rules={[
              {
                required: true,
                message: "Por favor, ingrese el campo8",
              },
            ]}
          >
            <Input className="animate__animated animate__fadeIn" />
          </Form.Item>
        </Col>
      </Row>
      {/* Otros campos del formulario para el nuevo registro */}

      <Form.Item>
        <Space>
          <Button
            danger
            onClick={() => handleCancel()}
            style={{ marginLeft: "auto" }}
          >
            Cancelar
          </Button>
          <Button type="primary" htmlType="submit">
            Crear Registro
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
