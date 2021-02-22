function Card() {
	const bgColor = 'gray';
	const characterName = 'Jorge';

	return (
		<div className={`flex h-60 rounded-2xl bg-${bgColor}-200 p-4 shadow`}>
			<div className="">
				<img
					className="rounded-full w-5/6 shadow-md"
					src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.15752-9/151467208_145327264098759_5141235477982174585_n.png?_nc_cat=111&ccb=3&_nc_sid=ae9488&_nc_ohc=xZko6rj2vgAAX8mhZC0&_nc_ht=scontent-atl3-1.xx&oh=2373c3749fa11cac51b880a65317de78&oe=60570172"
				/>
			</div>
			<div>
				<input
					type="text"
					className="text-2xl font-bold rounded bg-transparent pl-1"
					defaultValue={characterName}
					placeholder="✎ Character Name..."
				></input>
				<div className="flex flex-col">
					<input type="text" className="text-xs text-gray-600 italic w-full rounded bg-transparent pl-1" placeholder="✎ Class..."></input>
					<input
						type="text"
						className="text-xs text-gray-600 italic w-full rounded bg-transparent pl-1"
						placeholder="✎ Alignment..."
					></input>
					<div className="stats grid grid-cols-4 sm:grid-cols-6 items-center w-48 sm:w-72">
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">STR</label>
						<input type="text" className="w-16 rounded p-1 bg-transparent" placeholder="# (±#)"></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">DEX</label>
						<input type="text" className="w-16 rounded p-1 bg-transparent" placeholder="# (±#)"></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">CON</label>
						<input type="text" className="w-16 rounded p-1 bg-transparent" placeholder="# (±#)"></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">INT</label>
						<input type="text" className="w-16 rounded p-1 bg-transparent" placeholder="# (±#)"></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">WIS</label>
						<input type="text" className="w-16 rounded p-1 bg-transparent" placeholder="# (±#)"></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">CHA</label>
						<input type="text" className="w-16 rounded p-1 bg-transparent" placeholder="# (±#)"></input>
					</div>
					<label className="text-gray-500 font-bold tracking-wider uppercase text-xs">Actions</label>
					<textarea className="text-xs rounded" placeholder="Actions..."></textarea>
				</div>
			</div>
		</div>
	);
}

export default Card;
