// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup
import Drink from "./components/Drink/Drink";

function App() {
	return (
		<div>
			<Drink></Drink>
		</div>
	);
}
export default App;
