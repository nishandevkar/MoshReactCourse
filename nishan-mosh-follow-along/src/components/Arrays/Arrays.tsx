import { useState } from "react";

const Arrays = () => {
	const [tags, setTags] = useState(["happy", "cheerful", "sad", "excited"]);
	const handleOnClick = () => {
		// Be careful not to modify the original array
		// You need to notify react of this change which can be done via the useState
		// Spread the array and then add whatever you want
		if (!tags.includes("melancholic")) setTags([...tags, "melancholic"]);
		// setTags(tags.map((tag) => (tag === "happy" ? "unhappy" : tag)));
	};
	return (
		<div>
			{tags.join(" ")}
			<button onClick={handleOnClick}>Change Happy Mood</button>
		</div>
	);
};

export default Arrays;
