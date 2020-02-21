import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div
			className="mb-3 mx-2 border border-warning bg-light text-dark rounded"
			style={{ width: "500px" }}>
			<div className="card-body">
				<h5 className="card-title">
					Species Name: <strong>{props.name}</strong>
				</h5>
				<p className="card-text">
					<strong>Classification: </strong>
					{props.classification}
				</p>
				<p className="card-text">
					<strong>Designation: </strong>
					{props.designation}
				</p>
				<p className="card-text">
					<strong>Average Height: </strong>
					{props.avg_height}
				</p>
				<p className="card-text">
					<strong>Skin Colors: </strong>
					{props.skin_colors}
				</p>
				<p className="card-text">
					<strong>Hair Colors: </strong>
					{props.hair_colors}
				</p>
				<p className="card-text">
					<strong>Eye Colors: </strong>
					{props.eye_colors}
				</p>
				<p className="card-text">
					<strong>Average Lifespan: </strong>
					{props.avg_lifespan}
				</p>
				<p className="card-text">
					<strong>Homeworld: </strong>
					{props.homeworld}
				</p>
				<p className="card-text">
					<strong>Language: </strong>
					{props.language}
				</p>
				<p className="card-text">
					<strong>People: </strong>
					{props.people}
				</p>
				<p className="card-text">
					<strong>Films: </strong>
					{props.films.map((item, index) => {
						return <div key={index}>{item}</div>;
					})}
				</p>
				<p className="card-text">
					<strong>Created: </strong>
					{props.created}
				</p>
				<p className="card-text">
					<strong>Edited: </strong>
					{props.edited}
				</p>
				<p className="card-text">
					<strong>URL: </strong>
					{props.url}
				</p>

				<a href="#" className="btn btn-warning">
					Learn More!
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	classification: PropTypes.string,
	designation: PropTypes.string,
	avg_height: PropTypes.string,
	skin_colors: PropTypes.string,
	hair_colors: PropTypes.string,
	eye_colors: PropTypes.string,
	avg_lifespan: PropTypes.string,
	homeworld: PropTypes.string,
	language: PropTypes.string,
	people: PropTypes.array,
	films: PropTypes.array,
	created: PropTypes.string,
	edited: PropTypes.string,
	url: PropTypes.string
};
