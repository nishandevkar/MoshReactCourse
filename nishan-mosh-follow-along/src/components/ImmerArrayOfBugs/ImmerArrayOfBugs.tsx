import { useState } from "react";
import { produce } from "immer";
const ImmerArrayOfBugs = () => {
	const [bugs, setBugs] = useState([
		{ id: 1, bugTitle: "Bug 1", isFixed: false },
		{ id: 2, bugTitle: "Bug 2", isFixed: false },
	]);
	const handleOnClick = () => {
		setBugs(
			produce((draft) => {
				const bug = draft.find((bug) => bug.id === 1);
				if (bug) bug.isFixed = true;
			})
		);
	};
	return (
		<div>
			<ul>
				{bugs.map((bug) => (
					<li key={bug.id}>
						{bug.bugTitle + " "}
						{bug.isFixed ? "Fixed " : "New "}
					</li>
				))}
			</ul>
			<button onClick={handleOnClick}>Fix Bug 1</button>
		</div>
	);
};

export default ImmerArrayOfBugs;
