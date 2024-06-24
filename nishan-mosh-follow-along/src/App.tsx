import Alert from "./components/Alert";
import BootstrapButton from "./components/BootstrapButton";
// import ListGroup from "./components/ListGroup";

function App() {
	// let fruits = ["Apples", "Bananas", "Grapes", "Tomatoes", "Oranges"];
	// let cities = ["New York", "Mumbai", "Moscow", "Paris", "Perth"];

	// const handleOnSelectItem = (item: String) => {
	// 	console.log(item);
	// };
	const handleOnClick = () => {
		console.log("Clicked some button");
	};
	return (
		<div>
			{/* <ListGroup
				items={fruits}
				heading={"Fruits"}
				onSelect={handleOnSelectItem}
			/>
			<ListGroup
				items={cities}
				heading={"Cities"}
				onSelect={handleOnSelectItem}
			/> */}
			<Alert>
				Alert <b>Text</b>
			</Alert>
			<BootstrapButton buttonText="Primary" onClick={handleOnClick} />
			<BootstrapButton buttonText="Primary" onClick={handleOnClick} />
			<BootstrapButton
				buttonType="secondary"
				buttonText="Secondary"
				onClick={handleOnClick}
			/>
		</div>
	);
}
export default App;
