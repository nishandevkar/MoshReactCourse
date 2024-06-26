import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
	padding: 2rem;
`;
interface ListItemProps {
	active: boolean;
}
const ListItem = styled.li<ListItemProps>`
	background-color: ${(props) => (props.active ? "blue" : "none")};
`;
interface ListGroupProp {
	items: string[];
	heading: string;
	onSelect: (item: string) => void;
}

function ListGroup({ items, heading, onSelect }: ListGroupProp) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		// empty tags tells react to use Fragments to enclose the children
		// Since it will be converted as React.createElement("element")
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <h2>No items found here</h2>}
			<List>
				{items.map((item, index) => (
					<ListItem
						active={index === selectedIndex}
						key={item}
						onClick={() => {
							onSelect(item);
							setSelectedIndex(index);
						}}
					>
						{item}
					</ListItem>
				))}
			</List>
		</>
	);
}
export default ListGroup;
