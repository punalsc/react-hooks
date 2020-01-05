import React from 'react';

export default ({ disabled, className, placeholder = 'Start typing...' }) => {
	return (
		<textarea
			className={className}
			placeholder={placeholder}
			id='exampleMessage'
			spellcheck='false'
			disabled={disabled}
		></textarea>
	);
};
