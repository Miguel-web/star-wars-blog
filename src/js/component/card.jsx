import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import tatooine from "../../img/tatooine.jpg";

export const Card = ({ data, type }) => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()
  return (
    <div>
      <div className="card h-100 bg-dark" style={{ minWidth: "300px" }}>
        <img src={type == "planets" && data.uid == 1
          ? tatooine
          : `https://starwars-visualguide.com/assets/img/${type == "people"
            ? "characters"
            : type}/${data.uid}.jpg`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-light">{data.name}</h5>
          <button className={`btn btn-primary text-light`} onClick={() => {
            navigate(`/${type}/${data.uid}`)
          }}>GO!</button>
          <button className={`btn btn-primary text-light ms-3`} onClick={() => {
            store.favorites.find((favorite) => favorite.favoriteName === data.name)
              ? actions.removeFavorite(data.name)
              : actions.addFavorite(data.name, `/people/${data.uid}`)
          }}><i className={store.favorites.find((favorite) => favorite.favoriteName === data.name)
            ? "fas fa-heart"
            : "far fa-heart"
          }></i></button>
        </div>
      </div>
    </div>
  );
};
