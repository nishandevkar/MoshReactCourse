import { useEffect, useRef } from "react";

const UseEffectHook = () => {
	const textBoxText = useRef<HTMLInputElement>(null);
	console.log(textBoxText.current);

	// This is a side effect as it changes something
	// outside of the component
	// This means the component is not pure
	useEffect(() => {
		if (textBoxText.current) textBoxText.current.focus();
	});
	return (
		<div>
			<form>
				<input ref={textBoxText} id="text-box" type="text" />
			</form>
		</div>
	);
};

export default UseEffectHook;
