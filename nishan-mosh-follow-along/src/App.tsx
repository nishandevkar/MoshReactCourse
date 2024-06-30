// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup

import BasicForm from "./components/BasicForm/BasicForm";

function App() {
	return (
		<div>
			<BasicForm></BasicForm>
		</div>
	);
}
export default App;
