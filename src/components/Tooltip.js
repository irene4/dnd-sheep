function Tooltip({ text, sz }) {
	return <div className={`tooltip p-1 text-${sz} rounded`}>{text}</div>;
}

export default Tooltip;
