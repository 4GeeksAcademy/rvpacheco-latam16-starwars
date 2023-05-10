import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../component/CharacterCard";
import VehicleCard from "../component/VehiclesCard";
import PlanetsCard from "../component/PlanetsCard";
import SpeciesCard from "../component/SpeciesCard";
import StarshipCard from "../component/StarshipCard";

const ItemDetails = () => {
  const { type, index } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const baseUrl = `https://www.swapi.tech/api/${type}/${index}`;
        let response = await fetch(baseUrl);
        if (!response.ok) return response.status;

        let data = await response.json();
        let item = data.result.properties;
        item.image = `https://starwars-visualguide.com/assets/img/${type}/${index}.jpg`;

        setItemDetails(item);
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
      {type === "people" && <CharacterCard people={itemDetails} />}
      {type === "vehicles" && <VehicleCard vehicle={itemDetails} />}
      {type === "planets" && <PlanetsCard planets={itemDetails} />}
      {type === "species" && <SpeciesCard species={itemDetails} />}
      {type === "starships" && <StarshipCard starships={itemDetails} />}
    </div>
  );
};

export default ItemDetails;
