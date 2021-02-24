import { useState } from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';

function Cards() {
	let { slug } = useParams();
	const { roomContent } = useFirestore(slug);
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
			<div className="flex flex-col sm:flex-row sm:flex-wrap h-full justify-center items-center">
				{roomContent &&
					roomContent
						.filter((doc) => doc.type === 'player')
						.map((player) => {
							return <Card key={player.id} data={player} />;
						})}
			</div>
		</div>
	);
}

export default Cards;