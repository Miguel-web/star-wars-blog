import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { context } from "../store/appContext";
import { Card } from "../component/card.jsx";

export const Home = (props) => {

const { store, actions } = useContext(context);

useEffect(() => {
	getPeople()
},[])


// function async getPeople () {
// 	try {
// 		const response = await fetch("https://www.swapi.tech/api/people/")
// 		const body = await response.json()
// 		console.log(body)
// 	} catch (error) {
// 		console.log(error);

// 	}
// }

	return (
	<div className="text-center mt-5">
		
		<Card/>
		
	</div>
	);
}
