import React from "react";
import "../../styles/home.css";
import { useParams } from "react-router";

export const Planetdet = () => {
    const {planetId}=useParams()

    return (
        <div className="text-center mt-5">
            <h1>Planet Detail</h1>
            <h2>Id: {planetId}</h2>
        </div>
    );
}
