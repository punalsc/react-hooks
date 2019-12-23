import React from 'react';
import ToggleWrapper from './hoc';

const Menu = props => {
	const { isOpen, toggleFunc } = props;
	return (
		<div className='Menu'>
			<button onClick={toggleFunc}>
				{isOpen ? 'Show Items' : 'Hide Items'}
			</button>
			<div style={{ display: isOpen ? 'block' : 'none' }}>
				<h1>Hello CodeSandbox</h1>
				<h2>Start editing to see some magic happen!</h2>
			</div>
		</div>
	);
};

const ToggleMenu = ToggleWrapper(Menu);
export default ToggleMenu;
