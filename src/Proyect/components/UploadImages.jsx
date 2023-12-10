import { Card, Upload, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ROLES } from "../../auth/roles";
import { useAuthStore } from "../../hooks/useAuthStore";
import { useState } from "react";
import { EmptyData } from "./EmptyData";
const { Title } = Typography;

export const UploadImages = () => {
  const [imageList, setImageList] = useState([]);
  const { user } = useAuthStore();
  const { rol } = user;

  const puedeSubirImagenes = rol === ROLES.ADMIN || rol === ROLES.CHOFERES;

  return (
    <Card className="animate__animated animate__fadeInUp" style={{ marginTop: "20px" }}>
      <Title level={4}>Subir Imágenes</Title>
      {puedeSubirImagenes ? (
        <Upload
          //action="/api/upload"
          listType="picture-card"
          showUploadList={false}
          //onChange={handleImageUpload}
        >
          {imageList.length < 5 && (
            <div>
              <UploadOutlined />
              <div style={{ marginTop: 8 }}>Subir</div>
            </div>
          )}
        </Upload>
      ) : (
        <EmptyData text={"subir imagenes"} />
      )}
      {imageList?.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Imagen ${index + 1}`}
          style={{ maxWidth: "100%", marginTop: "10px" }}
        />
      ))}
    </Card>
  );
};
