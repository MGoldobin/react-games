import { useFetch } from "./useFetch"
import { QUIZ_MAIN_URL } from '../constants/constants'

interface UseFetchQuestionProps {
	category?: string,
	difficulty?: string
}

export const useFetchQuestion = ({category, difficulty}: UseFetchQuestionProps) => {
	let url = QUIZ_MAIN_URL + `?amount=1&type=multiple`
	url = !difficulty ? url + `&difficulty=${difficulty}`: url
	url = !category ? url + `&category=${category}`: url
	return useFetch({url: url})
}