// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup

import CartStateUpdateExercise from "./components/StateUpdateExercises/CartStateUpdateExercise";

function App() {
	return (
		<div>
			<CartStateUpdateExercise></CartStateUpdateExercise>
		</div>
	);
}
export default App;
