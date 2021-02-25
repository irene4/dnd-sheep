import { useState } from 'react';
import Dice from './Dice';
import useFirestore from '../hooks/useFirestore';

function Card({ data, slug }) {
	const nopicUrl = 'https://i.imgur.com/ysksdxg.jpg';
	const { updateField } = useFirestore(slug);

	function update(e) {
		updateField(data.id, e.target.id, e.target.value);
	}
	function updateDice(value) {
		updateField(data.id, 'dice.lastRoll', value);
	}

	return (
		<div className={`flex h-72 w-full sm:w-1/2 md:w-1/3 lg:w-3/10 sm:rounded-2xl bg-white p-4 pr-8 sm:m-2 sm:shadow-md`}>
			<div className="flex flex-col items-center">
				<div className="relative max-w-10">
					<img className="rounded-full shadow-md w-5/6 m-1" src={data.url || nopicUrl} alt="Character" />
					<input
						id="url"
						value={data.url}
						type="text"
						className="absolute bottom-1/4 left-1/4 border text-blue-400 rounded shadow"
						placeholder="Paste an image url here!"
						onChange={update}
					/>
				</div>
				<span className="flex items-center">
					<label className="text-gray-600 font-bold tracking-wider uppercase text-xs">HP</label>
					<input
						id="hp.curr"
						value={data.hp.curr || '#'}
						type="text"
						className="font-bold rounded bg-transparent w-6 text-right"
						placeholder="#"
						onChange={update}
					/>
					<span className="px-1">/</span>
					<input
						id="hp.total"
						value={data.hp.total || '#'}
						type="text"
						className="rounded bg-transparent w-6"
						placeholder="#"
						onChange={update}
					/>
				</span>
				<Dice data={data.dice || ''} update={update} updateDice={updateDice} />
				<div className="text-left mt-1">
					<span className="flex items-center text-xxxs">
						<span className="text-gray-500 font-bold tracking-wider">Speed</span>
						<input className="w-4 ml-1" type="text" placeholder="#" />
					</span>
					<span className="flex items-center text-xxxs">
						<span className="text-gray-500 font-bold tracking-wider">Armor Class</span>
						<input className="w-4 ml-1" type="text" placeholder="#" />
					</span>
					<span className="flex items-center text-xxxs">
						<span className="text-gray-500 font-bold tracking-wider">Hit Dice</span>
						<select>
							<option>d12</option>
							<option>d10</option>
							<option>d8</option>
							<option>d6</option>
						</select>
					</span>
				</div>
			</div>
			<div className="w-2/3">
				<input
					id="name"
					value={data.name}
					type="text"
					className="text-2xl font-bold rounded bg-transparent pl-1 w-full overflow-ellipsis"
					placeholder="✎ Character Name..."
					onChange={update}
				/>
				<div className="flex flex-col">
					<input
						id="class"
						value={data.class}
						type="text"
						className="text-xs text-gray-600 italic w-full rounded bg-transparent pl-1"
						placeholder="✎ Class..."
						onChange={update}
					></input>
					<input
						id="alignment"
						value={data.alignment}
						type="text"
						className="text-xs text-gray-600 italic w-full rounded bg-transparent pl-1 mb-1"
						placeholder="✎ Alignment..."
						onChange={update}
					/>
					<div className="stats grid grid-cols-4 xl:grid-cols-6 items-center w-full mr-2">
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">STR</label>
						<input
							id="stats.str"
							value={data.stats.str}
							type="text"
							className="w-14 rounded bg-transparent text-sm"
							placeholder="# (±#)"
							onChange={update}
						></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">DEX</label>
						<input
							id="stats.dex"
							value={data.stats.dex}
							type="text"
							className="w-14 rounded bg-transparent text-sm"
							placeholder="# (±#)"
							onChange={update}
						></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">CON</label>
						<input
							id="stats.con"
							value={data.stats.con}
							type="text"
							className="w-14 rounded bg-transparent text-sm"
							placeholder="# (±#)"
							onChange={update}
						></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">INT</label>
						<input
							id="stats.int"
							value={data.stats.int}
							type="text"
							className="w-14 rounded bg-transparent text-sm"
							placeholder="# (±#)"
							onChange={update}
						></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">WIS</label>
						<input
							id="stats.wis"
							value={data.stats.wis}
							type="text"
							className="w-14 rounded bg-transparent text-sm"
							placeholder="# (±#)"
							onChange={update}
						></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">CHA</label>
						<input
							id="stats.cha"
							value={data.stats.cha}
							type="text"
							className="w-14 rounded bg-transparent text-sm"
							placeholder="# (±#)"
							onChange={update}
						></input>
					</div>
					<label className="font-bold tracking-wider uppercase text-xs">Actions</label>
					<textarea
						id="actions"
						value={data.actions}
						className="text-xs rounded-md px-1 border"
						placeholder="Actions..."
						onChange={update}
					></textarea>
				</div>
			</div>
		</div>
	);
}

export default Card;
