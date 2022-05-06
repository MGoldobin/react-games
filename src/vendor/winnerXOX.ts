const whoWinner = (fields:Array<number|null>):string|any => {
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

	if (fields.includes(null)) {
		for (let i = 0; i < winLines.length; i++) {
			const [a, b, c] = winLines[i]
			if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
				return "Победил " + fields[a]
			}
		}
		return null
	}
	else return "Ничья..."
}

export default whoWinner