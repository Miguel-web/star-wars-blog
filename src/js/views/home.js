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
    <div className="Container ms-4 me-4">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {store.people.map((people, index) => (
          <CardPeople data={people} key={index} />
        ))}
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {store.planets.map((planets, index) => (
          <CardPlanets data={planets} key={index} />
        ))}
      </div>
    </div>
  );
};
