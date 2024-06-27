// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup
import LikeButton from "./components/LikeButton/LikeButton";
import AsyncDemo from "./components/AsyncDemo/AsyncDemo";
function App() {
	return (
		<div>
			<LikeButton></LikeButton>
			<AsyncDemo></AsyncDemo>
		</div>
	);
}
export default App;
