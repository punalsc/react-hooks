import React from 'react';

const Header = props => {
	const { username } = props;
	return (
		<header className='d-flex flex-column flex-md-row align-items-md-center p-5 bg-light'>
			<div className='pt-md-3 pb-md-4'>
				<h1 className='bd-title mt-0'>Welcome {username}</h1>
			</div>
		</header>
	);
};

export default Header;
