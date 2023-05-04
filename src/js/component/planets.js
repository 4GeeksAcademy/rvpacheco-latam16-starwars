import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Cards from "../component/Cards";

export const Planets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchStarWars("planets");
  }, []);

  const planets = store.planets || [];

  return (
    <div className="text-center mt-5">
      <h1>hola planets</h1>
      <Cards data={planets} currentIndex={0} type="planets" />
    </div>
  );
};
