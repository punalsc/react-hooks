import React from 'react';
import './App.css';
import Form from './components/form';
import Header from './components/header';
import Notification from './components/notification';

import { Provider, Consumer } from './useContext';

const App = () => (
	<Provider>
		<Consumer>
			{value => {
				const { username, handleSubmit, clearForm } = value;
				return (
					<>
						<Header username={username} />
						<div className='container text-center'>
							<div className='starter-template text-center'>
								<Notification username={username} />
								<Form onSubmit={handleSubmit}>
									<div className='form-group'>
										<input type='text' className='form-control' />
									</div>

									<button
										onClick={clearForm}
										type='submit'
										className='btn btn-primary'
									>
										Change User
									</button>
								</Form>
							</div>
						</div>
					</>
				);
			}}
		</Consumer>
	</Provider>
);

export default App;
