import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container ps-4 pe-4 bg-dark">
      <h1 className="text-danger">Characters</h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        {store.people.map((people, index) => (
          <Card data={people} type="people" key={index} />
        ))}
      </div>
      <br />
      <h1 className="text-danger">Planets</h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto">
        {store.planets.map((planets, index) => (
          <Card data={planets} type="planets" key={index} />
        ))}
      </div>
    </div>
  );
};
