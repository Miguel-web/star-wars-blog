import React from "react";

export const Card = ({ data }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className={`btn btn-dark text-light`} onClick={() => {
          }}>GO!</button>
        </div>
      </div>
    </div>
  );
};