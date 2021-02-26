import { useState } from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';

function Cards() {
	let { slug } = useParams();
	const { roomContent, createPlayer, toggleActive } = useFirestore(slug);
	const [join, setJoin] = useState(false);

	const toggleJoin = () => {
		setJoin(!join);
	};

	return (
		<div className="h-full">
			<div className="absolute flex justify-center w-full mt-2">
				<div>
					<div className="flex items-center">
						<h2 className="font-bold capitalize text-3xl text-center text-blue-800 rounded p-1">{slug}</h2>
						<button
							className="bg-green-500 text-gray-100 font-bold tracking-wider uppercase text-xs rounded px-2 h-8"
							onClick={toggleJoin}
						>
							Join
						</button>
					</div>
					{join && (
						<form>
							<input type="text" className="w-20 rounded mx-1 pl-1" placeholder="Password" />
							<button>Go</button>
						</form>
					)}
				</div>
			</div>

			<div className="absolute mt-20 flex flex-col justify-end w-full">
				<div className="flex flex-col sm:flex-row sm:flex-wrap sm:h-full">
					{roomContent &&
						roomContent
							.filter((doc) => doc.type === 'enemy' && doc.active === true)
							.map((enemy) => {
								return <h2>Enemy</h2>;
							})}
				</div>

				<button onClick={createPlayer} className="uppercase font-bold text-xs text-gray-100 bg-blue-500 p-1 rounded-md m-auto">
					+Add player
				</button>

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
							.filter((doc) => doc.type === 'player' && doc.active === false)
							.map((inactive) => {
								return (
									<option value={inactive.id} key={inactive.id}>
										{inactive.name || inactive.id}
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
