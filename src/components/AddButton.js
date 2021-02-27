function AddButton({ type, color, createPlayer }) {
	function newCard() {
		createPlayer(type);
	}
	return (
		<button
			onClick={newCard}
			className={`flex justify-center uppercase font-bold text-xs text-gray-100 bg-${color} py-1 pl-1 pr-2 m-1 rounded-lg`}
		>
			<svg className="h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
				<path
					fillRule="evenodd"
					d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
					clipRule="evenodd"
				/>
			</svg>
			Add {type}
		</button>
	);
}

export default AddButton;
