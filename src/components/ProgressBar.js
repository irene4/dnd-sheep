function ProgressBar({ curr, tot }) {
	function colorSolver() {
		if (curr / tot < 0.3) return 'red';
		else if (curr / tot < 0.7) return 'yellow';
		else if (curr / tot <= 1) return 'green';
		else if (curr / tot <= 2) return 'purple';
		else return 'white';
	}
	return (
		<div className="w-1/2 border rounded">
			<div className={`bg-${colorSolver()}-500 py-1 rounded`} style={{ width: `${(curr / tot) * 100}%`, maxWidth: '100%' }}></div>
		</div>
	);
}

export default ProgressBar;
