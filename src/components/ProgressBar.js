function ProgressBar({ curr, tot, updateWithoutEvent }) {
	function colorSolver() {
		if (curr / tot < 0.3) return 'red';
		else if (curr / tot < 0.7) return 'yellow';
		else if (curr / tot <= 1) return 'green';
		else if (curr / tot <= 2) return 'purple';
		else return 'white';
	}
	return (
		<div className="text-xxs text-gray-200 w-full flex justify-center">
			<svg
				onClick={() => updateWithoutEvent('hp.curr', curr - 1)}
				className="h-3 cursor-pointer hover:text-gray-300"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
					clipRule="evenodd"
				/>
			</svg>
			<div className="w-1/2">
				<div className="border rounded h-auto">
					<div className={`bg-${colorSolver()}-500 py-1 rounded`} style={{ width: `${(curr / tot) * 100}%`, maxWidth: '100%' }}></div>
				</div>
			</div>
			<svg
				onClick={() => updateWithoutEvent('hp.curr', curr + 1)}
				className="h-3 cursor-pointer hover:text-gray-300"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
					clipRule="evenodd"
				/>
			</svg>
		</div>
	);
}

export default ProgressBar;
