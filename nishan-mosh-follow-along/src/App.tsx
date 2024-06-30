// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup
import ArrayOfBugs from "./components/ArrayOfBugs/ArrayOfBugs";

function App() {
	return (
		<div>
			<ArrayOfBugs></ArrayOfBugs>
		</div>
	);
}
export default App;
