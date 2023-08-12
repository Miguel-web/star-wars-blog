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
        <div className="row aligne-items-center justify-content-center vh-50 bg-dark">
            <div className="card mb-3 bg-dark" style={{ maxWidth: "37rem" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="img-fluid rounded-start" src={params.type == "planets" && params.id == 1
                            ? tatooine
                            : `https://starwars-visualguide.com/assets/img/${params.type == "people"
                                ? "characters"
                                : params.type}/${params.id}.jpg`} alt="..." />
                    </div>
                    <div className="col-md-8 bg-dark">
                        <div className="card-body bg-dark text-light">
                            <h6>NAME</h6>
                            <h5 className="card-title text-muted">{store.singleItem.properties && store.singleItem.properties.name}</h5>
                            <h6>GENDER</h6>
                            <h5 className="card-text text-muted">{store.singleItem.properties && store.singleItem.properties.gender}</h5>
                            <h6>Birth Year</h6>
                            <h5 className="card-text text-muted">{store.singleItem.properties && store.singleItem.properties.birth_year}</h5>
                            <h6>Eye Color</h6>
                            <h5 className="card-text text-muted">{store.singleItem.properties && store.singleItem.properties.eye_color}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}