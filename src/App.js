import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import './App.css';

function App(dogs) {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />

				<Routes>
					<Route exact path="/dogs" element={<DogList dogs={dogs.dogs} />}></Route>

					<Route path="/dogs/:name" element={<DogDetails dogs={dogs.dogs} />}></Route>

					<Route path="*" element={<Navigate replace to="/dogs" />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'https://images.freeimages.com/images/large-previews/872/dog-1565640.jpg',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: 'https://images.freeimages.com/images/large-previews/c1c/dog-1361477.jpg',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: 'https://images.freeimages.com/images/large-previews/460/hot-dog-1314799.jpg',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'https://images.freeimages.com/images/large-previews/d05/labrador-dog-1-1533410.jpg',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
