import { ReactNode } from "react";

interface DismissableAlertProps {
	children: ReactNode;
	onClose: () => void;
}

const DismissableAlert = ({ children, onClose }: DismissableAlertProps) => {
	return (
		<>
			<div
				className={"alert alert-warning alert-dismissible show"}
				role="alert"
			>
				{children}
				<button
					type="button"
					className="btn-close"
					data-bs-dismiss="alert"
					aria-label="Close"
					onClick={onClose}
				></button>
			</div>
		</>
	);
};

export default DismissableAlert;
