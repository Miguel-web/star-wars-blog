import React, { useEffect } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx";

export const Home = () => {

function async getPeople () {
	try {
		const response = await fetch("https://www.swapi.tech/api/people/")
		const body = await response.json()
		console.log(body)
	} catch (error) {
		console.log(error);

	}
}
useEffect(() => {
	getPeople()
},[])

	return (
	<div className="text-center mt-5">
		
		<Card/>
		
	</div>
	);
}
