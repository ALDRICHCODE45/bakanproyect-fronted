import { useSelector } from "react-redux";

export const useProyect = () => {
  const { products } = useSelector((state) => state.proyect);

  return {
    products,
  };
};
