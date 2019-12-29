import React from 'react';

const Form = ({ id, method, action, children, onSubmit }) => (
	<form id={id} name={id} method={method} action={action} onSubmit={onSubmit}>
		{children}
	</form>
);

export default Form;
