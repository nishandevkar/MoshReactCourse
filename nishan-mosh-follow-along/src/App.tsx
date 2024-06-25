import DismissableAlert from "./components/DismissableAlert";
import BootstrapButton from "./components/BootstrapButton";
import { useState } from "react";
function App() {
	const [alertState, setAlertState] = useState(false);
	return (
		<div>
			{alertState && (
				<DismissableAlert
					onClose={() => {
						setAlertState(false);
					}}
				>
					<strong>Holy Shit!</strong> It's showing now.
				</DismissableAlert>
			)}
			<BootstrapButton
				buttonType="primary"
				buttonText="Show Alert"
				onClick={() => setAlertState(true)}
			/>
		</div>
	);
}
export default App;
