import { useState } from "react";
import { useProyect } from "./useProyect";

export const useSearch = () => {
  const { fetchProducts } = useProyect();

  const [searchTerm, setSearchTerm] = useState("");
  const [oldSearTerm, setOldSearchTerm] = useState("");
  const [selectedDriver, setSelectedDriver] = useState(null);

  const [tableAnimationClass, setTableAnimationClass] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") setSelectedDriver(null);
  };

  const handleSearch = async () => {
    try {
      // si la busqueda es igual a la antigua, no hace nada, mejora rendimiento
      if (searchTerm.trim() === oldSearTerm.trim() && selectedDriver) return;
      // Realiza la búsqueda de productos
      const driverdata = await fetchProducts(searchTerm);
      console.log("busqueda");
      // Elimina la clase de animación antes de actualizar los datos
      setTableAnimationClass("");

      // Actualiza el estado con los datos obtenidos
      setSelectedDriver(driverdata);

      // Agrega la clase de animación después de actualizar los datos
      setTableAnimationClass("animate__animated animate__fadeInUp");

      setOldSearchTerm(searchTerm);
    } catch (error) {
      // Manejo de errores si es necesario
      console.error("Error al buscar productos:", error);
    }
    console.log(searchTerm);
  };

  return {
    //methods:
    handleSearch,
    handleSearchInputChange,
    //values:
    searchTerm,
    selectedDriver,
    tableAnimationClass,
  };
};
