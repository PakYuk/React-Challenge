import './App.css';
import React, {useState} from 'react';

const RatingSystem = () => {
	const [rating, setRating] = useState(0);

	return (
		<div className="App">
			<h1>5 Star Rating System</h1>
			<h2>Select a rating: </h2>
			{[...Array(5)].map((star, index) => {
				index += 1;
				return (
					<button
						type="submit"
						name="rating"
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
