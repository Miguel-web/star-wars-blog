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
        <div className="row aligne-items-center justify-content-center vh-100 ">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={type == "planets" && data.uid == 1
                            ? tatooine
                            : `https://starwars-visualguide.com/assets/img/${type == "people"
                                ? "characters"
                                : type}/${data.uid}.jpg`} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.singleItem.properties && store.singleItem.properties.name}</h5>
                            <p className="card-text">{store.singleItem.description}</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}