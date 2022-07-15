export const shuffleDoubleArray = <T>(array: T[]): T[] => {
	return array.concat(array).sort(() => Math.random() - 0.5)
}

export const shuffleArray = <T>(array: T[]): T[] => {
	return array.sort(() => Math.random() - 0.5)
}