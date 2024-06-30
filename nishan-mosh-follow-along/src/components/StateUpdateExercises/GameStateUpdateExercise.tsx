import { useState } from "react";

const GameStateUpdateExercise = () => {
	const [game, setGame] = useState({
		id: 1,
		player: {
			name: "Harry",
		},
	});
	const handleClick = () => {
		setGame({ ...game, player: { ...game.player, name: "Nishan" } });
	};
	return (
		<div>
			<button onClick={handleClick}>Change Name</button>
			{game.player.name}
		</div>
	);
};

export default GameStateUpdateExercise;
