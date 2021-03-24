function Tooltip({ text, sz }) {
	// sz should be a Tailwind value like xs, sm, xl, etc.
	return <div className={`tooltip p-1 text-${sz} rounded`}>{text}</div>;
}

export default Tooltip;
