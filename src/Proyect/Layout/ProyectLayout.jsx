import {
  CarOutlined,
  LineChartOutlined,
  CodeSandboxOutlined,
  UserOutlined,
  SlidersOutlined,
  GlobalOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme, Typography, Button } from "antd";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useCallback } from "react";

const { Header, Content, Sider } = Layout;

export const ProyectLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user, startLogOutUser } = useAuthStore();
  const { userName, rol } = user;

  const onLogOutUser = useCallback(() => {
    startLogOutUser();
  }, []);

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="demo-logo-vertical" />
        <Menu
          style={{ paddingTop: "20px" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <LineChartOutlined />,
              label: <NavLink to="/ventas">VENTAS</NavLink>,
            },
            {
              key: "2",
              icon: <CodeSandboxOutlined />,
              label: <NavLink to="/embarques">EMBARQUES</NavLink>,
            },
            {
              key: "3",
              icon: <CarOutlined />,
              label: <NavLink to="/choferes">CHOFERES</NavLink>,
            },
            {
              key: "4",
              icon: <SlidersOutlined/>,
              label: <NavLink to="/config">Config</NavLink>,
            },
            {
              key: "5",
              icon: <GlobalOutlined/>,
              label: <NavLink to="/estado">Estado</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ paddingLeft: 20 }}>
            <Button danger onClick={() => onLogOutUser()}>
              Salir
            </Button>
          </div>
          <div style={{ display: "inline-flex" }}>
            <Typography.Title
              level={2}
              style={{ fontSize: 17, color: "#518798", marginTop: 15 }}
            >
              {`${userName.toUpperCase()} - ${rol.toUpperCase()}`}
            </Typography.Title>
            <UserOutlined
              style={{ paddingRight: 35, paddingLeft: 15, fontSize: 28 }}
            />
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div>{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};
