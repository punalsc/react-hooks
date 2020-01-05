import { useState, useRef, useEffect } from 'react';

export default seconds => {
	const [count, setCount] = useState(seconds);
	const [text, setText] = useState('');
	const [countText, setCountText] = useState(0);
	const [disabled, setDisabled] = useState(true);
	const [isTime, setIsTime] = useState(false);

	const textAreaRef = useRef();

	const handleChange = (e, text) => {
		const { value } = e.target;
		const wordsArr = text.trim().split(' ');

		setText(value);
		setCountText(wordsArr.filter(word => word !== '').length);
	};

	const startGame = () => {
		setCountText(0);
		setText('');
		setCount(seconds);
		setDisabled(false);
		setIsTime(true);
		textAreaRef.current.disabled = false;
		textAreaRef.current.focus();
	};

	useEffect(() => {
		if (isTime) {
			setTimeout(() => {
				setCount(prev => {
					if (prev === 0) {
						setCount(0);
						setDisabled(true);
					}
					return prev - 1;
				});
			}, 1000);
		}
	}, [count, disabled, isTime]);

	return {
		text,
		disabled,
		textAreaRef,
		startGame,
		count,
		countText,
		handleChange
	};
};
