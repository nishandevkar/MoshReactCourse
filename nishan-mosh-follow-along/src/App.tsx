// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup

import GameStateUpdateExercise from "./components/GameStateUpdateExercise/GameStateUpdateExercise";

function App() {
	return (
		<div>
			<GameStateUpdateExercise></GameStateUpdateExercise>
		</div>
	);
}
export default App;
