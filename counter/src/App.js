import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function Counter() {
	const [count, setCount] = useState(0);

	function increment(count) {
		setCount(count + 1);
	}

	return (
		<div id="countainer">
			<div id="navbar">Counter.js</div>
			<div id="counter">
				<h1>{count}</h1>
				<button onClick={() => increment(count)}>Increment</button>
			</div>
		</div>
	);
}

export default Counter;
