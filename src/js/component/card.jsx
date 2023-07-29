import React from "react";
import { useNavigate } from "react-router";

export const CardPeople = ({ data }) => {

  const navigate = useNavigate()

  return (
    <div className="col">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className={`btn btn-dark text-light`} onClick={() => {
            navigate("/people/" + data.uid)
          }}>GO!</button>
        </div>
      </div>
    </div>
  );
};
export const CardPlanets = ({ data }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className={`btn btn-dark text-light`} onClick={() => {
            navigate("/planet/" + data.uid)
          }}>GO!</button>
        </div>
      </div>
    </div>
  );
};