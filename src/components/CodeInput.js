function CodeInput() {
	return (
		<div className="flex flex-col h-full w-full items-center justify-around">
			<div className="flex">
				<input className="p-3 text-blue-400 text-4xl rounded-lg w-64" placeholder="Room code..." />
				<button className="bg-blue-500 p-4 ml-1 rounded-full">Go</button>
			</div>
			<div></div>
		</div>
	);
}

export default CodeInput;
