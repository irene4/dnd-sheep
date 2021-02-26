import Dice from './Dice';
import useFirestore from '../hooks/useFirestore';

function Enemy({ data, slug }) {
	const { updateField } = useFirestore(slug);

	function update(e) {
		updateField(data.id, e.target.id, e.target.value);
	}
	function updateDice(value) {
		updateField(data.id, 'dice.lastRoll', value);
	}

	return (
		<div className="flex sm:flex-col relative h-20 sm:h-32 w-full sm:w-36 sm:rounded-2xl bg-red-500 items-center p-4 sm:m-2 sm:shadow-md">
			<input
				id="name"
				value={data.name}
				type="text"
				className="w-full text-2xl text-yellow-200 font-bold rounded bg-transparent pl-1 overflow-ellipsis"
				placeholder="✎ Enemy..."
				onChange={update}
			/>
			<span className="flex items-center">
				<label className="text-yellow-200 font-bold tracking-wider uppercase text-xs">HP</label>
				<input
					id="hp.curr"
					value={data.hp.curr || '#'}
					type="text"
					className="font-bold rounded bg-transparent w-6 text-right text-yellow-200"
					placeholder="#"
					onChange={update}
				/>
				<span className="px-1 text-white">/</span>
				<input
					id="hp.total"
					value={data.hp.total || '#'}
					type="text"
					className="rounded bg-transparent w-6 text-yellow-200"
					placeholder="#"
					onChange={update}
				/>
			</span>
			<span className="pl-1 pr-2 bg-white rounded">
				<Dice data={data.dice || ''} update={update} updateDice={updateDice} />
			</span>
			<button className="absolute text-sm text-yellow-200 top-2 right-4" onClick={() => updateField(data.id, 'active', false)}>
				x
			</button>
		</div>
	);
}

export default Enemy;
