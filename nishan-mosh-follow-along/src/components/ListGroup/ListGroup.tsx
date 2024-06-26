import { useState } from "react";
import styles from "./ListGroup.module.css";
interface ListGroupProp {
	items: string[];
	heading: string;
	onSelect: (item: string) => void;
}

function ListGroup({ items, heading, onSelect }: ListGroupProp) {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	return (
		// empty tags tells react to use Fragments to enclose the children
		// Since it will be converted as React.createElement("element")
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <h2>No items found here</h2>}
			<ul className={styles["list-group"]}>
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							onSelect(item);
							setSelectedIndex(index);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}
export default ListGroup;
