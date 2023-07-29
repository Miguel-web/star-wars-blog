import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


export const People = () => {
    const params = useParams()
    const { store, actions } = useContext(Context)
    useEffect(() => {
        actions.getOnePeople(params.peopleId)
    }, [])
    return (
        <div className={`vh-100 bg-dark text-light `}>

        </div>
    )
}