import { ProyectLayout } from "../Layout/ProyectLayout";
import { Flex, Input } from "antd";
import { PedidoCard } from "../components/PedidoCard";
import { useProyect } from "../hooks/useProyect";
import {
  CheckCircleFilled,
  WarningFilled,
  ClockCircleFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { useCallback } from "react";

const { Search } = Input;

export const EstadoPage = () => {
  const { products } = useProyect();

  const handleSearch = useCallback((value) => {
    // Lógica para manejar la búsqueda
    console.log("Realizando búsqueda:", value);
    console.log(products)
  }, []);

  const IconosEstado = {
    Entregado: (
      <CheckCircleFilled
        alt="icono"
        style={{ fontSize: "20px", paddingTop: 10, color: "#98c379" }}
      />
    ),
    "Con problemas": (
      <WarningFilled
        alt="icono"
        style={{ fontSize: "20px", paddingTop: 10, color: "#b44a42" }}
      />
    ),
    "En camino": (
      <ClockCircleFilled
        alt="icono"
        style={{ fontSize: "20px", paddingTop: 10, color: "#55b6c2" }}
      />
    ),
    Pendiente: (
      <QuestionCircleFilled
        alt="icono"
        style={{ fontSize: "20px", paddingTop: 10, color: "#e5c07a" }}
      />
    ),
  };

  return (
    <ProyectLayout>
      <Flex
        wrap="wrap"
        style={{ paddingBottom: 40 }}
        justify="center"
        gap="large"
      >
        <Flex justify="center" style={{ marginBottom: "20px", width: "100%" }}>
          <Search
            placeholder="Buscar..."
            enterButton="Buscar"
            size="large"
            onSearch={handleSearch}
          />
        </Flex>
        {products?.map((product) => (
          <PedidoCard
            key={product.id}
            {...product}
            avatar={IconosEstado[product.estado]}
          />
        ))}
      </Flex>
    </ProyectLayout>
  );
};
