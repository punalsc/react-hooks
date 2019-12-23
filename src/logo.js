import React from 'react';
import ToggleWrapper from './hoc';
import logo from './logo.svg';

const Logo = props => {
	const { isOpen, toggleFunc } = props;
	return (
		<>
			<button onClick={toggleFunc}>Toggle Logo</button>
			<div style={{ display: isOpen ? 'block' : 'none' }}>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</div>
		</>
	);
};

const ToggleLogo = ToggleWrapper(Logo);
export default ToggleLogo;
