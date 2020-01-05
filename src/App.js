import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import TextareaRef from './components/Textarea';

export default () => {
	const seconds = 5;
	const [count, setCount] = useState(seconds);
	const [text, setText] = useState('');
	const [countText, setCountText] = useState(0);
	const [disabled, setDisabled] = useState(true);
	const [isTime, setIsTime] = useState(false);

	const textAreaRef = useRef();

	const handleChange = (e, text) => {
		const { value } = e.target;
		const wordsArr = text.trim().split(' ');

		setText(value);
		setCountText(wordsArr.filter(word => word !== '').length);
	};

	const startGame = () => {
		setCountText(0);
		setText('');
		setCount(seconds);
		setDisabled(false);
		setIsTime(true);
		textAreaRef.current.disabled = false;
		textAreaRef.current.focus();
	};

	useEffect(() => {
		if (isTime) {
			setTimeout(() => {
				setCount(prev => {
					if (prev === 0) {
						setCount(0);
						setDisabled(true);
					}
					return prev - 1;
				});
			}, 1000);
		}
	}, [count, disabled, isTime]);

	return (
		<div className='App'>
			<div className='container'>
				<section>
					<h1 className='title'>Speed typing game</h1>
					<TextareaRef
						onChange={e => handleChange(e, text)}
						value={text}
						className='u-full-width'
						disabled={disabled}
						ref={textAreaRef}
					/>
				</section>
				<hr />
				<div className='row untils'>
					<div className='two columns'>
						<button onClick={startGame}>Start</button>
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
