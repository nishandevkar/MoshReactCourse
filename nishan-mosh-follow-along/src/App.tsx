// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup

import ImmerArrayOfBugs from "./components/ImmerArrayOfBugs/ImmerArrayOfBugs";

function App() {
	return (
		<div>
			<ImmerArrayOfBugs></ImmerArrayOfBugs>
		</div>
	);
}
export default App;
