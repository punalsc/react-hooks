import React, { useState, useEffect } from 'react';
import './App.css';

import TextareaRef from './components/Textarea';

export default () => {
	const [count, setCount] = useState(5);
	const [text, setText] = useState('');
	const [countText, setCountText] = useState(0);

	//const textRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			setCount(prev => {
				if (prev === 0) {
					setCount(prev);
				}
				return prev - 1;
			});
		}, 1000);
	});

	const handleChange = (e, text) => {
		const { value } = e.target;
		const wordsArr = text.trim().split(' ');

		setText(value);
		setCountText(wordsArr.filter(word => word !== '').length);
	};

	// const countWords = text => {};

	return (
		<div className='App'>
			<div className='container'>
				<section>
					<h1 className='title'>Speed typing game</h1>
					<TextareaRef
						onChange={e => handleChange(e, text)}
						value={text}
						className='u-full-width'
					/>
				</section>
				<hr />
				<div className='row untils'>
					<div className='two columns'>
						<button>Start</button>
					</div>
					<div className='five columns'>
						<p>Time remaing: {count} seconds</p>
					</div>
					<div className='five columns'>
						<p>Word count: {countText}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
