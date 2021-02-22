import { useState } from 'react';

function Dice() {
	const [role, setRole] = useState(0);

	function roleDice() {
		setRole(Math.floor(Math.random() * 20 + 1));
	}

	return (
		<div onClick={roleDice} className="flex items-center select-none" style={{ cursor: 'pointer' }}>
			<span>🎲</span>
			<span className="text-purple-500 font-bold pl-1">{role || '?'}</span>
		</div>
	);
}

export default Dice;
