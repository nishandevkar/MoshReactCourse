interface NavBarProps {
	cartProductCount: number;
}
const NavBar = ({ cartProductCount }: NavBarProps) => {
	return (
		<div>
			<h1>Navbar</h1>
			{cartProductCount}
		</div>
	);
};

export default NavBar;
