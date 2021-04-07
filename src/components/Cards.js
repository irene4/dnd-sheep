import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import Enemy from './Enemy';
import Note from './Note';
import AddButton from './AddButton';
import ColorPicker from './ColorPicker';
import Tooltip from './Tooltip';
import useFirestore from '../hooks/useFirestore';

function Cards() {
	let { slug } = useParams();
	const { updateField, roomContent, createCard, toggleActive, deleteDocument, createConfigIfNotExists } = useFirestore(slug);

	createConfigIfNotExists();
	const selectEl = useRef(null);

	return (
		<div className="pb-2">
			<div className="flex justify-center w-full mt-2">
				<div className="flex items-center">
					<h2 id="roomSlug" className="font-bold capitalize text-2xl sm:text-3xl text-center text-blue-800 rounded p-1">
						{slug}
					</h2>
					<ColorPicker updateField={updateField} data={roomContent.find((doc) => doc.type === 'config')} />
				</div>
			</div>

			<div className="flex flex-col justify-end w-full">
				<div className="flex flex-col sm:flex-row sm:flex-wrap sm:h-full sm:m-auto">
					{roomContent &&
						roomContent
							.filter((doc) => doc.type === 'note' && doc.active === true)
							.map((note) => {
								return <Note key={note.id} data={note} updateField={updateField} />;
							})}
					{roomContent &&
						roomContent
							.filter((doc) => doc.type === 'enemy' && doc.active === true)
							.map((enemy) => {
								return <Enemy key={enemy.id} data={enemy} updateField={updateField} />;
							})}
				</div>

				<div className="flex w-full sm:w-auto m-auto">
					<AddButton type="note" color="purple" createPlayer={createCard} />
					<AddButton type="player" color="blue" createPlayer={createCard} />
					<AddButton type="enemy" color="red" createPlayer={createCard} />
				</div>

				<div className="flex flex-col sm:flex-row sm:flex-wrap sm:h-full justify-center items-center">
					{roomContent.length > 1 ? (
						roomContent
							.filter((doc) => doc.type === 'player' && doc.active === true)
							.map((player) => {
								return <Card key={player.id} data={player} updateField={updateField} />;
							})
					) : (
						<h2>Add a player.</h2>
					)}
				</div>
				{roomContent.length > 1 && (
					<div className="flex flex-row justify-center space-x-2">
						<select ref={selectEl} defaultValue="default" className="text-xs text-gray-400 rounded-md p-1 w-36">
							<option value="default">Restore or destroy...</option>
							{roomContent
								.filter((doc) => doc.type !== 'config' && doc.active === false)
								.map((inactive) => {
									return (
										<option value={inactive.id} key={inactive.id}>
											{inactive.name || inactive.id} ({inactive.type})
										</option>
									);
								})}
						</select>

						<Tooltip text="Restore" sz="sm">
							<div
								className="tooltipped h-6 w-6 bg-blue-500 hover:bg-blue-600 text-white rounded p-1"
								onClick={() => {
									const val = selectEl.current.value;
									if (val !== 'default') {
										toggleActive(val);
										selectEl.current.value = 'default';
									}
								}}
							>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
								</svg>
							</div>
						</Tooltip>
						<Tooltip text="Destroy" sz="sm">
							<div
								className="tooltipped h-6 w-6 bg-red-500 hover:bg-red-600 text-white rounded p-1"
								onClick={() => {
									const val = selectEl.current.value;
									if (val !== 'default') {
										deleteDocument(val);
										selectEl.current.value = 'default';
									}
								}}
							>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
									/>
								</svg>
							</div>
						</Tooltip>
					</div>
				)}
			</div>
		</div>
	);
}

export default Cards;
