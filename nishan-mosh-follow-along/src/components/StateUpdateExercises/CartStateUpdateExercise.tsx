import { useState } from "react";

const CartStateUpdateExercise = () => {
	const [cart, setCart] = useState({
		discount: 0.1,
		items: [
			{ id: 1, title: "Product 1", quantity: 1 },
			{ id: 2, title: "Product 2", quantity: 1 },
		],
	});
	const handleOnClick = () => {
		setCart({
			...cart,
			items: cart.items.map((item) =>
				item.id === 1
					? { ...item, quantity: (item.quantity = 2) }
					: item
			),
		});
	};
	return (
		<div>
			{cart.items.map((item) => (
				<p key={item.id}>
					Id:
					{item.id + " "}
					Quantity:
					{item.quantity + " "}
					Title:
					{item.title}
				</p>
			))}
			<button onClick={handleOnClick}>Add quantity</button>
		</div>
	);
};

export default CartStateUpdateExercise;
