import { QUIZ_MAIN_URL } from '../constants/constants'

interface FuncProps {
	category: string
	difficulty: string
}

export const getQuestUrl = ({category, difficulty}:FuncProps) => {
	let url = QUIZ_MAIN_URL + `?amount=1&type=multiple`
	url = difficulty ? url + `&difficulty=${difficulty}`: url
	url = category ? url + `&category=${category}`: url
	return url
}