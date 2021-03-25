import { useState, useRef } from 'react';
import useFirestore from '../hooks/useFirestore';

function ColorPicker({ data, slug }) {
	data = data || { backgroundColor: 'antiquewhite'};
	const { updateField } = useFirestore(slug);
	const [isOpen, setIsOpen] = useState(false);
	// let [color, setColor] = useState('antiquewhite');
	const colorSelectRef = useRef(null);
	const colors = ['antiquewhite', '#2d3748', '#009688', '#afbbc9', '#9C27B0', '#FFEB3B', '#4CAF50', '#f22c54'];
	document.body.style = `background: ${data.backgroundColor};`;

	return (
		<div className="relative m-2">
			<div className="flex">
				<button
					className="w-10 h-10 border border-black rounded-full focus:outline-none focus:shadow-outline inline-flex p-2 shadow"
					style={{ background: `${data.backgroundColor}` }}
					onClick={() => setIsOpen(!isOpen)}
				>
					<svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path fill="none" d="M15.584 10.001L13.998 8.417 5.903 16.512 5.374 18.626 7.488 18.097z" />
						<path d="M4.03,15.758l-1,4c-0.086,0.341,0.015,0.701,0.263,0.949C3.482,20.896,3.738,21,4,21c0.081,0,0.162-0.01,0.242-0.03l4-1 c0.176-0.044,0.337-0.135,0.465-0.263l8.292-8.292l1.294,1.292l1.414-1.414l-1.294-1.292L21,7.414 c0.378-0.378,0.586-0.88,0.586-1.414S21.378,4.964,21,4.586L19.414,3c-0.756-0.756-2.072-0.756-2.828,0l-2.589,2.589l-1.298-1.296 l-1.414,1.414l1.298,1.296l-8.29,8.29C4.165,15.421,4.074,15.582,4.03,15.758z M5.903,16.512l8.095-8.095l1.586,1.584 l-8.096,8.096l-2.114,0.529L5.903,16.512z" />
					</svg>
				</button>
				{isOpen && (
					<div className="absolute z-50 top-12 sm:top-0 sm:left-12 bg-white rounded-lg shadow">
						<div className="sm:flex p-1">
							{colors.map((thisColor) => {
								return (
									<div
										key={thisColor}
										className={thisColor === data.backgroundColor ? 'w-5 h-5 rounded-full m-1 ring ring-gray-300' : 'w-5 h-5 rounded-full m-1'}
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
