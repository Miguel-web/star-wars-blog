import React, { useContext } from "react";
import SWNB from "../../img/SWNB.png";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-dark mb-3 ps-4 pe-4">
      <Link to="/">
        <img
          src={SWNB}
          style={{ width: "200px" }}
          className="card-img-top"
          alt="..."
        />
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites{" "}
            <span className="badge bg-secondary">{store.favorites.length}</span>
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            {store.favorites.map((favorite) => {
              return (
                <li
                  className="d-flex align-item-center"
                  key={favorite.favoriteName}
                >
                  <Link className="dropdown-item" to={favorite.favoriteUrl}>
                    {favorite.favoriteName}
                  </Link>
                  <i
                    className="far fa-trash-alt"
                    onClick={() => {
                      actions.removeFavorite(favorite.favoriteName);
                    }}
                  ></i>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
