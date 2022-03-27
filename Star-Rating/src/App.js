import './App.css';
import Star from './assets/star.svg';
import React, {useState} from 'react';

const RatingSystem = () => {
	const star = [1, 2, 3, 4, 5];
	const [rating, setRating] = useState(0);

	return (
		<div className="App">
			<h1>5 Star Rating System</h1>
			<h2>Select a rating: </h2>
			{[...star].map((star, index) => {
				index += 1;
				return (
					<button
						type="button"
						key={index}
						className={index <= rating ? 'on' : 'off'}
						onClick={() => setRating(index)}
					>
						&#9733;
					</button>
				);
			})}
		</div>
	);
};

export default RatingSystem;
