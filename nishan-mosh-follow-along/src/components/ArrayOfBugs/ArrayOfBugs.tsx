import { useState } from "react";

const ArrayOfBugs = () => {
	const [bugs, setBugs] = useState([
		{ id: 1, bugTitle: "Bug 1", isFixed: false },
		{ id: 2, bugTitle: "Bug 2", isFixed: false },
	]);
	const handleOnClick = () => {
		setBugs(
			// You are saying that there are two objects in this bugs array
			// We tell react that the first object has been updated.
			// React does the necessary work to update the DOM then
			bugs.map((bug) => (bug.id === 1 ? { ...bug, isFixed: true } : bug))
		);
		console.log(bugs);
	};
	return (
		<div>
			<button onClick={handleOnClick}>Bug Fixed</button>
		</div>
	);
};

export default ArrayOfBugs;
