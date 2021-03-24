function Tooltip({ text, children, sz = 'xxs', enabled = true, color = "white"}) {
	// sz should be a Tailwind value like xs, sm, xl, etc.
	return <div className="tooltipped">
		{ children }
		{ enabled && <div className={`tooltip p-1 text-${color} text-${sz} rounded`}>{text}</div> }
	</div>
}

export default Tooltip;
