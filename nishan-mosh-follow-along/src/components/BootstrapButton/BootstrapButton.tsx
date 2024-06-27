import { ReactNode } from "react";
import styles from "./BootstrapButton.module.css";
interface ButtonProp {
	buttonText: string;
	children: ReactNode;
	onClick: () => void;
}

const BootstrapButton = ({ buttonText, onClick }: ButtonProp) => {
	return (
		<div>
			<button type="button" onClick={onClick}>
				{buttonText}
			</button>
		</div>
	);
};

export default BootstrapButton;
