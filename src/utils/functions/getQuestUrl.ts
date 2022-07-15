import { QUIZ_MAIN_URL } from '../constants/constants'

interface FuncProps {
	category: string|null
	difficulty: string|null
}

export const getQuestUrl = ({category, difficulty}:FuncProps) => {
	let url = QUIZ_MAIN_URL + `?amount=1&type=multiple&encode=base64`
	url = difficulty ? url + `&difficulty=${difficulty}`: url
	url = category ? url + `&category=${category}`: url
	return url
}