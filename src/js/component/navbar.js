import React from "react";
import SWNB from "../../img/SWNB.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src={SWNB}
          style={{ width: "200px" }}
          className="card-img-top"
          alt="..."
        />
        {/* <span className="navbar-brand mb-0 h1">React Boilerplate</span> */}
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">Favoritos !</button>
        </Link>
      </div>
    </nav>
  );
};
