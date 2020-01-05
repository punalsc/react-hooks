import React from 'react';

const Textarea = (props, ref) => {
	const { className, placeholder, onChange, disabled, value } = props;
	return (
		<textarea
			ref={ref}
			className={className}
			placeholder={placeholder}
			id='exampleMessage'
			spellCheck='false'
			disabled={disabled}
			onChange={onChange}
			value={value}
		></textarea>
	);
};

let TextareaRef = React.forwardRef(Textarea);

export default TextareaRef;
