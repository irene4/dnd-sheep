import { useState, useRef, useEffect } from 'react';
import Dice from './Dice';
import ProgressBar from './ProgressBar';
import Tooltip from './Tooltip';


function CardFront({ data, updateField, onFlipClicked }) {
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
          <div className="flex h-4 text-xxs text-gray-400 align-left">
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
              placeholder="...."
              onChange={update}
            ></input>
          </div>
        </Tooltip>
        <div className="relative max-w-10 w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 p-2">
          <img
            className="rounded-full shadow-md w-full h-full object-cover"
            src={data.url || nopicUrl}
            alt="Character"
            onClick={() => setShowUrl(true)}
          />
          {showUrl && (
            <input
              id="url"
              value={data.url}
              type="text"
              className="absolute tooltipped-btn bottom-1/4 left-1/4 border text-blue-400 rounded shadow"
              placeholder="Paste an image url here!"
              onChange={update}
              ref={urlRef}
            />
          )}
        </div>
        <span className="flex items-center">
          <label className="text-gray-600 font-bold tracking-wider uppercase text-xs">HP</label>
          <input
            id="hp.curr"
            value={data.hp.curr}
            type="text"
            className="font-bold rounded bg-transparent w-6 text-right"
            placeholder="#"
            onChange={update}
            //onFocus={() => console.log('Focus')}
          />
          <span className="px-1">/</span>
          <input id="hp.total" value={data.hp.total} type="text" className="rounded bg-transparent w-6" placeholder="#" onChange={update} />
        </span>
        <ProgressBar update={update} curr={data.hp.curr} tot={data.hp.total} updateWithoutEvent={updateWithoutEvent} />
        <Dice data={data.dice || ''} update={update} updateWithoutEvent={updateWithoutEvent} />
        <div className="text-left mt-1">
          <span className="flex items-center text-xxxs">
            <span className="text-gray-500 font-bold tracking-wider">Speed</span>
            <input id="speed" value={data.speed} type="text" className="w-4 ml-1" placeholder="#" onChange={update} />
          </span>
          <span className="flex items-center text-xxxs">
            <span className="text-gray-500 font-bold tracking-wider">Armor Class</span>
            <input id="armor" value={data.armor} type="text" className="w-4 ml-1" placeholder="#" onChange={update} />
          </span>
          <span className="flex items-center text-xxxs">
            <span className="text-gray-500 font-bold tracking-wider">Hit Dice</span>
            <select id="hitDice" value={data.hitDice} onChange={update}>
              <option>d12</option>
              <option>d10</option>
              <option>d8</option>
              <option>d6</option>
            </select>
          </span>
        </div>
      </div>
      <div className="sm:max-w-12">
        <Tooltip text={data.name} enabled={data.name?.length > 12}>
          <input
            id="name"
            value={data.name}
            type="text"
            className="text-2xl font-bold rounded bg-transparent pl-1 w-full overflow-ellipsis"
            placeholder="✎ Character Name..."
            onChange={update}
          />
        </Tooltip>
        <div className="flex flex-col">
          <input
            id="class"
            value={data.class}
            type="text"
            className="text-xs text-gray-600 italic w-full rounded bg-transparent pl-1"
            placeholder="✎ Class..."
            onChange={update}
          ></input>
          <input
            id="alignment"
            value={data.alignment}
            type="text"
            className="text-xs text-gray-600 italic w-full rounded bg-transparent pl-1 mb-1"
            placeholder="✎ Alignment..."
            onChange={update}
          />
          <div className="stats grid grid-cols-4 items-center w-full mr-2">
            <label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">STR</label>
            <input
              id="stats.str"
              value={data.stats.str}
              type="text"
              className="w-14 rounded bg-transparent text-sm"
              placeholder="# (±#)"
              onChange={update}
            ></input>
            <label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">DEX</label>
            <input
              id="stats.dex"
              value={data.stats.dex}
              type="text"
              className="w-14 rounded bg-transparent text-sm"
              placeholder="# (±#)"
              onChange={update}
            ></input>
            <label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">CON</label>
            <input
              id="stats.con"
              value={data.stats.con}
              type="text"
              className="w-14 rounded bg-transparent text-sm"
              placeholder="# (±#)"
              onChange={update}
            ></input>
            <label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">INT</label>
            <input
              id="stats.int"
              value={data.stats.int}
              type="text"
              className="w-14 rounded bg-transparent text-sm"
              placeholder="# (±#)"
              onChange={update}
            ></input>
            <label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">WIS</label>
            <input
              id="stats.wis"
              value={data.stats.wis}
              type="text"
              className="w-14 rounded bg-transparent text-sm"
              placeholder="# (±#)"
              onChange={update}
            ></input>
            <label className="text-gray-500 font-bold tracking-wider uppercase text-xs p-1">CHA</label>
            <input
              id="stats.cha"
              value={data.stats.cha}
              type="text"
              className="w-14 rounded bg-transparent text-sm"
              placeholder="# (±#)"
              onChange={update}
            ></input>
          </div>
          <label className="font-bold tracking-wider uppercase text-xs">Actions</label>
          <textarea
            id="actions"
            value={data.actions}
            className="text-xs rounded-md px-1 border"
            placeholder="Actions..."
            onChange={update}
          ></textarea>
          <label className="font-bold tracking-wider uppercase text-xs">Notes</label>
          <textarea
            id="notes"
            value={data.notes}
            className="text-xs rounded-md px-1 border"
            placeholder="Notes..."
            onChange={update}
          ></textarea>
        </div>
      </div>
      <button
        className="absolute text-sm text-gray-200 hover:text-gray-300 top-2 right-2"
        onClick={() => updateField(data.id, 'active', false)}
      >
        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        className="absolute text-sm text-gray-200 hover:text-gray-300 bottom-2 right-2"
        onClick={() => onFlipClicked()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172" fill="#000000"><g transform=""><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z" fill="none"></path><path d="" fill="none"></path><path d="" fill="none"></path><g fill="#cccccc"><path d="M86,17.2c-37.96094,0 -68.8,30.83906 -68.8,68.8c-0.01344,1.23625 0.63156,2.39188 1.70656,3.02344c1.075,0.61813 2.39187,0.61813 3.46687,0c1.075,-0.63156 1.72,-1.78719 1.70656,-3.02344c0,-34.23875 27.68125,-61.92 61.92,-61.92c21.48656,0 40.33938,10.93813 51.45219,27.52h-23.93219c-1.23625,-0.01344 -2.39187,0.63156 -3.02344,1.70656c-0.61813,1.075 -0.61813,2.39187 0,3.46687c0.63156,1.075 1.78719,1.72 3.02344,1.70656h34.4v-34.4c0.01344,-0.92719 -0.34937,-1.8275 -1.00781,-2.48594c-0.65844,-0.65844 -1.55875,-1.02125 -2.48594,-1.00781c-1.89469,0.04031 -3.41312,1.59906 -3.38625,3.49375v20.68031c-12.56406,-16.72969 -32.54562,-27.56031 -55.04,-27.56031zM151.30625,82.50625c-1.89469,0.04031 -3.41312,1.59906 -3.38625,3.49375c0,34.23875 -27.68125,61.92 -61.92,61.92c-21.48656,0 -40.35281,-10.93812 -51.45219,-27.52h23.93219c1.23625,0.02688 2.39188,-0.63156 3.02344,-1.69312c0.61813,-1.075 0.61813,-2.40531 0,-3.48031c-0.63156,-1.06156 -1.78719,-1.72 -3.02344,-1.70656h-29.42812c-0.44344,-0.08062 -0.88688,-0.08062 -1.33031,0h-3.64156v34.4c-0.01344,1.23625 0.63156,2.39188 1.70656,3.02344c1.075,0.61813 2.39187,0.61813 3.46687,0c1.075,-0.63156 1.72,-1.78719 1.70656,-3.02344v-20.69375c12.55063,16.72969 32.54563,27.57375 55.04,27.57375c37.96094,0 68.8,-30.83906 68.8,-68.8c0.01344,-0.92719 -0.34937,-1.8275 -1.00781,-2.48594c-0.65844,-0.65844 -1.55875,-1.02125 -2.48594,-1.00781z"></path></g></g></g>
        </svg>
      </button>
      <input
        id="initiative"
        value={data.initiative}
        type="text"
        className="absolute text-xs text-center text-gray-300 placeholder-gray-300 h-4 w-4 top-7 right-2 rounded"
        placeholder="#"
        onChange={update}
      ></input>
    </div>
	);
}

export default CardFront;
