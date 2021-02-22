function Card() {
	const bgColor = 'gray';
	const characterName = 'Jorge';

	return (
		<div className={`flex h-72 w-full sm:w-1/2 md:w-1/3 sm:rounded-2xl bg-${bgColor}-200 p-4 pr-8 sm:m-2`}>
			<div className="flex flex-col items-center">
				<img
					className="rounded-full shadow-md w-5/6 m-1"
					src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.15752-9/151467208_145327264098759_5141235477982174585_n.png?_nc_cat=111&ccb=3&_nc_sid=ae9488&_nc_ohc=xZko6rj2vgAAX8mhZC0&_nc_ht=scontent-atl3-1.xx&oh=2373c3749fa11cac51b880a65317de78&oe=60570172"
				/>
				<span className="flex items-center">
					<label className="text-gray-600 font-bold tracking-wider uppercase text-xs">HP</label>
					<input type="text" className="font-bold rounded bg-transparent w-6 text-right" placeholder="#" />
					<span className="px-1">/</span>
					<input type="text" className="rounded bg-transparent w-6" placeholder="#" />
				</span>
			</div>
			<div className="w-2/3">
				<input
					type="text"
					className="text-2xl font-bold rounded bg-transparent pl-1 w-full overflow-ellipsis"
					defaultValue={characterName}
					placeholder="✎ Character Name..."
				/>
				<div className="flex flex-col">
					<input type="text" className="text-xs text-gray-600 italic w-full rounded bg-transparent pl-1" placeholder="✎ Class..."></input>
					<input
						type="text"
						className="text-xs text-gray-600 italic w-full rounded bg-transparent pl-1 mb-1"
						placeholder="✎ Alignment..."
					/>
					<div className="stats grid grid-cols-4 xl:grid-cols-6 items-center w-full mr-2">
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">STR</label>
						<input type="text" className="w-14 rounded bg-transparent" placeholder="# (±#)"></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">DEX</label>
						<input type="text" className="w-14 rounded bg-transparent" placeholder="# (±#)"></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">CON</label>
						<input type="text" className="w-14 rounded bg-transparent" placeholder="# (±#)"></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">INT</label>
						<input type="text" className="w-14 rounded bg-transparent" placeholder="# (±#)"></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">WIS</label>
						<input type="text" className="w-14 rounded bg-transparent" placeholder="# (±#)"></input>
						<label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">CHA</label>
						<input type="text" className="w-14 rounded bg-transparent" placeholder="# (±#)"></input>
					</div>
					<label className="font-bold tracking-wider uppercase text-xs">Actions</label>
					<textarea className="text-xs rounded-md px-1" placeholder="Actions..."></textarea>
				</div>
			</div>
		</div>
	);
}

export default Card;
