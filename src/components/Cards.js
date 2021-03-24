import { useState, useRef } from 'react';
import Card from './Card';
import Enemy from './Enemy';
import AddButton from './AddButton';
import { useParams } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';
import ColorPicker from './ColorPicker';


function Cards() {
	let { slug } = useParams();
	const { roomContent, createCard, toggleActive, deleteDocument } = useFirestore(slug);
	// const [join, setJoin] = useState(false);
	// const toggleJoin = () => {
	// 	setJoin(!join);
	// };
	const selectEl = useRef(null);
	return (
		<div className="pb-2">
			<div className="flex justify-center w-full mt-2">
				<div>
					<div className="flex items-center">
						<h2 id="roomSlug" className="font-bold capitalize text-3xl text-center text-blue-800 rounded p-1">
							{slug}
						</h2>
						<ColorPicker />
						{/* <input className="rounded h-6 w-6" type="color" value={color} onChange={(e) => setColor(e.target.value)} /> */}
						{/* <button
							className="bg-green-500 text-gray-100 font-bold tracking-wider uppercase text-xs rounded px-2 h-8"
							onClick={toggleJoin}
						>
							Join
						</button> */}
					</div>
					{/* {join && (
						<form>
							<input type="text" className="w-20 rounded mx-1 pl-1" placeholder="Password" />
							<button>Go</button>
						</form>
					)} */}
				</div>
			</div>

			<div className="flex flex-col justify-end w-full">
				<div className="flex flex-col sm:flex-row sm:flex-wrap sm:h-full sm:m-auto">
					{roomContent &&
						roomContent
							.filter((doc) => doc.type === 'enemy' && doc.active === true)
							.map((enemy) => {
								return <Enemy key={enemy.id} data={enemy} slug={slug} />;
							})}
				</div>

				<div className="flex m-auto">
					<AddButton type="player" color="blue-500" createPlayer={createCard} />
					<AddButton type="enemy" color="red-500" createPlayer={createCard} />
				</div>

				<div className="flex flex-col sm:flex-row sm:flex-wrap sm:h-full justify-center items-center">
					{roomContent &&
						roomContent
							.filter((doc) => doc.type === 'player' && doc.active === true)
							.map((player) => {
								return <Card key={player.id} data={player} slug={slug} />;
							})}
				</div>
				{roomContent && <div className="flex flex-row justify-center space-x-2">
					<select
						ref={selectEl}
						className="text-xs text-gray-400 rounded-md p-1 w-28"
					>
						<option value="default" disabled>
							Select object...
						</option>
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
					<div
						className="tooltipped-btn h-6 w-6 bg-blue-500 text-white rounded p-1 relative"
						onClick={() => {
							const val = selectEl.current.value;
							if (val !== 'default') {
								toggleActive(val);
								selectEl.current.value = 'default';
							}
						}}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
</svg>

						<div className="p-1 tooltip bg-black rounded">Restore</div>
					</div>
					<div
						className="tooltipped-btn h-6 w-6 bg-red-500 text-white rounded p-1 relative"
						onClick={() => {
							const val = selectEl.current.value;
							if (val !== 'default') {
								deleteDocument(val);
								selectEl.current.value = 'default'
							}
						}}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
						</svg>
						<div className="p-1 tooltip bg-black rounded">Permadelete</div>
					</div>
				</div>
				}
			</div>
		</div>
	);
}

export default Cards;
