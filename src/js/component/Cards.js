import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Cards = ({ data, currentIndex }) => {
  const { store, actions } = useContext(Context);

  function checkFavorites(index, uid) {
    return store.favorites.some(person => person.id === `${index}/${uid}`);
  }

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {data &&
        data
          .slice(currentIndex * 4, (currentIndex + 1) * 4)
          .map((person, index) => (
            <div className="card m-4" style={{ width: "18rem" }} key={index}>
              <img
                src="https://starwars-visualguide.com/assets/img/planets/2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <button
                  href="#"
                  className="btn btn-outline-warning"
                  onClick={() => actions.markFavorite(`${index}/${person.uid}`, person.name)}
                >
                  <i className={`bi bi-heart${checkFavorites(index, person.uid) ? "-fill" : ""}`}></i>
                </button>
                
              </div>
            </div>
          ))}
    </div>
  );
};

export default Cards;
