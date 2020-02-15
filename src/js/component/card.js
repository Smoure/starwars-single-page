import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card mb-3 mx-2" style={{ width: "300px" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">{props.name}</p>

				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

Card.PropTypes = {
	name: PropTypes.node
};
