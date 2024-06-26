// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup
import ListGroup from "./components/ListGroup";
function App() {
	const friendsList = ["Akhil", "Nishan", "Arjun"];
	return (
		<div>
			<ListGroup
				items={friendsList}
				heading="Friends"
				onSelect={() => {
					console.log("selectedFriend");
				}}
			></ListGroup>
		</div>
	);
}
export default App;
