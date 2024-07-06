import { useEffect, useRef } from "react";

const UseEffectHook = () => {
	const textBoxText = useRef<HTMLInputElement>(null);
	console.log(textBoxText.current);

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
