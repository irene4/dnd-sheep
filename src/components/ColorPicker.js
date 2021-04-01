import { useState, useRef } from 'react';

function ColorPicker({ data, updateField }) {
	data = data || { backgroundColor: 'antiquewhite' };
	const [isOpen, setIsOpen] = useState(false);
	const colorSelectRef = useRef(null);
	const colors = ['antiquewhite', '#2d3748', '#009688', '#afbbc9', '#9C27B0', '#FFEB3B', '#4CAF50', '#f22c54'];
	document.body.style = `background: ${data.backgroundColor};`;

	return (
		<div className="relative m-2">
			<div className="flex">
				<button
					className="h-10 w-10 text-white hover:text-gray-200 rounded-full focus:outline-none focus:shadow-outline inline-flex p-2"
					style={{ background: `${data.backgroundColor}` }}
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg
						className="w-6 h-6 fill-current stroke-black"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="black"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
						/>
					</svg>
				</button>
				{isOpen && (
					<div className="absolute z-50 top-12 sm:top-0 sm:left-12 bg-white rounded-lg shadow">
						<div className="sm:flex p-1">
							{colors.map((thisColor) => {
								return (
									<div
										key={thisColor}
										className={
											thisColor === data.backgroundColor
												? 'w-5 h-5 rounded-full m-1 ring ring-gray-300'
												: 'w-5 h-5 rounded-full m-1'
										}
										style={{ background: thisColor, cursor: 'pointer' }}
										onClick={() => updateField('config', 'backgroundColor', thisColor)}
									></div>
								);
							})}
							<input
								ref={colorSelectRef}
								className="sr-only bottom-0"
								type="color"
								value={data.backgroundColor}
								onChange={(e) => updateField('config', 'backgroundColor', e.target.value)}
							/>
							<div
								className="w-5 h-5 rounded-full m-1"
								style={{ cursor: 'pointer' }}
								onClick={() => (colorSelectRef.current !== null ? colorSelectRef.current.click() : console.log('Error'))}
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={data.backgroundColor} stroke="gray">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default ColorPicker;
