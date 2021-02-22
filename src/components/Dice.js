import { useState } from 'react';

function Dice() {
	const [sides, setSides] = useState(20);
	const [role, setRole] = useState(0);

	function roleDice() {
		setRole(Math.floor(Math.random() * sides + 1));
	}
	function selectSides(e) {
		setSides(e.target.value);
	}

	return (
		<div className="flex items-center">
			<select onChange={selectSides} value={sides} style={{ fontSize: '.75rem' }}>
				<option value="20">20</option>
				<option value="12">12</option>
				<option value="10">10</option>
				<option value="8">8</option>
				<option value="6">6</option>
				<option value="4">4</option>
			</select>
			<div onClick={roleDice} className="select-none" style={{ cursor: 'pointer' }}>
				<span className="pr-2">🎲</span>
				<span className="text-purple-500 font-bold">{role || '?'}</span>
			</div>
		</div>
	);
}

export default Dice;
