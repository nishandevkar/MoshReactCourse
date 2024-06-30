interface CartProps {
	cartProducts: string[];
	handleOnClick: () => void;
}
const Cart = ({ cartProducts, handleOnClick }: CartProps) => {
	return (
		<div>
			<h1>Cart</h1>
			<ul>
				{cartProducts.map((cartProduct) => (
					<li key={cartProduct}>{cartProduct}</li>
				))}
			</ul>
			<button onClick={handleOnClick}>Clear</button>
		</div>
	);
};

export default Cart;
