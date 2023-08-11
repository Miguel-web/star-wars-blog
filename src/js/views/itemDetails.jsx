import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import tatooine from "../../img/tatooine.jpg";


export const ItemDetails = (data, type) => {
    const params = useParams()
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getItemDetails(params.type, params.id)
    }, [])
    return (
        <div className="row aligne-items-center justify-content-center vh-100 bg-dark">
            <div className="card mb-3 bg-dark" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/${params.type == "people" ? "characters" : params.type}/${params.id}.jpg`} alt="..." />
                    </div>
                    <div className="col-md-8 bg-dark">
                        <div className="card-body bg-dark text-light">
                            <h5 className="card-title">{store.singleItem.properties && store.singleItem.properties.name}</h5>
                            <p className="card-text">{store.singleItem.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}