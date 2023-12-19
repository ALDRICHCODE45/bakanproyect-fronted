import { useCallback, useState } from "react";
import { ProyectLayout } from "../Layout/ProyectLayout";
import { useParams } from "react-router-dom";
import { Typography, Card, Descriptions } from "antd";
import { UploadImages } from "../components/UploadImages";
import { AsignDriver } from "../components/AsignDriver";
import { useProyect } from "../hooks/useProyect";

const { Title } = Typography;

export const ProductDetail = () => {
  const [imageList, setImageList] = useState([]);

  const { id } = useParams();

  const { products } = useProyect();

  const handleImageUpload = useCallback((info) => {
    if (info.file.status === "done") {
      setImageList([...imageList, info.file.response.url]);
    }
  }, []);
  const foundProduct = products.find((product) => product.id === parseInt(id));

  const items = foundProduct
    ? Object.entries(foundProduct).map(([key, value]) => ({
        key,
        label: key,
        children: value.toString(),
      }))
    : [];

  return (
    <ProyectLayout>
      <div>
        {/* Título del Producto */}
        {/* 
        <Card style={{}} className="animate__animated animate__fadeInUp">
          <Title level={4}>Título del Producto</Title>
          <p>Fecha de Creación: 01/01/2023</p>
        </Card>
            */}

        <Card style={{}} className="animate__animated animate__fadeInUp">
          <Descriptions
            layout="vertical"
            items={items}
            bordered
            column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
          />
        </Card>
        {/* Subir Imágenes */}
        <UploadImages />
        {/* Asignar Chofer */}
        <AsignDriver />
      </div>
    </ProyectLayout>
  );
};
