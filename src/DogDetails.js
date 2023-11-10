import React from 'react'
import { useParams, Navigate } from 'react-router-dom';
import uuid from 'react-uuid';
import './DogDetails.css';

function DogDetails({ dogs }) {
	const { name } = useParams();
	const dog = dogs.find((value, index, arr) => {
		return value.name.toUpperCase() === name.toUpperCase();
	});

	console.log(dog);
	console.log(dog === undefined);

	if (dog === undefined) return <Navigate replace to="/dogs" />;

	return (
		<div className="DogDetails">
			<h1 className="DogDetails-name">{dog.name}</h1>
			<h3 className="DogDetails-age">Age: {dog.age}</h3>
			<h3>Fun Facts:</h3>
			<ul className="DogDetails-facts-list">
				{dog.facts.map((f) => (
					<li className="DogDetails-fact" key={uuid()}>
						{f}
					</li>
				))}
			</ul>
			<img src={dog.src} className="DogDetails-img" />
		</div>
	);
}

export default DogDetails