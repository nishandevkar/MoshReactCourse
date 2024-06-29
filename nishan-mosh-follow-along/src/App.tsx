// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup
import Arrays from "./components/Arrays/Arrays";

function App() {
	return (
		<div>
			<Arrays></Arrays>
		</div>
	);
}
export default App;
