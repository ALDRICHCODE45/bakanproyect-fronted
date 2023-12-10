import { useCallback } from "react";
import { useSelector } from "react-redux";

export const useProyect = () => {
  const { products } = useSelector((state) => state.proyect);

  const removeSpecialCharacters = useCallback((str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/gi, "");
  }, []);

  const cleanString = useCallback(
    (str) => removeSpecialCharacters(str.trim().toUpperCase()),
    []
  );

  const fetchProducts = async (userName) => {
    return await products.filter(
      (product) => cleanString(product.chofer) === cleanString(userName)
    );
  };

  return {
    products,
    //methods
    fetchProducts,
    cleanString,
  };
};
