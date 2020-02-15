import React, { useState, useEffect } from "react";
import { Card } from "./card";

//create your first component
export function Home() {
	const [species, setSpecies] = useState([]);

	function splitArr(arr, howMany) {
		let newArr = [];
		let temp = [];
		let count = 0;

		for (let x of arr) {
			if (count === howMany) {
				newArr.push(temp);
				temp = [];
				count = 0;
			}
			temp.push(x);
			count++;
		}
		if (temp.length > 0) newArr.push(temp);
		return newArr;
	}

	useEffect(() => {
		fetch("https://swapi.co/api/species/")
			.then(resp => resp.json())
			.then(data => {
				let newData = splitArr(data.results, 4);
				setSpecies(newData);
			});
	}, []);

	return (
		<>
			{species.map((arr, i) => {
				return (
					<div key={i} className="d-flex justify-content-around">
						{arr.map((item, index) => {
							return <div key={index}>{item.name}</div>;
						})}
					</div>
				);
			})}
		</>
	);
}
