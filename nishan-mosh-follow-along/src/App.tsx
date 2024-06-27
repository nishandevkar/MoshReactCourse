// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup
import LikeButton from "./components/LikeButton/LikeButton";
function App() {
	return (
		<div>
			<LikeButton></LikeButton>
		</div>
	);
}
export default App;
