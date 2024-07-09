import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";

function App() {
	const [category, setCategory] = useState("");
	return (
		<>
			<div>
				<select
					className="form-select"
					onChange={(event) => {
						setCategory(event.target.value);
					}}
				>
					<option value="Clothing">Clothing</option>
					<option value="Entertainment">Entertainment</option>
				</select>
				<ProductList category={category}></ProductList>
			</div>
		</>
	);
}
export default App;
