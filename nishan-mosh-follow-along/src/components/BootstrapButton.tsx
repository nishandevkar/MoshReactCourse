interface ButtonProp {
	buttonType?: "primary" | "secondary" | "dark" | "light";
	buttonText: string;
	onClick: () => void;
}

const BootstrapButton = ({
	buttonType = "primary",
	buttonText,
	onClick,
}: ButtonProp) => {
	return (
		<div>
			<button
				type="button"
				className={"btn btn-" + buttonType}
				onClick={onClick}
			>
				{buttonText}
			</button>
		</div>
	);
};

export default BootstrapButton;
