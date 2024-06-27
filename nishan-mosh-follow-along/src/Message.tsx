function Message() {
	// When count is part of the component,
	// it is a pure function
	let count = 0;
	count++;
	return <h1> Message {count}</h1>;
}
export default Message;
