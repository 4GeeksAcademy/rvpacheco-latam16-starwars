import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Cards = ({ data, currentIndex, type }) => {
  const { store, actions } = useContext(Context);

  function checkFavorites(index, uid) {
    return store.favorites.some(person => person.id === `${type}/${index}/${uid}`);
  }

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {data &&
        data
          .slice(currentIndex * 3, (currentIndex + 1) * 3)
          .map((item, index) => (
            <div className="card m-4" style={{ width: "18rem" }} key={index}>
              <Link to={`/details/${type}/${item.uid}`} className="card-link">
                <img src={item.img} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <button
                  href="#"
                  className="btn btn-outline-warning"
                  onClick={() => actions.markFavorite(`${type}/${index}/${item.uid}`, item.name)}
                >
                  <i className={`bi bi-heart${checkFavorites(index, item.uid) ? "-fill" : ""}`}></i>
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Cards;
