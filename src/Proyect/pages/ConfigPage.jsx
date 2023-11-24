import { useState } from "react";
import { ProyectLayout } from "../Layout/ProyectLayout";
import { PrivateView } from "../Routes/PrivateView";
import { Form, Input, Button, message, Row, Col, Card } from "antd";

export const ConfigPage = () => {
  const [deleteUserName, setDeleteUserName] = useState("");

  const [form] = Form.useForm();

  const onFinishAddUser = (values) => {
    console.log(values);
    // Lógica para agregar un nuevo usuario
    message.success("Usuario creado con éxito");
    form.resetFields();
  };

  const onFinishDeleteUser = () => {
    // Lógica para eliminar un usuario
    console.log(deleteUserName);
    message.success(`Usuario ${deleteUserName} eliminado con éxito`);
  };

  return (
    <ProyectLayout>
      <PrivateView pageName="configuracion">
        <Row style={{ paddingTop: "40px" }} justify="center" align="middle">
          <Col xs={24} xl={12} span={12}>
            {/* Formulario para agregar usuarios */}
            <Card
              title="Agregar Usuario"
              style={{ width: "80%", textAlign: "center", margin: "auto" }}
            >
              <Form name="addUser" form={form} onFinish={onFinishAddUser}>
                <Form.Item
                  label="Nombre del usuario"
                  name="username"
                  rules={[
                    { required: true, message: "Ingrese el nombre de usuario" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Rol del usuario"
                  name="Rol"
                  rules={[
                    { required: true, message: "Ingrese el Rol de usuario" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Contrasena del usuario"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese la contrasena del usuario",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                {/* Otros campos del formulario para agregar usuarios */}

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Agregar Usuario
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          <Col xs={24} xl={12} span={12}>
            {/* Formulario para eliminar usuarios */}
            <Card
              title="Eliminar Usuario"
              style={{ width: "80%", textAlign: "center", margin: "auto" }}
            >
              <Form name="deleteUser" onFinish={onFinishDeleteUser}>
                <Form.Item
                  label="Nombre de usuario a eliminar"
                  name="deleteUsername"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el nombre de usuario a eliminar",
                    },
                  ]}
                >
                  <Input onChange={(e) => setDeleteUserName(e.target.value)} />
                </Form.Item>

                <Form.Item>
                  <Button danger htmlType="submit">
                    Eliminar Usuario
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </PrivateView>
    </ProyectLayout>
  );
};
