import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { Layout, Menu, theme, Typography, Button, Modal } from "antd";
import {
  CarOutlined,
  UserOutlined,
  SettingFilled,
  GlobalOutlined,
  ShoppingFilled,
  ExclamationCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { confirm } = Modal;
const { Header, Content, Sider } = Layout;

import logo from "../../assets/bakan6.png";
import { useAuthStore } from "../../hooks/useAuthStore";

export const ProyectLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { startLogOutUser, user } = useAuthStore();
  const { userName, rol } = user;
  const location = useLocation();

  const onLogOutUser = useCallback(() => {
    confirm({
      title: `¿Seguro que quieres salir de la aplicacion?`,
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
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const newUserName = useMemo(() => {
    const newUser = userName.split(" ");
    if (newUser.length > 1) {
      return `${newUser[0].toUpperCase()} ${newUser[1]
        .substring(0, 3)
        .toUpperCase()}... | ${rol.toUpperCase()}`;
    } else {
      return `${newUser[0].toUpperCase()} | ${rol.toUpperCase()}`;
    }
  }, [userName]);

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
            // {
            //   key: "/embarques",
            //   icon: <CodeSandboxOutlined />,
            //   label: <Link to="/embarques">EMBARQUES</Link>,
            // },
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
          width: isSmallScreen ? "100%" : "calc(100% - 300px)",
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
              icon={
                <LogoutOutlined
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                />
              }
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
              {newUserName}
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
