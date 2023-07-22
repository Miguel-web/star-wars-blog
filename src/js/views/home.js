import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = (props) => {

const { store, actions } = useContext(Context);
useEffect(() => {
	actions.getPeople()
},[])

	return (
	<div className="text-center mt-5">
		{
			store.people.map((people, index) => (
				<Card
				data={people}
				key={index}
				/>
			))
		}
	</div>
	);
}
