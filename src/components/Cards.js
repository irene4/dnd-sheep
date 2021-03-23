import { useState } from 'react';
import Card from './Card';
import Enemy from './Enemy';
import AddButton from './AddButton';
import { useParams } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';
import ColorPicker from './ColorPicker';

function Cards() {
	let { slug } = useParams();
	const { roomContent, createCard, toggleActive } = useFirestore(slug);
	// const [join, setJoin] = useState(false);
	// const toggleJoin = () => {
	// 	setJoin(!join);
	// };
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
				{roomContent && (
					<select
						value="default"
						onChange={(e) => {
							toggleActive(e.target.value);
							e.target.value = 'default';
						}}
						className="m-auto text-xs text-gray-400 rounded-md p-1 w-28"
					>
						<option value="default" disabled>
							Reactivate...
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
				)}
			</div>
		</div>
	);
}

export default Cards;
