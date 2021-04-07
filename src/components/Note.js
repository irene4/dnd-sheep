function Note({ data, updateField }) {
	function update(e) {
		updateField(data.id, e.target.id, e.target.value);
	}

	return (
		<div className="flex sm:flex-col relative sm:w-32 sm:rounded-2xl bg-gray-100 items-center p-2 sm:p-4 sm:m-2 sm:shadow-md">
			<textarea
				className="w-full h-8 sm:h-auto text-xs text-purple-500 placeholder-gray-400 rounded bg-transparent pr-1"
				id="content"
				value={data.content}
				type="text"
				rows="5"
				spellCheck="false"
				placeholder="Empty note"
				onChange={update}
			/>

			<button
				className="absolute text-sm text-purple-500 hover:text-purple-600 top-2 right-2"
				onClick={() => updateField(data.id, 'active', false)}
			>
				<svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path
						fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
		</div>
	);
}

export default Note;
