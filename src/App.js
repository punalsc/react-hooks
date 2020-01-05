import React from 'react';
import './App.css';
import useLogic from './useLogic';
import TextareaRef from './components/Textarea';

export default () => {
	const {
		text,
		disabled,
		countText,
		textAreaRef,
		startGame,
		count,
		handleChange
	} = useLogic(5);

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
						<p>
							Time remaing: {count} {count > 1 ? 'seconds' : 'second'}
						</p>
					</div>
					<div className='five columns'>
						<p>Word count: {countText}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
