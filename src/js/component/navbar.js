import React from "react";
import SWNB from "../../img/SWNB.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
        <Link to="/demo">
          <button className="btn btn-primary">Favoritos !</button>
        </Link>
      </div>
    </nav>
  );
};
