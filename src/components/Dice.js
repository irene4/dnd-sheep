function Dice({ data, update, updateDice }) {
	function rollDice() {
		updateDice(Math.floor(Math.random() * data.sides + 1));
	}
	function handleChange(e) {
		update(e);
	}
	return (
		<div className="flex ">
			<select id="dice.sides" className="text-xxs" onChange={handleChange} value={data.sides}>
				<option value="20">d20</option>
				<option value="12">d12</option>
				<option value="10">d10</option>
				<option value="8">d8</option>
				<option value="6">d6</option>
				<option value="4">d4</option>
			</select>
			<div onClick={rollDice} className="select-none" style={{ cursor: 'pointer' }}>
				<span className="pr-2">🎲</span>
				<span id="dice.lastRoll" className="text-purple-500 font-bold">
					{data.lastRoll || '?'}
				</span>
			</div>
		</div>
	);
}

export default Dice;
