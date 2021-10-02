import { useState, useRef, useEffect } from 'react';
import Tooltip from './Tooltip';


function CardBack({ data, updateField, onFlipClicked }) {
	const nopicUrl = 'https://i.imgur.com/ysksdxg.jpg';
	const [showUrl, setShowUrl] = useState(false);
	const urlRef = useRef();

	function update(e) {
		updateField(data.id, e.target.id, e.target.value);
	}
	function updateWithoutEvent(field, value) {
		updateField(data.id, field, value);
	}
	useEffect(() => {
		let clickOutside = (e) => {
			if (!urlRef?.current?.contains(e.target)) {
				setShowUrl(false);
			}
		};
		document.addEventListener('mousedown', clickOutside);
		return () => {
			document.removeEventListener('mousedown', clickOutside);
		};
	}, []);

	return (
    <div className="flex relative w-full sm:w-auto sm:rounded-2xl bg-white dark:bg-gray-800 dark:text-white p-4 pr-8 sm:m-2 sm:shadow-md">
      <div className="flex flex-col items-center w-5/6 h-5/6">
        <Tooltip text={data.status} enabled={data.status?.length > 15}>
        <div className="flex h-4 text-xxxxs text-gray-400 align-left">
          <svg className="h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>

          <input
            id="status"
            value={data.status}
            className="border rounded-full pl-2 pt-1 w-28 overflow-ellipsis"
            type="text"
            placeholder="..."
            onChange={update}
          ></input>
        </div>
        </Tooltip>
        <label className="tracking-wider text-xs">Items</label>
          <textarea
            id="items"
            value={data.notes}
            className="text-xs rounded-md px-1 border"
            placeholder="Items..."
            height="1rem"
            onChange={update}
          ></textarea>
      </div>
      <div className="sm:max-w-12">
      <Tooltip text={data.name} enabled={data.name?.length > 12}>
          <input
            id="name"
            value={data.name}
            type="text"
            className="text-2xl rounded bg-transparent pl-1 w-full overflow-ellipsis"
            placeholder="✎ Character Name..."
            onChange={update}
          />
        </Tooltip>
        <div className="flex flex-col">
          <div className="stats grid grid-cols-4 items-center w-full mr-2">
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">ACROBATICS</label>
            <input
              id="stats.str"
              value={data.stats.str}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">ANIMALS</label>
            <input
              id="stats.dex"
              value={data.stats.dex}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">ARCANA</label>
            <input
              id="stats.con"
              value={data.stats.con}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">ATHLETICS</label>
            <input
              id="stats.int"
              value={data.stats.int}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">DECEIVE</label>
            <input
              id="stats.wis"
              value={data.stats.wis}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">HISTORY</label>
            <input
              id="stats.cha"
              value={data.stats.cha}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">INSIGHT</label>
            <input
              id="stats.str"
              value={data.stats.str}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">INTIMIDATE</label>
            <input
              id="stats.dex"
              value={data.stats.dex}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">INVESTIGATE</label>
            <input
              id="stats.con"
              value={data.stats.con}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">MEDICINE</label>
            <input
              id="stats.int"
              value={data.stats.int}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">NATURE</label>
            <input
              id="stats.wis"
              value={data.stats.wis}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">PERCEIVE</label>
            <input
              id="stats.cha"
              value={data.stats.cha}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">PERFORM</label>
            <input
              id="stats.con"
              value={data.stats.con}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">PERSUADE</label>
            <input
              id="stats.int"
              value={data.stats.int}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">RELIGION</label>
            <input
              id="stats.wis"
              value={data.stats.wis}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">SLEIGHT</label>
            <input
              id="stats.cha"
              value={data.stats.cha}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">STEALTH</label>
            <input
              id="stats.wis"
              value={data.stats.wis}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
            <label className="text-gray-500 tracking-wider text-xxxxs p-1">SURVIVAL</label>
            <input
              id="stats.cha"
              value={data.stats.cha}
              type="text"
              className="w-14 rounded bg-transparent text-xxxxs text-center"
              placeholder="±0"
              onChange={update}
            ></input>
          </div>
        </div>
      </div>
      <button
          className="absolute text-sm text-gray-200 hover:text-gray-300 bottom-2 right-2"
          onClick={() => onFlipClicked()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172" fill="#000000"><g transform=""><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><g fill="#cccccc"><path d="M86,17.2c-37.96094,0 -68.8,30.83906 -68.8,68.8c-0.01344,1.23625 0.63156,2.39188 1.70656,3.02344c1.075,0.61813 2.39187,0.61813 3.46687,0c1.075,-0.63156 1.72,-1.78719 1.70656,-3.02344c0,-34.23875 27.68125,-61.92 61.92,-61.92c21.48656,0 40.33938,10.93813 51.45219,27.52h-23.93219c-1.23625,-0.01344 -2.39187,0.63156 -3.02344,1.70656c-0.61813,1.075 -0.61813,2.39187 0,3.46687c0.63156,1.075 1.78719,1.72 3.02344,1.70656h34.4v-34.4c0.01344,-0.92719 -0.34937,-1.8275 -1.00781,-2.48594c-0.65844,-0.65844 -1.55875,-1.02125 -2.48594,-1.00781c-1.89469,0.04031 -3.41312,1.59906 -3.38625,3.49375v20.68031c-12.56406,-16.72969 -32.54562,-27.56031 -55.04,-27.56031zM151.30625,82.50625c-1.89469,0.04031 -3.41312,1.59906 -3.38625,3.49375c0,34.23875 -27.68125,61.92 -61.92,61.92c-21.48656,0 -40.35281,-10.93812 -51.45219,-27.52h23.93219c1.23625,0.02688 2.39188,-0.63156 3.02344,-1.69312c0.61813,-1.075 0.61813,-2.40531 0,-3.48031c-0.63156,-1.06156 -1.78719,-1.72 -3.02344,-1.70656h-29.42812c-0.44344,-0.08062 -0.88688,-0.08062 -1.33031,0h-3.64156v34.4c-0.01344,1.23625 0.63156,2.39188 1.70656,3.02344c1.075,0.61813 2.39187,0.61813 3.46687,0c1.075,-0.63156 1.72,-1.78719 1.70656,-3.02344v-20.69375c12.55063,16.72969 32.54563,27.57375 55.04,27.57375c37.96094,0 68.8,-30.83906 68.8,-68.8c0.01344,-0.92719 -0.34937,-1.8275 -1.00781,-2.48594c-0.65844,-0.65844 -1.55875,-1.02125 -2.48594,-1.00781z"></path></g></g></g>
          </svg>
        </button>
    </div>
	);
}

export default CardBack;
