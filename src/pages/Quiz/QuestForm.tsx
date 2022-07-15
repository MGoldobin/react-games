import React, { Dispatch, useState, SetStateAction } from 'react'
import { observer } from 'mobx-react-lite'
import styled from 'styled-components'

import { QuestionData } from '../../utils/types/QuestionData'
import { shuffleArray } from '../../utils/functions/shuffleArray'

interface QuestFormProps {
	data: QuestionData,
	setPlaying: Dispatch<SetStateAction<boolean>>
}

const StyledQuestForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 80%;
`

const Question = styled.h1`
	text-decoration: underline;
`

const AnswersGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
`

const Answer = styled.p`
	border: 1px solid ${props => props.theme.borderColor};
	height: 30px;
	line-height: 30px;

	&:hover {
		border: 2px solid ${props => props.theme.borderColor};
		cursor: pointer;
	}
`

const QuestForm = observer(({data, setPlaying}: QuestFormProps) => {
	const [findRightAnswer, setFindRightAnswer] = useState(false)
	const [clickAnswer, setClickAnswer] = useState(false)
	const answersArr = shuffleArray([...data.incorrect_answers, data.correct_answer])

	const checkAnswer = (answer: string) => {
		return answer === data.correct_answer
	}

	const handleAnswer = (answer: string) => {
		setClickAnswer(true)
		if (checkAnswer(answer)) setFindRightAnswer(true)
	}

	const border = (answer: string) => {
		if (clickAnswer && checkAnswer(answer)) return '3px solid green'
		if (clickAnswer && !checkAnswer(answer)) return '3px solid red'
		return '1px solid #000'
	}
	
	const final = () => {
		if (clickAnswer) {
			return findRightAnswer ? "Вы ответили правильно!!!" : `Правильный ответ: ${data.correct_answer}`
		} else return ""
	}

	return (
		<StyledQuestForm>
			<Question>{data.question}</Question>
			<AnswersGrid >
				{
					answersArr.map(answer => 
						<Answer 
							key={answer}
							style={{
								border: border(answer)
							}}
							onClick={() => handleAnswer(answer)}
						>
							{answer}
						</Answer>
					)
				}
			</AnswersGrid>
			{
				final()
			}
			{
				clickAnswer 
				? <button onClick={() => setPlaying(false)}>Следующий вопрос</button> /*исправить баг и сразу грузить новый вопрос*/
				: null
			}
			
		</StyledQuestForm>
	)
})

export default QuestForm