import React from 'react';
import './App.css';

import Textarea from './components/Textarea';

export default () => {
	return (
		<div className='App'>
			<div className='container'>
				<section>
					<h1 class='title'>Speed typing game</h1>
					<Textarea className='u-full-width' />
				</section>
				<hr />
				<div className='row untils'>
					<div class='two columns'>
						<button>Start</button>
					</div>
					<div class='five columns'>
						<p>Time remaing: 5 seconds</p>
					</div>
					<div class='five columns'>
						<p>Word count: 5 seconds</p>
					</div>
				</div>
			</div>
		</div>
	);
};
