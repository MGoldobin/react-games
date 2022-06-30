export const shuffleArray = <T>(array: T[]): T[] => {
	return array.concat(array).sort(() => Math.random() - 0.5)
}