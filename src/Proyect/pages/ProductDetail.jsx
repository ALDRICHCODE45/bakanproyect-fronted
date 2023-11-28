import { useState } from "react";
import { ProyectLayout } from "../Layout/ProyectLayout";
import { useParams } from "react-router-dom";
import { Typography, Card } from "antd";
import { UploadImages } from "../components/UploadImages";
import {AsignDriver} from "../components/AsignDriver";

const { Title } = Typography;

export const ProductDetail = () => {
  const [imageList, setImageList] = useState([]);

  const { id } = useParams();

  console.log(id);

  const handleImageUpload = (info) => {
    if (info.file.status === "done") {
      setImageList([...imageList, info.file.response.url]);
    }
  };

  return (
    <ProyectLayout>
      <div>
        <Title
          level={2}
          style={{
            textAlign: "center",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          Detalles del Producto
        </Title>

        {/* Título del Producto */}
        <Card>
          <Title level={4}>Título del Producto</Title>
          <p>Fecha de Creación: 01/01/2023</p>
          {/* Otros detalles del producto */}
        </Card>

        {/* Subir Imágenes */}
        <UploadImages />
        {/* Asignar Chofer */}
        <AsignDriver/>
      </div>
    </ProyectLayout>
  );
};
