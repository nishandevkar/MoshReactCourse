// This works because TypeScript looks for index.ts
// if it doesnt find the ./components/ListGroup/ListGroup

import { useState } from "react";
import NavBar from "./components/ShoppingCartExample/NavBar";
import Cart from "./components/ShoppingCartExample/Cart";

function App() {
	const [cartProducts, setCartProducts] = useState([
		"Apples 2kg",
		"Bananas 4ea",
	]);
	const clearCart = () => {
		setCartProducts([]);
	};
	return (
		<div>
			<NavBar cartProductCount={cartProducts.length}></NavBar>
			<Cart cartProducts={cartProducts} handleOnClick={clearCart}></Cart>
		</div>
	);
}
export default App;
