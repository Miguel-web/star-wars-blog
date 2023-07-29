import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/card.jsx";
import { CardPlanets } from "../component/card.jsx";

export const Home = (props) => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getPeople();
    actions.getPlanets();
  }, []);

  return (
    <div className="Container ps-4 pe-4 bg-dark">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {store.people.map((people, index) => (
          <CardPeople data={people} key={index} />
        ))}
      </div>
      <br />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {store.planets.map((planets, index) => (
          <CardPlanets data={planets} key={index} />
        ))}
      </div>
    </div>
  );
};
