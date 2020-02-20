import React, { useState, useEffect } from "react";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";

//create your first component
export function Home() {
	const [species, setSpecies] = useState([]);

	useEffect(() => {
		fetch("https://swapi.co/api/species/")
			.then(resp => resp.json())
			.then(data => {
				console.log(data);
				setSpecies(data.results);
			});
	}, []);

	return (
		<>
			<Jumbotron />
			<div className="card-group justify-content-around">
				{species.map((item, index) => {
					return (
						<Card
							key={index}
							name={item.name}
							classification={item.classification}
							designation={item.designation}
							avg_height={item.average_height}
							skin_colors={item.skin_colors}
							hair_colors={item.hair_colors}
							eye_colors={item.eye_colors}
							avg_lifespan={item.average_lifespan}
							homeworld={item.homeworld}
							language={item.language}
							people={item.people}
							films={item.films}
							created={item.created}
							edited={item.edited}
							url={item.url}
						/>
					);
				})}
			</div>
		</>
	);
}

//return (
// <>
// 	{species.map((arr, i) => {
// 		return (
// 			<div key={i} className="d-flex justify-content-around">
// 				{arr.map((item, index) => {
// 					return <div key={index}>{item.name}
//                     <ul>
//                         <li></li>
//                         <li></li>
//                         <li></li>
//                         <li></li>
//                         <li></li>
//                         <li></li>
//                         <li></li>
//                         <li></li>
//                     </ul></div>;
// 				})}
// 			</div>
// 		);
// // 	})}
// key={index}
// 									style={{ width: "300px" }}
// 									className="border border-danger p-3 m-2"

// </>

// <ul>
// 	<li>{item.classification}</li>
// 	<li>{item.designation}</li>
// 	<li>{item.average_height}</li>
// 	<li>{item.skin_colors}</li>
// 	<li>{item.hair_colors}</li>
// 	<li>{item.eye_colors}</li>
// 	<li>{item.average_lifespan}</li>
// 	<li>{item.homeworld}</li>
// 	<li>{item.language}</li>
// 	<li>{item.people}</li>
// 	<li>{item.films}</li>
// 	<li>{item.created}</li>
// 	<li>{item.edited}</li>
// 	<li>{item.url}</li>
// </ul>
