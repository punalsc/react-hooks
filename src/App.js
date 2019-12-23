import React from 'react';

import ToggleMenu from './menu';
import ToggleLogo from './logo';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<ToggleLogo />
			</header>
			<ToggleMenu />
		</div>
	);
}

export default App;
