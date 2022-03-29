import React, {useState} from 'react';
import EmptyStar from './empty-star.svg';
import FilledStar from './filled-star.svg';

const RatingSystem = (props) => {
	console.log(props);
	const {index, rating, hover, saveRating, mouseEnter, mouseLeave} = props;

	return (
		<div className="RatingSystem">
			<button
				type="button"
				className={index <= (hover || rating) ? 'on' : 'off'}
				onClick={() => saveRating(index)}
				onMouseEnter={() => mouseEnter(index)}
				onMouseLeave={() => mouseLeave(rating)}
				onDoubleClick={() => saveRating(index - 1)}
			>
				&#9733;
			</button>
		</div>
	);
};

export default RatingSystem;
