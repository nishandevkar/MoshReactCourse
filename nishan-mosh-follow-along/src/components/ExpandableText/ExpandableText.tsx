import { useState } from "react";

interface ExpandableTextProps {
	children: string;
	maxChar: number;
}
const ExpandableText = ({ children, maxChar = 100 }: ExpandableTextProps) => {
	const [isExpanded, setExpanded] = useState(false);
	const handleOnClick = () => {
		setExpanded(!isExpanded);
	};
	if (children.length <= maxChar) return <p>{children}</p>;

	const summarisedText = isExpanded
		? children
		: children.substring(0, maxChar);
	return (
		<div>
			<p>
				{summarisedText}...{" "}
				<button onClick={handleOnClick}>
					{isExpanded ? "Less" : "More"}
				</button>
			</p>
		</div>
	);
};

export default ExpandableText;
