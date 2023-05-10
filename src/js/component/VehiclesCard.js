import React from "react";
import { useParams } from "react-router-dom";

const VehicleCard = ({ vehicle }) => {
  const { type, index } = useParams();
  const imageUrl = `https://starwars-visualguide.com/assets/img/${type}/${index}.jpg`;

  return (
    <div className="card mx-auto mt-4 " style={{ width: "18rem", border: "1px solid #000", borderRadius: "10px", backgroundColor: "#FFF", textAlign: "center" }}>
      <div className="card-header" style={{ backgroundColor: "#000", color: "#FFF", padding: "5px", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
        <span>{vehicle.uid}</span>
      </div>
      <img src={imageUrl} alt={vehicle.name} style={{ width: "100%", height: "auto", marginTop: "10px" }} />
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: "1.2rem", fontWeight: "bold", margin: "5px 0" }}>{vehicle.name}</h5>
        <p className="card-text" style={{ margin: "5px 0" }}>Manufacturer: {vehicle.manufacturer}</p>
        <p className="card-text" style={{ margin: "5px 0" }}>Cost: {vehicle.cost_in_credits}</p>
        <p className="card-text" style={{ margin: "5px 0" }}>Passengers: {vehicle.passengers}</p>
     
      </div>
    </div>
  );
};

export default VehicleCard;
