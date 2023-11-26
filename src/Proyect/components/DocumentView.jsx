import { Form, Input, Button, Row, Col} from "antd";
import { toast } from "sonner";

export const DocumentView = ({ cerrarModal }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Valores del formulario:", values);
    // Puedes realizar acciones con los valores del formulario aquí
    form.resetFields();

    cerrarModal();

    toast.success("Usuario creado correctamente");
  };
  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Campo 1"
              name="campo1"
              rules={[
                { required: true, message: "Por favor, ingresa el Campo 1" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Campo 3"
              name="campo3"
              rules={[
                { required: true, message: "Por favor, ingresa el Campo 3" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Campo 5"
              name="campo5"
              rules={[
                { required: true, message: "Por favor, ingresa el Campo 5" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Campo 7"
              name="campo7"
              rules={[
                { required: true, message: "Por favor, ingresa el Campo 7" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Campo 2"
              name="campo2"
              rules={[
                { required: true, message: "Por favor, ingresa el Campo 2" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Campo 4"
              name="campo4"
              rules={[
                { required: true, message: "Por favor, ingresa el Campo 4" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Campo 6"
              name="campo6"
              rules={[
                { required: true, message: "Por favor, ingresa el Campo 6" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Campo 8"
              name="campo8"
              rules={[
                { required: true, message: "Por favor, ingresa el Campo 8" },
                <Form.Item
                  label="Campo 3"
                  name="campo3"
                  rules={[
                    {
                      required: true,
                      message: "Por favor, ingresa el Campo 1",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>,
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          {/* Repite este bloque para los demás campos */}
        </Row>
      </div>

      <Form.Item
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
        wrapperCol={{ span: 16 }}
      >
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};
