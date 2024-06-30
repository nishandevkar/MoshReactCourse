import { useState } from "react";

const PizzaToppingsUpdateExercise = () => {
	const [pizza, setPizza] = useState({
		pizzaName: "Hawaiian",
		pizzaToppings: ["Pineapple"],
	});
	const handleOnClick = () => {
		// const newPizza = [...pizza.pizzaToppings, "Ham"];
		if (!pizza.pizzaToppings.includes("Ham"))
			setPizza({
				...pizza,
				pizzaToppings: [...pizza.pizzaToppings, "Ham"],
			});
	};
	return (
		<div>
			{pizza.pizzaToppings.join(" ")}
			<button onClick={handleOnClick}>Add Toppings</button>
		</div>
	);
};

export default PizzaToppingsUpdateExercise;
