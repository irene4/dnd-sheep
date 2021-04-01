import Dice from './Dice';
import Tooltip from './Tooltip';

function Enemy({ data, updateField }) {
	function update(e) {
		updateField(data.id, e.target.id, e.target.value);
	}
	function updateWithoutEvent(field, value) {
		updateField(data.id, field, value);
	}

	return (
		<div className="flex sm:flex-col relative w-full sm:w-40 max-h-40 sm:rounded-2xl bg-red-500 justify-around items-center p-4 sm:m-2 sm:shadow-md">
			<Tooltip text={data.name} enabled={data.name?.length > 15}>
				<input
					id="name"
					value={data.name}
					type="text"
					className="w-full text-lg text-yellow-200 placeholder-red-700 font-bold rounded bg-transparent pl-1 overflow-ellipsis"
					placeholder="✎ Enemy..."
					onChange={update}
				/>
			</Tooltip>
			<Tooltip text={data.status} enabled={data.status?.length > 20}>
				<input
					className="w-full text-sm text-yellow-200 placeholder-red-700 rounded bg-transparent mb-1 text-center overflow-ellipsis"
					id="status"
					value={data.status}
					type="text"
					placeholder="Status"
					onChange={update}
				/>
			</Tooltip>
			<span className="pl-1 pr-2 bg-white rounded">
				<Dice data={data.dice || ''} update={update} updateWithoutEvent={updateWithoutEvent} />
			</span>
			<button className="absolute text-sm text-red-700 hover:text-red-800 top-2 right-2" onClick={() => updateField(data.id, 'active', false)}>
				<svg className="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path
						fillRule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>
			<input
				id="initiative"
				value={data.initiative}
				type="text"
				className="absolute text-xs text-center text-red-700 placeholder-red-700 bg-transparent h-4 w-4 top-6 right-1 rounded"
				placeholder="#"
				onChange={update}
			></input>
		</div>
	);
}

export default Enemy;
