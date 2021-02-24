import { useState } from 'react';

function Dice() {
	const [sides, setSides] = useState(20);
	const [roll, setRoll] = useState(0);

	function rollDice() {
		setRoll(Math.floor(Math.random() * sides + 1));
	}
	function selectSides(e) {
		setSides(e.target.value);
	}

	return (
		<div className="flex ">
			<select className="text-xxs" onChange={selectSides} value={sides}>
				<option value="20">d20</option>
				<option value="12">d12</option>
				<option value="10">d10</option>
				<option value="8">d8</option>
				<option value="6">d6</option>
				<option value="4">d4</option>
			</select>
			<div onClick={rollDice} className="select-none" style={{ cursor: 'pointer' }}>
				<span className="pr-2">🎲</span>
				<span className="text-purple-500 font-bold">{roll || '?'}</span>
			</div>
		</div>
	);
}

export default Dice;
