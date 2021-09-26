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
        <button type="button" onClick={() => onFlipClicked()}>flip</button>
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
            placeholder="THIS IS THE BACK OF THE CARD"
            onChange={update}
          ></input>
        </div>
        </Tooltip>
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
    </div>
	);
}

export default CardBack;
