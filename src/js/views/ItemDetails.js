import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  const { type, index } = useParams(); // Obtén los parámetros de la URL (tipo y índice)
  const [itemDetails, setItemDetails] = useState(null); // Estado para almacenar los detalles del elemento

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/${type}/${index}`);
        const data = await response.json();
        setItemDetails(data.result.properties);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItemDetails();
  }, [type, index]);

  if (!itemDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1><strong>Caracteristicas de {itemDetails.name} </strong></h1>
      <p>Height: {itemDetails.height}</p>
      <p>Mass: {itemDetails.mass}</p>
      <p>Hair Color: {itemDetails.hair_color}</p>
    </div>
  );
};

export default ItemDetails;
