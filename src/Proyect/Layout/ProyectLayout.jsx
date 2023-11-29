import { useCallback, useEffect, useState } from "react";
import {
  CarOutlined,
  CodeSandboxOutlined,
  UserOutlined,
  SettingFilled,
  GlobalOutlined,
  ShoppingFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Typography, Button, Modal } from "antd";
import { useLocation, Link } from "react-router-dom";
import logo from "../../assets/bakan6.png";
import { useAuthStore } from "../../hooks/useAuthStore";
const { confirm } = Modal;

const { Header, Content, Sider } = Layout;

export const ProyectLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user, startLogOutUser } = useAuthStore();
  const { userName, rol } = user;
  const location = useLocation();

  const onLogOutUser = useCallback(() => {
    confirm({
      title: `¿Seguro que quieres salir?`,
      icon: <ExclamationCircleOutlined />,
      okText: "Sí",
      okType: "danger",
      cancelText: "No",
      onOk() {
        startLogOutUser();
      },
    });
  }, []);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth={0}
        style={{
          zIndex: 10,
          position: "fixed",
          height: "100vh",
          left: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px 0",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "90px", borderRadius: 100 }}
          />
        </div>
        <Menu
          style={{ paddingTop: "20px" }}
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={[
            {
              key: "/ventas",
              icon: <ShoppingFilled />,
              label: <Link to="/ventas">VENTAS</Link>,
            },
            {
              key: "/embarques",
              icon: <CodeSandboxOutlined />,
              label: <Link to="/embarques">EMBARQUES</Link>,
            },
            {
              key: "/choferes",
              icon: <CarOutlined />,
              label: <Link to="/choferes">CHOFERES</Link>,
            },
            {
              key: "/config",
              icon: <SettingFilled />,
              label: <Link to="/config">CONFIG</Link>,
            },
            {
              key: "/estado",
              icon: <GlobalOutlined />,
              label: <Link to="/estado">ESTADO</Link>,
            },
          ]}
        />
      </Sider>
      <Layout
        className="custom-layout"
        style={{
          marginLeft: isSmallScreen ? 0 : 200,
          width: isSmallScreen ? "100%" : "calc(100% - 200px)",
        }}
      >
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: isSmallScreen ? "100%" : "calc(100% - 200px)",
            background: colorBgContainer,
            padding: "0 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              danger
              onClick={() => onLogOutUser()}
              style={{ marginLeft: 16 }}
            >
              Salir
            </Button>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginRight: 16 }}
          >
            <Typography.Title
              level={2}
              style={{ fontSize: 17, color: "#518798", margin: 0 }}
            >
              {`${userName.toUpperCase()} - ${rol.toUpperCase()}`}
            </Typography.Title>
            <UserOutlined style={{ fontSize: 28, marginLeft: 16 }} />
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflowY: "auto" }}>
          <section
            style={{ maxWidth: "100%", maxHeight: "100%", paddingTop: "70px" }}
          >
            {children}
          </section>
        </Content>
      </Layout>
    </Layout>
  );
};
