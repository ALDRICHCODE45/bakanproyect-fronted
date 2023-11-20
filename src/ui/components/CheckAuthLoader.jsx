import { LoadingOutlined } from "@ant-design/icons";

export const CheckAuthLoader = () => {
  return (
    <div
      style={{
        backgroundColor:'#001529',
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoadingOutlined style={{ fontSize: 100, color:'#fb771a' }} />
    </div>
  );
};
