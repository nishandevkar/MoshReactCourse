// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup
import Message from "./Message";

function App() {
	return (
		<div>
			<Message></Message>
			<Message></Message>
			<Message></Message>
		</div>
	);
}
export default App;
