import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Card,
  Select,
  notification,
} from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { ROLES } from "../../auth/roles";

export const FormCreateUser = ({ setData }) => {
  const [form] = Form.useForm();

  const onFinishAddUser = (values) => {
    // Lógica para agregar un nuevo usuario
    console.log(values);
    try {
      const newUser = {
        key: Math.random(),
        name: values.username,
        rol: values.rol,
      };
      setData((previousValue) => [...previousValue, newUser]);
    } catch (e) {
      /* handle error */
      console.log(e);
    }
    notification.success({
      message: `Usuario ${values.username} creado con éxito`,
    });
    form.resetFields();
  };
  return (
    <Row gutter={[16, 16]} justify="center">
      {/* Formulario para agregar usuarios */}
      <Col xs={24} md={12} lg={8} xl={6}>
        <Card
          title="Agregar Usuario"
          style={{ textAlign: "center" }}
          headStyle={{ background: "#001529", color: "#fff" }}
          bordered={false}
        >
          <Form
            name="addUser"
            form={form}
            onFinish={onFinishAddUser}
            layout="vertical"
          >
            <Form.Item
              label="Nombre del usuario"
              name="username"
              rules={[
                { required: true, message: "Ingrese el nombre de usuario" },
              ]}
            >
              <Input prefix={<UserAddOutlined />} />
            </Form.Item>

            <Form.Item
              label="Rol del usuario"
              name="rol"
              rules={[{ required: true, message: "Ingrese el Rol de usuario" }]}
            >
              <Select>
                <Select.Option value={ROLES.ADMIN}>ADMIN</Select.Option>
                <Select.Option value={ROLES.CHOFERES}>CHOFERES</Select.Option>
                <Select.Option value={ROLES.EMBARQUES}>EMBARQUES</Select.Option>
                <Select.Option value={ROLES.VENTAS}>VENTAS</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Contraseña del usuario"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Ingrese la contraseña del usuario",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Agregar Usuario
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
