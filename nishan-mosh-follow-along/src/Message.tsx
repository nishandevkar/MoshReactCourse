function Message() {
	const messageText = "messass";
	if (messageText) return <h1>This is a {messageText} component heading</h1>;
	return (
		<h1>
			This is a message component without dynamic changing of variable
		</h1>
	);
}
export default Message;
