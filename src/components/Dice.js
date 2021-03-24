import { useState, useEffect, useRef } from 'react';

function Dice({ data, update, updateDice }) {
	const initialMount = useRef(true);
	const [rollColor, setRollColor] = useState('purple-500');
	function rollDice() {
		updateDice(Math.floor(Math.random() * data.sides + 1));
	}
	function handleChange(e) {
		update(e);
	}
	useEffect(() => {
		if (initialMount.current) {
			initialMount.current = false;
		} else {
			setRollColor('blue-400');
			const timer = setTimeout(() => {
				setRollColor('purple-500');
			}, 4000);
			return () => clearTimeout(timer);
		}
	}, [data.lastRoll]);

	return (
		<div className="flex">
			<select id="dice.sides" className="text-xxs" onChange={handleChange} value={data.sides}>
				<option value="20">d20</option>
				<option value="12">d12</option>
				<option value="10">d10</option>
				<option value="8">d8</option>
				<option value="6">d6</option>
				<option value="4">d4</option>
			</select>
			<div onClick={rollDice} className="select-none flex flex-nowrap" style={{ cursor: 'pointer' }}>
				<span className="px-1">🎲</span>
				<span id="dice.lastRoll" className={`text-${rollColor} font-bold`}>
					{data.lastRoll || '?'}
				</span>
			</div>
		</div>
	);
}

export default Dice;
