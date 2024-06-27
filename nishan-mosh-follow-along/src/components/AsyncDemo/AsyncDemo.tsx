import { useState } from "react";

const AsyncDemo = () => {
	const [isVisible, setVisibility] = useState(false);
	// The first time you click on this component,
	// console.log will return false.
	// Because of batch state update
	// Which is the reactive nature of React to avoid multiple unnecessary re-renders
	const handleClick = () => {
		setVisibility(true);
		console.log(isVisible);
	};
	return <div onClick={handleClick}>AsyncDemo</div>;
};

export default AsyncDemo;
