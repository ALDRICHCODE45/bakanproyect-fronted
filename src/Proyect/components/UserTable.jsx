import { Table, Space, notification, Modal, Button } from "antd";
import {
  UserOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const { confirm } = Modal;

export const UserTable = ({ data, setData }) => {
  const handleDeleteUser = (record) => {
    confirm({
      title: `¿Seguro que quieres eliminar a ${record.name}?`,
      icon: <ExclamationCircleOutlined />,
      okText: "Sí",
      okType: "danger",
      cancelText: "No",
      onOk() {
        const newData = data.filter((item) => item.key !== record.key);
        setData(newData);
        notification.success({
          message: `Usuario ${record.name} eliminado con éxito`,
        });
      },
    });
  };
  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span>
          <UserOutlined /> {text}
        </span>
      ),
    },
    {
      title: "Rol",
      dataIndex: "rol",
      key: "role",
    },
    {
      title: "eliminar",
      key: "eliminar",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteUser(record)}
          >
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];
  const paginationConfig = {
    pageSize: 4, // Número de elementos por página
  };

  return (
    <>
      <Table
        style={{ paddingTop: 30 }}
        dataSource={data}
        columns={columns}
        pagination={paginationConfig}
        bordered
      />
    </>
  );
};
