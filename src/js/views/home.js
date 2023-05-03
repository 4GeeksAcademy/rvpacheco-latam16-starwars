import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import Cards from "../component/Cards";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [currentIndex, setCurrentIndex] = useState({
    people: 0,
    vehicles: 0,
    planets: 0
  });

  useEffect(() => {
    actions.fetchStarWars("people");
    actions.fetchStarWars("vehicles");
    actions.fetchStarWars("planets");
  }, []);

  const handleNext = category => {
    const lastIndex = Math.ceil(store[category].length / 4) - 1;
    if (currentIndex[category] < lastIndex) {
      setCurrentIndex(prevState => ({
        ...prevState,
        [category]: prevState[category] + 1
      }));
    }
  };

  const handlePrev = category => {
    if (currentIndex[category] > 0) {
      setCurrentIndex(prevState => ({
        ...prevState,
        [category]: prevState[category] - 1
      }));
    }
  };

  const categories = [
    { key: "people", title: "Characters" },
    { key: "vehicles", title: "Vehicles" },
    { key: "planets", title: "Planets" }
  ];

  return (
    <div className="container">
      {categories.map(category => (
        <React.Fragment key={category.key}>
          <h2>{category.title}</h2>
          <Cards
            data={store[category.key]}
            currentIndex={currentIndex[category.key]}
            type={category.key}
          />

          <div className="mt-3 text-center">
            <button
              className="btn btn-primary mr-2"
              onClick={() => handlePrev(category.key)}
              disabled={currentIndex[category.key] === 0}
            >
              Prev
            </button>
            <button
              className="btn btn-primary"
              onClick={() => handleNext(category.key)}
              disabled={
                !store[category.key] ||
                currentIndex[category.key] === Math.ceil(store[category.key].length / 4) - 1
              }
            >
              Next
            </button>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Home;
