function whoWinner(fields) {
	const winLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]

	for(let i = 0; i < winLines.length; i++)
	{
		const [a, b, c] = winLines[i]
		if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
			return fields[a]
		}
	}
	return null
}

export default whoWinner;