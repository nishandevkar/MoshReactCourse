import { useState } from "react";

const Drink = () => {
	const [drink, setDrink] = useState({
		drinkName: "Latte",
		price: 20,
	});
	const handleOnClick = () => {
		const newDrink = {
			...drink, // Copies all the properties of the drink object into the newDrink object
			price: 25,
		};
		setDrink(newDrink);
		// setDrink({
		// 	drinkName: "Latte",
		// 	price: drink.price,
		// });
	};
	return (
		<>
			{drink.price}
			<button onClick={handleOnClick}>Click me </button>
		</>
	);
};

export default Drink;
