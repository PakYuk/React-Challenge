import './App.css';
import React, {useState} from 'react';
import RatingSystem from './RatingSystem';

function App() {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	return (
		<div className="App">
			<h1>5 Star Rating System</h1>
			<h2>Select a rating: </h2>
			<div className="container">
				{[1, 2, 3, 4, 5].map((index) => {
					return (
						<RatingSystem
							index={index}
							rating={rating}
							hover={hover}
							saveRating={() => setRating(index)}
							mouseEnter={() => setHover(index)}
							mouseLeave={() => setHover(rating)}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
