import {
  CarOutlined,
  LineChartOutlined,
  CodeSandboxOutlined,
  UserOutlined,
  SlidersOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Typography, Button } from "antd";
import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useCallback, useEffect, useState } from "react";
// import "./index.css";

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
            src="https://media.licdn.com/dms/image/C4E0BAQFZV3t8w-wK1w/company-logo_200_200/0/1630602791799/bakan_design_logo?e=2147483647&v=beta&t=E0CsEFRHAeLaqaCGRMGj7nSIeqmc4h6lDWZpXMa-Yko"
            alt="Logo"
            style={{ height: "90px", borderRadius:100 }}
          />
        </div>
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
              icon: <SlidersOutlined />,
              label: <NavLink to="/config">Config</NavLink>,
            },
            {
              key: "5",
              icon: <GlobalOutlined />,
              label: <NavLink to="/estado">Estado</NavLink>,
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
            style={{ maxWidth: "100%", maxHeight: "100%", paddingTop: 50 }}
          >
            {children}
          </section>
        </Content>
      </Layout>
    </Layout>
  );
};
